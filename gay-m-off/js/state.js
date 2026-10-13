/**
 * GAY-M OFF — Game State Module
 * Central single source of truth for the game state machine.
 */

export const GAME_PHASES = {
  BOOT: "boot",
  MENU: "menu",
  HOW_TO_PLAY: "how-to-play",
  QUIZ: "quiz",
  CHALLENGE: "challenge",
  ENDING: "ending"
};

const INITIAL_STATE = {
  phase: GAME_PHASES.BOOT,
  currentQuestion: 0,
  currentChallenge: 0,
  broMeter: 50,
  frustration: 0,
  completedQuestions: [],
  completedChallenges: [],
  challengeAttempts: {
    runaway: 0,
    progressbar: 0,
    impossible: 0
  },
  ending: null,
  soundEnabled: false,
  bootCompleted: false
};

class StateStore {
  constructor() {
    this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
    this.listeners = new Set();
  }

  get() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(changedProp) {
    for (const listener of this.listeners) {
      try {
        listener(this.state, changedProp);
      } catch (err) {
        console.error("State listener error:", err);
      }
    }
  }

  setPhase(nextPhase) {
    if (!Object.values(GAME_PHASES).includes(nextPhase)) {
      console.warn("Invalid game phase attempted:", nextPhase);
      return;
    }
    this.state.phase = nextPhase;
    this.notify("phase");
  }

  updateBroMeter(delta) {
    const current = Number.isFinite(this.state.broMeter) ? this.state.broMeter : 50;
    const nextVal = Math.max(0, Math.min(100, Math.round(current + delta)));
    this.state.broMeter = nextVal;
    this.notify("broMeter");
    return this.state.broMeter;
  }

  addFrustration(amount = 1) {
    this.state.frustration += amount;
    this.notify("frustration");
  }

  incrementAttempt(challengeKey) {
    if (!this.state.challengeAttempts[challengeKey]) {
      this.state.challengeAttempts[challengeKey] = 0;
    }
    this.state.challengeAttempts[challengeKey] += 1;
    this.notify("challengeAttempts");
    return this.state.challengeAttempts[challengeKey];
  }

  setSoundEnabled(enabled) {
    this.state.soundEnabled = Boolean(enabled);
    this.notify("soundEnabled");
  }

  toggleSound() {
    this.setSoundEnabled(!this.state.soundEnabled);
    return this.state.soundEnabled;
  }

  recordQuestionCompletion(index, answerIndex) {
    if (!this.state.completedQuestions.includes(index)) {
      this.state.completedQuestions.push({ questionIndex: index, answerIndex });
    }
    this.notify("completedQuestions");
  }

  recordChallengeCompletion(index) {
    if (!this.state.completedChallenges.includes(index)) {
      this.state.completedChallenges.push(index);
    }
    this.notify("completedChallenges");
  }

  setEnding(endingId) {
    this.state.ending = endingId;
    this.notify("ending");
  }

  reset() {
    const keepSound = this.state.soundEnabled;
    this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
    this.state.soundEnabled = keepSound;
    this.state.bootCompleted = true; // Avoid re-forcing 2s boot on restart
    this.state.phase = GAME_PHASES.MENU;
    this.notify("reset");
  }
}

export const gameState = new StateStore();
