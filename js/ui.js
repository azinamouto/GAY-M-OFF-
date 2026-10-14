/**
 * GAY-M OFF — UI Management Module
 * Screen switching, HUD updates, quiz rendering, ending screen display, and visual FX.
 */

import { gameState, GAME_PHASES } from './state.js';
import { narrator } from './narrator.js';
import { gameAudio } from './audio.js';
import { QUIZ_QUESTIONS } from './questions.js';
import { evaluateEnding } from './endings.js';

export class UIManager {
  constructor() {
    this.currentScreen = null;
    this.challengeManager = null;
    this.cachedElements = {};
  }

  setChallengeManager(cm) {
    this.challengeManager = cm;
  }

  initDOM() {
    this.cachedElements = {
      // Screens
      screenBoot: document.getElementById('screen-boot'),
      screenMenu: document.getElementById('screen-menu'),
      screenHowToPlay: document.getElementById('screen-how-to-play'),
      screenQuiz: document.getElementById('screen-quiz'),
      screenChallenge: document.getElementById('screen-challenge'),
      screenEnding: document.getElementById('screen-ending'),

      // HUD
      broMeterFill: document.getElementById('bro-meter-fill'),
      broMeterStatus: document.getElementById('bro-meter-status'),
      soundToggleBtn: document.getElementById('btn-sound-toggle'),

      // Narrator
      narratorText: document.getElementById('narrator-text-output'),
      narratorCard: document.getElementById('narrator-card'),

      // Quiz Elements
      quizStep: document.getElementById('quiz-step'),
      quizQuestionText: document.getElementById('quiz-question-text'),
      quizOptionsGrid: document.getElementById('quiz-options-grid'),

      // Challenges Header
      challengeStepTitle: document.getElementById('challenge-step-title'),
      challengeStepCounter: document.getElementById('challenge-step-counter'),

      // Ending Elements
      endingTitle: document.getElementById('ending-title'),
      endingTagline: document.getElementById('ending-tagline'),
      endingQuote: document.getElementById('ending-quote'),
      endingDesc: document.getElementById('ending-desc'),
      endingBroScore: document.getElementById('ending-bro-score'),
      endingFrustration: document.getElementById('ending-frustration'),

      // Suspicion Banner
      suspicionBanner: document.getElementById('suspicion-banner')
    };

    narrator.setTargetElement(this.cachedElements.narratorText);

    // Skip typewriter on dialogue click
    if (this.cachedElements.narratorCard) {
      this.cachedElements.narratorCard.addEventListener('click', () => {
        narrator.skipTypewriter();
      });
    }

    // Subscribe to state updates
    gameState.subscribe((state, prop) => this.handleStateChange(state, prop));
    this.updateHUD(gameState.get());
  }

  handleStateChange(state, prop) {
    if (prop === 'phase' || prop === 'reset') {
      this.renderPhase(state.phase);
    }
    if (prop === 'broMeter' || prop === 'reset') {
      this.updateBroMeter(state.broMeter);
    }
    if (prop === 'soundEnabled' || prop === 'reset') {
      this.updateSoundButton(state.soundEnabled);
    }
  }

  renderPhase(phase) {
    // Hide all screens
    const screens = [
      this.cachedElements.screenBoot,
      this.cachedElements.screenMenu,
      this.cachedElements.screenHowToPlay,
      this.cachedElements.screenQuiz,
      this.cachedElements.screenChallenge,
      this.cachedElements.screenEnding
    ];

    screens.forEach(s => {
      if (s) {
        s.classList.remove('active');
        s.setAttribute('aria-hidden', 'true');
      }
    });

    let targetScreen = null;

    switch (phase) {
      case GAME_PHASES.BOOT:
        targetScreen = this.cachedElements.screenBoot;
        break;
      case GAME_PHASES.MENU:
        targetScreen = this.cachedElements.screenMenu;
        narrator.speak('menu', true);
        break;
      case GAME_PHASES.HOW_TO_PLAY:
        targetScreen = this.cachedElements.screenHowToPlay;
        narrator.speak('how_to_play', true);
        break;
      case GAME_PHASES.QUIZ:
        targetScreen = this.cachedElements.screenQuiz;
        this.renderQuestion(gameState.get().currentQuestion);
        break;
      case GAME_PHASES.CHALLENGE:
        targetScreen = this.cachedElements.screenChallenge;
        this.startChallengePhase(gameState.get().currentChallenge);
        break;
      case GAME_PHASES.ENDING:
        targetScreen = this.cachedElements.screenEnding;
        this.renderEndingScreen();
        break;
      default:
        console.warn("Unknown phase:", phase);
    }

    if (targetScreen) {
      targetScreen.classList.add('active');
      targetScreen.setAttribute('aria-hidden', 'false');
      // Set accessible focus
      const focusTarget = targetScreen.querySelector('button, [tabindex="0"], h1, h2');
      if (focusTarget) {
        focusTarget.focus();
      }
    }
  }

  updateHUD(state) {
    this.updateBroMeter(state.broMeter);
    this.updateSoundButton(state.soundEnabled);
  }

  updateBroMeter(val) {
    const clamped = Math.max(0, Math.min(100, Math.round(val)));
    if (this.cachedElements.broMeterFill) {
      this.cachedElements.broMeterFill.style.width = `${clamped}%`;
    }

    let statusText = "Suspiciously Normal";
    if (clamped >= 76) {
      statusText = "System Cannot Decide";
    } else if (clamped >= 51) {
      statusText = "Certified Chaos";
    } else if (clamped >= 26) {
      statusText = "Bro Protocol Unstable";
    }

    if (this.cachedElements.broMeterStatus) {
      this.cachedElements.broMeterStatus.textContent = `${statusText} (${clamped}%)`;
    }
  }

