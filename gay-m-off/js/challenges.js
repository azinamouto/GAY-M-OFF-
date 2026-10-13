/**
 * GAY-M OFF — Ragebait Challenge Engine
 * Manages 3 playable troll mini-games with strict boundary checks, cleanup routines,
 * and accessible keyboard/touch fallbacks.
 */

import { gameState } from './state.js';
import { narrator } from './narrator.js';
import { gameAudio } from './audio.js';

export class ChallengeManager {
  constructor(uiManager) {
    this.ui = uiManager;
    this.activeInterval = null;
    this.activeTimeout = null;
    this.cleanups = [];
    this.evasionCount = 0;
    this.progressBarHasReset = false;
    this.impossibleAttempts = 0;
  }

  cleanupCurrentChallenge() {
    if (this.activeInterval) {
      clearInterval(this.activeInterval);
      this.activeInterval = null;
    }
    if (this.activeTimeout) {
      clearTimeout(this.activeTimeout);
      this.activeTimeout = null;
    }
    while (this.cleanups.length > 0) {
      const fn = this.cleanups.pop();
      try {
        fn();
      } catch (e) {
        console.warn("Cleanup error:", e);
      }
    }
  }

  startChallenge(index) {
    this.cleanupCurrentChallenge();

    if (index === 0) {
      this.initRunawayButton();
    } else if (index === 1) {
      this.initFakeProgressBar();
    } else if (index === 2) {
      this.initImpossibleQuestion();
    } else {
      // Completed all challenges, advance to endings
      this.ui.advanceToEndings();
    }
  }

  // ==========================================
  // CHALLENGE A — THE RUNAWAY BUTTON
  // ==========================================
  initRunawayButton() {
    this.evasionCount = 0;
    const arena = document.getElementById('challenge-arena-content');
    if (!arena) return;

    arena.innerHTML = `
      <div class="runaway-arena" id="runaway-bounds">
        <div class="runaway-stats" id="runaway-stats" aria-live="polite">
          EVASIONS: <span id="evasion-num">0</span> / 3
        </div>
        <button type="button" class="runaway-target-btn" id="runaway-btn" tabIndex="0">
          CLICK ME IF YOU CAN.
        </button>
      </div>
    `;

    const bounds = document.getElementById('runaway-bounds');
    const btn = document.getElementById('runaway-btn');
    const statsEl = document.getElementById('evasion-num');

    narrator.speak("Challenge 1: The Runaway Button. Click it if your reflexes exist.");

    const moveButton = (e) => {
      if (this.evasionCount >= 3) return; // Finished dodging

      this.evasionCount++;
      gameState.incrementAttempt('runaway');
      if (statsEl) statsEl.textContent = this.evasionCount;

      gameAudio.playGlitch();

      if (this.evasionCount < 3) {
        narrator.speak('button_evasion', true);
        const containerRect = bounds.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        // Calculate safe random coordinates inside the bounding box
        const maxX = Math.max(10, containerRect.width - btnRect.width - 24);
        const maxY = Math.max(30, containerRect.height - btnRect.height - 24);

        const randomX = Math.floor(Math.random() * maxX) + 12;
        const randomY = Math.floor(Math.random() * (maxY - 35)) + 35; // Leave top space for stats

        btn.style.left = `${randomX}px`;
        btn.style.top = `${randomY}px`;
      } else {
        // Evasion limit reached: lock down and become clickable!
        btn.classList.add('tired');
        btn.textContent = "FINE. CLICK ME.";
        narrator.speak("The button ran out of stamina. Put it out of its misery.");
      }
    };

    // Trigger evasion on cursor approach, hover, or keyboard focus if not yet tired
    const onMouseEnter = (e) => {
      if (this.evasionCount < 3) {
        moveButton(e);
      }
    };

    // On touch devices or keyboard focus
    const onTouchStart = (e) => {
      if (this.evasionCount < 3) {
        e.preventDefault();
        moveButton(e);
      }
    };

    const onClick = (e) => {
      if (this.evasionCount < 3) {
        moveButton(e);
        return;
      }

      // Success click!
      gameAudio.playChallengeComplete();
      gameState.recordChallengeCompletion(0);
      gameState.updateBroMeter(5);
      btn.disabled = true;
      btn.textContent = "DEFEATED!";

      narrator.speak('button_caught', true);

      this.activeTimeout = setTimeout(() => {
        this.startChallenge(1);
      }, 1600);
    };

    btn.addEventListener('mouseenter', onMouseEnter);
    btn.addEventListener('touchstart', onTouchStart, { passive: false });
    btn.addEventListener('click', onClick);

    this.cleanups.push(() => {
      btn.removeEventListener('mouseenter', onMouseEnter);
      btn.removeEventListener('touchstart', onTouchStart);
      btn.removeEventListener('click', onClick);
    });
  }

