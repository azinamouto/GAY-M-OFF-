/**
 * GAY-M OFF — UI Management Module (Upgraded)
 * Screen switching, HUD updates, quiz rendering, ending screen display, visual FX,
 * hesitation detection, rage-click spam tracking, narrator poke interactions, and viral roast copying.
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
    this.hesitationTimeout = null;
    this.clickTimestamps = [];
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
      broMeter: document.querySelector('.bro-meter-outer'),
      broMeterStatus: document.getElementById('bro-meter-status'),
      soundToggleBtn: document.getElementById('btn-sound-toggle'),

      // Narrator
      narratorText: document.getElementById('narrator-text-output'),
      narratorCard: document.getElementById('narrator-card'),

      // Quiz Elements
      quizStep: document.getElementById('quiz-step'),
      quizCategory: document.getElementById('quiz-category'),
      quizProgress: document.querySelector('.quiz-progress'),
      quizProgressFill: document.getElementById('quiz-progress-fill'),
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
      endingQuestions: document.getElementById('ending-questions'),
      endingFrustration: document.getElementById('ending-frustration'),
      endingPokes: document.getElementById('ending-pokes'),
      endingHesitation: document.getElementById('ending-hesitation'),
      endingReflexes: document.getElementById('ending-reflexes'),

      // Suspicion Banner
      suspicionBanner: document.getElementById('suspicion-banner')
    };

    narrator.setTargetElement(this.cachedElements.narratorText);

    // Narrator Interaction: Skip typewriter if typing, or POKE if idle!
    if (this.cachedElements.narratorCard) {
      const narratorCard = this.cachedElements.narratorCard;
      narratorCard.addEventListener('click', () => {
        const skipped = narrator.skipTypewriter();
        if (!skipped) {
          // Poke interaction!
          gameAudio.playGlassTap();
          gameState.state.pokesCount = (gameState.state.pokesCount || 0) + 1;

          const card = this.cachedElements.narratorCard;
          card.classList.remove('poked');
          void card.offsetWidth; // Force CSS reflow to replay animation
          card.classList.add('poked');

          const { penalty } = narrator.poke();
          if (penalty) {
            gameAudio.playBuzzer();
            gameState.updateBroMeter(-5);
            gameState.addFrustration(1);
            document.body.classList.add('shake-active');
            setTimeout(() => document.body.classList.remove('shake-active'), 300);
          }
        }
      });
      narratorCard.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          narratorCard.click();
        }
      });
    }

    // Global Rage / Spam Click Detector
    document.addEventListener('click', () => {
      const now = Date.now();
      this.clickTimestamps.push(now);
      this.clickTimestamps = this.clickTimestamps.filter(t => now - t < 850);

      if (this.clickTimestamps.length >= 6) {
        this.clickTimestamps = [];
        gameState.state.spamClicksCount = (gameState.state.spamClicksCount || 0) + 1;
        gameAudio.playGlitch();

        const cabinet = document.querySelector('.arcade-cabinet');
        if (cabinet) {
          cabinet.classList.add('glitch-flash');
          setTimeout(() => cabinet.classList.remove('glitch-flash'), 300);
        }

        if (this.cachedElements.suspicionBanner) {
          this.cachedElements.suspicionBanner.textContent = "⚠️ AGGRESSIVE SPAM DETECTED: MOUSE CALIBRATION FAILING ⚠️";
          this.cachedElements.suspicionBanner.classList.add('show');
          setTimeout(() => {
            if (this.cachedElements.suspicionBanner) {
              this.cachedElements.suspicionBanner.classList.remove('show');
            }
          }, 1800);
        }

        narrator.speak('spam_click', true);
      }
    });

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

  clearHesitationTimer() {
    if (this.hesitationTimeout) {
      clearTimeout(this.hesitationTimeout);
      this.hesitationTimeout = null;
    }
  }

  renderPhase(phase) {
    this.clearHesitationTimer();

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
    if (this.cachedElements.broMeter) {
      this.cachedElements.broMeter.setAttribute('aria-valuenow', String(clamped));
      this.cachedElements.broMeter.setAttribute('aria-valuetext', `${clamped}%`);
    }
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
  // QUIZ SCREEN LOGIC (UPGRADED)
  // ==========================================
  renderQuestion(questionIndex) {
    this.clearHesitationTimer();

    const selectedQuestions = gameState.get().selectedQuestions || [];
    const question = selectedQuestions[questionIndex] || null;
    if (!question) {
      gameState.setPhase(GAME_PHASES.CHALLENGE);
      return;
    }

    if (this.cachedElements.quizStep) {
      this.cachedElements.quizStep.textContent = `QUESTION ${String(questionIndex + 1).padStart(2, '0')} / ${selectedQuestions.length}`;
    }

    if (this.cachedElements.quizCategory) {
      this.cachedElements.quizCategory.textContent = question.category;
    }

    if (this.cachedElements.quizProgress) {
      this.cachedElements.quizProgress.setAttribute('aria-valuemax', String(selectedQuestions.length));
      this.cachedElements.quizProgress.setAttribute('aria-valuenow', String(questionIndex + 1));
      this.cachedElements.quizProgress.setAttribute('aria-valuetext', `Question ${questionIndex + 1} of ${selectedQuestions.length}`);
    }
    if (this.cachedElements.quizProgressFill) {
      const progress = ((questionIndex + 1) / selectedQuestions.length) * 100;
      this.cachedElements.quizProgressFill.style.width = `${progress}%`;
    }

    if (this.cachedElements.quizQuestionText) {
      this.cachedElements.quizQuestionText.textContent = question.text;
    }

    // Set Inactivity / Hesitation Roast Timer (8.5 seconds)
    this.hesitationTimeout = setTimeout(() => {
      if (gameState.get().phase === GAME_PHASES.QUIZ) {
        gameState.state.hesitationsCount = (gameState.state.hesitationsCount || 0) + 1;
        narrator.speak('hesitation', true);

        if (this.cachedElements.suspicionBanner) {
          this.cachedElements.suspicionBanner.textContent = "⚠️ OVERTHINKING DETECTED: BRO INTUITION DEGRADING ⚠️";
          this.cachedElements.suspicionBanner.classList.add('show');
          setTimeout(() => {
            if (this.cachedElements.suspicionBanner) {
              this.cachedElements.suspicionBanner.classList.remove('show');
            }
          }, 2000);
        }
      }
    }, 8500);

    if (this.cachedElements.quizOptionsGrid) {
      const keys = ['A', 'B', 'C', 'D'];
      this.cachedElements.quizOptionsGrid.innerHTML = question.options.map((opt, idx) => `
        <button type="button" class="option-btn" data-opt-idx="${idx}">
          <span class="opt-key">${keys[idx]}</span>
          <span class="opt-text">${opt.text}</span>
        </button>
      `).join('');

      const buttons = this.cachedElements.quizOptionsGrid.querySelectorAll('.option-btn');
      buttons.forEach((btn, idx) => {
        // Option bait jitter on suspicious/unhinged questions
        if (question.tier === 'unhinged' && (idx === 1 || idx === 2)) {
          let jittered = false;
          btn.addEventListener('mouseenter', () => {
            if (!jittered) {
              jittered = true;
              btn.classList.add('option-dodge');
              setTimeout(() => btn.classList.remove('option-dodge'), 350);
            }
          });
        }

        btn.addEventListener('click', () => {
          this.clearHesitationTimer();
          const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
          this.handleOptionSelect(questionIndex, optIdx, question.options[optIdx], buttons, question.id);
        });
      });
      buttons[0]?.focus();
    }
  }

  handleOptionSelect(questionIndex, optIndex, optionData, allButtons, questionId) {
    this.clearHesitationTimer();

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
        this.cachedElements.suspicionBanner.textContent = "⚠️ SUSPICION DETECTED: BRO PROTOCOL ANOMALY RECORDED ⚠️";
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
    this.clearHesitationTimer();

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
    this.clearHesitationTimer();
    gameState.setPhase(GAME_PHASES.ENDING);
  }

  // ==========================================
  // ENDING SCREEN RENDERING & VIRAL ROAST COPY
  // ==========================================
  renderEndingScreen() {
    this.clearHesitationTimer();
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
    if (this.cachedElements.endingQuestions) {
      this.cachedElements.endingQuestions.textContent = `${state.completedQuestions.length} / ${state.selectedQuestions.length}`;
    }
    if (this.cachedElements.endingFrustration) {
      this.cachedElements.endingFrustration.textContent = `${state.frustration} pts`;
    }
    if (this.cachedElements.endingPokes) {
      this.cachedElements.endingPokes.textContent = `${state.pokesCount || 0}`;
    }
    if (this.cachedElements.endingHesitation) {
      this.cachedElements.endingHesitation.textContent = `${state.hesitationsCount || 0}`;
    }

    // Determine humorous reflex rating
    let reflexRank = "Standard Issue Bro";
    const runawayAttempts = state.challengeAttempts?.runaway || 0;
    if (runawayAttempts >= 6 || (state.hesitationsCount || 0) >= 3) {
      reflexRank = "Sloth Tier (Questionable)";
    } else if ((state.spamClicksCount || 0) >= 2 || (state.mashCount || 0) >= 15) {
      reflexRank = "Panic Masher (Unhinged)";
    } else if ((state.pokesCount || 0) >= 4) {
      reflexRank = "Glass Tapper Gremlin";
    }

    if (this.cachedElements.endingReflexes) {
      this.cachedElements.endingReflexes.textContent = reflexRank;
    }

    narrator.speak(ending.narratorKey, true);
  }

  copyRoastToClipboard() {
    const state = gameState.get();
    const ending = evaluateEnding(state);

    const roastText = 
`🎮 GAY-M OFF ARCHIVE REPORT 🎮
Result: ${ending.title}
Bro Meter: ${state.broMeter}%
Questions Answered: ${state.completedQuestions.length} / ${state.selectedQuestions.length}
Frustration Score: ${state.frustration} pts
Glass Taps (Pokes): ${state.pokesCount || 0}
Overthinking Incidents: ${state.hesitationsCount || 0}
Verdict: "${ending.quote}"

"Your choices are questionable. The game is worse."
Can your friendship survive the interrogation? 🔥🕹️`;

    const showSuccessToast = () => {
      gameAudio.playChallengeComplete();
      if (this.cachedElements.suspicionBanner) {
        this.cachedElements.suspicionBanner.textContent = "📋 ROAST COPIED TO CLIPBOARD! GO EMBARRASS YOURSELF.";
        this.cachedElements.suspicionBanner.classList.add('show');
        setTimeout(() => {
          if (this.cachedElements.suspicionBanner) {
            this.cachedElements.suspicionBanner.classList.remove('show');
          }
        }, 2500);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(roastText).then(showSuccessToast).catch(() => {
        this.fallbackCopy(roastText, showSuccessToast);
      });
    } else {
      this.fallbackCopy(roastText, showSuccessToast);
    }
  }

  fallbackCopy(text, callback) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (callback) callback();
    } catch (err) {
      console.warn("Fallback copy failed:", err);
    }
    document.body.removeChild(textArea);
  }
}

export const ui = new UIManager();