  updateSoundButton(enabled) {
    if (this.cachedElements.soundToggleBtn) {
      this.cachedElements.soundToggleBtn.innerHTML = enabled 
        ? '🔊 SOUND: ON' 
        : '🔇 SOUND: OFF';
      this.cachedElements.soundToggleBtn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    }
  }

  // ==========================================
  // QUIZ SCREEN LOGIC
  // ==========================================
  renderQuestion(questionIndex) {
    const selectedQuestions = gameState.get().selectedQuestions || [];
    const question = selectedQuestions[questionIndex] || null;
    if (!question) {
      gameState.setPhase(GAME_PHASES.CHALLENGE);
      return;
    }

    if (this.cachedElements.quizStep) {
      this.cachedElements.quizStep.textContent = `QUESTION ${String(questionIndex + 1).padStart(2, '0')} / ${selectedQuestions.length}`;
    }

    if (this.cachedElements.quizQuestionText) {
      this.cachedElements.quizQuestionText.textContent = question.text;
    }

    if (this.cachedElements.quizOptionsGrid) {
      const keys = ['A', 'B', 'C', 'D'];
      this.cachedElements.quizOptionsGrid.innerHTML = question.options.map((opt, idx) => `
        <button type="button" class="option-btn" data-opt-idx="${idx}">
          <span class="opt-key">${keys[idx]}</span>
          <span class="opt-text">${opt.text}</span>
        </button>
      `).join('');

      const buttons = this.cachedElements.quizOptionsGrid.querySelectorAll('.option-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-opt-idx'), 10);
          this.handleOptionSelect(questionIndex, idx, question.options[idx], buttons, question.id);
        });
      });
    }
  }

  handleOptionSelect(questionIndex, optIndex, optionData, allButtons, questionId) {
    allButtons.forEach(b => {
      b.disabled = true;
      b.style.pointerEvents = 'none';
    });

    gameAudio.playAnswerSelect();
    gameState.recordQuestionCompletion(questionId || questionIndex, optIndex);
    gameState.updateBroMeter(optionData.delta);

    this.triggerEffect(optionData.effect);
    narrator.speak(optionData.reaction);

    setTimeout(() => {
      const nextIndex = questionIndex + 1;
      gameState.get().currentQuestion = nextIndex;
      this.renderQuestion(nextIndex);
    }, 1400);
  }

  triggerEffect(effectType) {
    if (effectType === 'shake') {
      document.body.classList.add('shake-active');
      gameAudio.playWrongAnswer();
      setTimeout(() => document.body.classList.remove('shake-active'), 350);
    } else if (effectType === 'glitch') {
      const cabinet = document.querySelector('.arcade-cabinet');
      if (cabinet) cabinet.classList.add('glitch-flash');
      gameAudio.playGlitch();
      setTimeout(() => cabinet && cabinet.classList.remove('glitch-flash'), 300);
    } else if (effectType === 'suspicion') {
      if (this.cachedElements.suspicionBanner) {
        this.cachedElements.suspicionBanner.classList.add('show');
        setTimeout(() => {
          if (this.cachedElements.suspicionBanner) {
            this.cachedElements.suspicionBanner.classList.remove('show');
          }
        }, 1800);
      }
    }
  }

  // ==========================================
  // CHALLENGE PHASE
  // ==========================================
  startChallengePhase(challengeIndex) {
    const titles = [
      "CHALLENGE A: THE RUNAWAY BUTTON",
      "CHALLENGE B: THE FAKE PROGRESS BAR",
      "CHALLENGE C: THE IMPOSSIBLE QUESTION"
    ];

    if (this.cachedElements.challengeStepTitle) {
      this.cachedElements.challengeStepTitle.textContent = titles[challengeIndex] || "RAGEBAIT ARENA";
    }

    if (this.cachedElements.challengeStepCounter) {
      this.cachedElements.challengeStepCounter.textContent = `PHASE ${challengeIndex + 1} / 3`;
    }

    if (this.challengeManager) {
      this.challengeManager.startChallenge(challengeIndex);
    }
  }

  advanceToEndings() {
    gameState.setPhase(GAME_PHASES.ENDING);
  }

  // ==========================================
  // ENDING SCREEN RENDERING
  // ==========================================
  renderEndingScreen() {
    const state = gameState.get();
    const ending = evaluateEnding(state);
    gameState.setEnding(ending.id);

    gameAudio.playFinalVerdict();

    if (this.cachedElements.endingTitle) {
      this.cachedElements.endingTitle.textContent = ending.title;
    }
    if (this.cachedElements.endingTagline) {
      this.cachedElements.endingTagline.textContent = ending.tagline;
    }
    if (this.cachedElements.endingQuote) {
      this.cachedElements.endingQuote.textContent = `"${ending.quote}"`;
    }
    if (this.cachedElements.endingDesc) {
      this.cachedElements.endingDesc.textContent = ending.description;
    }
    if (this.cachedElements.endingBroScore) {
      this.cachedElements.endingBroScore.textContent = `${state.broMeter}%`;
    }
    if (this.cachedElements.endingFrustration) {
      this.cachedElements.endingFrustration.textContent = `${state.frustration} pts`;
    }

    narrator.speak(ending.narratorKey, true);
  }
}

export const ui = new UIManager();