  // ==========================================
  // CHALLENGE B — THE FAKE PROGRESS BAR
  // ==========================================
  initFakeProgressBar() {
    this.progressBarHasReset = false;
    const arena = document.getElementById('challenge-arena-content');
    if (!arena) return;

    arena.innerHTML = `
      <div class="fake-progress-container">
        <div class="fake-progress-title">SYNCHRONIZING BRO FREQUENCY...</div>
        <div class="fake-bar-frame" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" id="fake-bar-aria">
          <div class="fake-bar-fill" id="fake-bar-fill"></div>
        </div>
        <div class="fake-bar-percent" id="fake-bar-percent">0%</div>
        <div class="fake-troll-alert" id="fake-troll-alert">
          BRO, WHY ARE YOU TRYING SO HARD?
        </div>
      </div>
    `;

    const fill = document.getElementById('fake-bar-fill');
    const percentEl = document.getElementById('fake-bar-percent');
    const alertEl = document.getElementById('fake-troll-alert');
    const ariaEl = document.getElementById('fake-bar-aria');

    narrator.speak("Challenge 2: Just wait for the progress bar. What could go wrong?");

    let currentProgress = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tickTime = prefersReducedMotion ? 40 : 55;

    this.activeInterval = setInterval(() => {
      if (!this.progressBarHasReset) {
        // First ramp up towards 99%
        currentProgress += (currentProgress < 75 ? 2.5 : 1);
        if (currentProgress >= 99) {
          currentProgress = 99;
          this.progressBarHasReset = true;
          gameState.incrementAttempt('progressbar');

          // Troll Drop Event!
          gameAudio.playWrongAnswer();
          document.body.classList.add('shake-active');
          if (alertEl) alertEl.classList.add('visible');

          narrator.speak('progress_reset', true);

          // Reset drop to 12%
          setTimeout(() => {
            document.body.classList.remove('shake-active');
            currentProgress = 12;
            gameState.addFrustration(3);
            gameState.updateBroMeter(-10);
            if (fill) fill.style.width = '12%';
            if (percentEl) percentEl.textContent = '12%';
            if (ariaEl) ariaEl.setAttribute('aria-valuenow', '12');
          }, 700);
        }
      } else {
        // Resuming from 12% to 100%
        currentProgress += 3;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(this.activeInterval);
          this.activeInterval = null;

          if (fill) fill.style.width = '100%';
          if (percentEl) percentEl.textContent = '100%';
          if (ariaEl) ariaEl.setAttribute('aria-valuenow', '100');

          gameAudio.playChallengeComplete();
          gameState.recordChallengeCompletion(1);
          narrator.speak('progress_complete', true);

          this.activeTimeout = setTimeout(() => {
            this.startChallenge(2);
          }, 1500);
        }
      }

      if (fill && currentProgress <= 100) {
        fill.style.width = `${Math.floor(currentProgress)}%`;
      }
      if (percentEl && currentProgress <= 100) {
        percentEl.textContent = `${Math.floor(currentProgress)}%`;
      }
      if (ariaEl && currentProgress <= 100) {
        ariaEl.setAttribute('aria-valuenow', Math.floor(currentProgress));
      }
    }, tickTime);

    this.cleanups.push(() => {
      document.body.classList.remove('shake-active');
      if (this.activeInterval) {
        clearInterval(this.activeInterval);
        this.activeInterval = null;
      }
    });
  }

  // ==========================================
  // CHALLENGE C — THE IMPOSSIBLE QUESTION
  // ==========================================
  initImpossibleQuestion() {
    this.impossibleAttempts = 0;
    const arena = document.getElementById('challenge-arena-content');
    if (!arena) return;

    arena.innerHTML = `
      <div class="impossible-question-container">
        <div class="impossible-question-prompt">
          CALCULATE THE EXACT TRAJECTORY OF BRO-HOOD UNDER QUANTUM THERMAL PRESSURE:
        </div>
        <div class="impossible-choices-grid" id="impossible-options">
          <button class="btn-impossible-opt" data-opt="1">A. Sub-atomic fistbump (420 Hz)</button>
          <button class="btn-impossible-opt" data-opt="2">B. Gravitational gym-bro entanglement</button>
          <button class="btn-impossible-opt" data-opt="3">C. Thermodynamic protein shake collapse</button>
          <button class="btn-impossible-opt" data-opt="4">D. Schrödinger's locker room towel</button>
        </div>
        <div class="impossible-surrender-zone" id="impossible-surrender-zone">
          <!-- Escape option reveals here after attempts -->
        </div>
      </div>
    `;

    const optionsContainer = document.getElementById('impossible-options');
    const surrenderZone = document.getElementById('impossible-surrender-zone');

    narrator.speak("Challenge 3: Final challenge. Answer correctly or remain trapped in the cabinet.");

    const onOptionClick = (e) => {
      const targetBtn = e.target.closest('.btn-impossible-opt');
      if (!targetBtn) return;

      this.impossibleAttempts++;
      gameState.incrementAttempt('impossible');
      gameState.addFrustration(2);
      gameState.updateBroMeter(4);

      gameAudio.playWrongAnswer();
      document.body.classList.add('shake-active');
      setTimeout(() => document.body.classList.remove('shake-active'), 250);

      narrator.speak('impossible_fail', true);

      // After 2 attempts, reveal the bailout escape button!
      if (this.impossibleAttempts >= 2 && surrenderZone && !document.getElementById('pass-btn')) {
        surrenderZone.innerHTML = `
          <button type="button" class="btn-pass-surrender" id="pass-btn">
            ★ FINE. JUST LET ME PASS. ★
          </button>
        `;

        const passBtn = document.getElementById('pass-btn');
        if (passBtn) {
          const onPassClick = () => {
            gameAudio.playChallengeComplete();
            gameState.recordChallengeCompletion(2);
            narrator.speak('impossible_pass', true);

            passBtn.disabled = true;
            passBtn.textContent = "PASS GRANTED!";

            this.activeTimeout = setTimeout(() => {
              this.startChallenge(3); // Proceeds to endings
            }, 1400);
          };

          passBtn.addEventListener('click', onPassClick);
          this.cleanups.push(() => passBtn.removeEventListener('click', onPassClick));
        }
      }
    };

    optionsContainer.addEventListener('click', onOptionClick);
    this.cleanups.push(() => optionsContainer.removeEventListener('click', onOptionClick));
  }
}
