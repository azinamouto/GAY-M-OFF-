/**
 * GAY-M OFF — Ragebait Challenge Engine (Upgraded)
 * Manages 3 playable troll mini-games with strict boundary checks, cleanup routines,
 * decoy clones, panic mash QTE, and accessible keyboard/touch fallbacks.
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
  // CHALLENGE A — THE RUNAWAY BUTTON (UPGRADED)
  // ==========================================
  initRunawayButton() {
    this.evasionCount = 0;
    const arena = document.getElementById('challenge-arena-content');
    if (!arena) return;

    arena.innerHTML = `
      <div class="runaway-arena" id="runaway-bounds">
        <div class="runaway-stats" id="runaway-stats" aria-live="polite">
          EVASIONS: <span id="evasion-num">0</span> / 4
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

    const TAUNTS = [
      "CLICK ME IF YOU CAN.",
      "TOO SLOW! 🥱",
      "MY GRANDMA CLICKS FASTER!",
      "NICE TRY, BUT NO 💨",
      "WHERE ARE YOU LOOKING? 👀"
    ];

    const removeDecoys = () => {
      bounds.querySelectorAll('.decoy-target-btn').forEach(d => d.remove());
    };

    const spawnDecoys = () => {
      removeDecoys();
      const containerRect = bounds.getBoundingClientRect();
      const decoyLabels = ["OVER HERE!", "CLICK ME BRO!"];

      decoyLabels.forEach((lbl, idx) => {
        const decoy = document.createElement('button');
        decoy.type = 'button';
        decoy.className = 'decoy-target-btn';
        decoy.textContent = lbl;

        const maxX = Math.max(10, containerRect.width - 140);
        const maxY = Math.max(30, containerRect.height - 60);
        const rx = Math.floor(Math.random() * maxX) + 10;
        const ry = Math.floor(Math.random() * (maxY - 40)) + 38;

        decoy.style.left = `${rx}px`;
        decoy.style.top = `${ry}px`;

        decoy.addEventListener('click', (e) => {
          e.stopPropagation();
          gameAudio.playBuzzer();
          document.body.classList.add('shake-active');
          setTimeout(() => document.body.classList.remove('shake-active'), 250);

          gameState.updateBroMeter(-3);
          gameState.addFrustration(1);
          gameState.state.fakeCloneClicks = (gameState.state.fakeCloneClicks || 0) + 1;
          narrator.speak('fake_clone', true);

          decoy.textContent = "WRONG! ❌";
          decoy.style.backgroundColor = "var(--color-chaos-pink)";
          setTimeout(() => decoy.remove(), 400);
        });

        bounds.appendChild(decoy);
      });
    };

    const moveButton = () => {
      if (this.evasionCount >= 4) return; // Finished dodging

      this.evasionCount++;
      gameState.incrementAttempt('runaway');
      if (statsEl) statsEl.textContent = this.evasionCount;

      gameAudio.playGlitch();

      if (this.evasionCount < 4) {
        narrator.speak('button_evasion', true);
        const containerRect = bounds.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        const maxX = Math.max(10, containerRect.width - btnRect.width - 24);
        const maxY = Math.max(30, containerRect.height - btnRect.height - 24);

        const randomX = Math.floor(Math.random() * maxX) + 12;
        const randomY = Math.floor(Math.random() * (maxY - 35)) + 35;

        btn.style.left = `${randomX}px`;
        btn.style.top = `${randomY}px`;
        btn.textContent = TAUNTS[this.evasionCount] || "NOPE!";

        // Shrink button slightly with each dodge
        const scaleVal = Math.max(0.78, 1 - (this.evasionCount * 0.07));
        btn.style.transform = `scale(${scaleVal})`;

        // On dodge 2 and 3: spawn decoy clone buttons!
        if (this.evasionCount >= 2) {
          spawnDecoys();
        }
      } else {
        // Evasion limit reached: lock down, remove decoys, become clickable!
        removeDecoys();
        btn.classList.add('tired');
        btn.style.transform = 'scale(1)';
        btn.textContent = "FINE. CLICK ME. (TIRED)";
        narrator.speak("The button ran out of stamina. Put it out of its misery.");
      }
    };

    const onMouseEnter = () => {
      if (this.evasionCount < 4) moveButton();
    };

    const onTouchStart = (e) => {
      if (this.evasionCount < 4) {
        e.preventDefault();
        moveButton();
      }
    };

    const onClick = () => {
      if (this.evasionCount < 4) {
        moveButton();
        return;
      }

      // Success click!
      removeDecoys();
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
      removeDecoys();
      btn.removeEventListener('mouseenter', onMouseEnter);
      btn.removeEventListener('touchstart', onTouchStart);
      btn.removeEventListener('click', onClick);
    });
  }

  // ==========================================
  // CHALLENGE B — FAKE PROGRESS BAR + MASH QTE
  // ==========================================
  initFakeProgressBar() {
    this.progressBarHasReset = false;
    const arena = document.getElementById('challenge-arena-content');
    if (!arena) return;

    arena.innerHTML = `
      <div class="fake-progress-container">
        <div class="fake-progress-title" id="fake-progress-title">SYNCHRONIZING BRO FREQUENCY...</div>
        <div class="fake-bar-frame" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" id="fake-bar-aria">
          <div class="fake-bar-fill" id="fake-bar-fill"></div>
        </div>
        <div class="fake-bar-percent" id="fake-bar-percent">0%</div>
        <div class="fake-troll-alert" id="fake-troll-alert">
          <!-- Mash QTE injected dynamically after reset -->
        </div>
      </div>
    `;

    const fill = document.getElementById('fake-bar-fill');
    const percentEl = document.getElementById('fake-bar-percent');
    const alertEl = document.getElementById('fake-troll-alert');
    const ariaEl = document.getElementById('fake-bar-aria');
    const titleEl = document.getElementById('fake-progress-title');

    narrator.speak("Challenge 2: Just wait for the progress bar. What could go wrong?");

    let currentProgress = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tickTime = prefersReducedMotion ? 35 : 45;

    let mashCount = 0;
    const targetMashes = 12;

    const startMashQTE = () => {
      if (this.activeInterval) {
        clearInterval(this.activeInterval);
        this.activeInterval = null;
      }

      currentProgress = 12;
      if (fill) fill.style.width = '12%';
      if (percentEl) percentEl.textContent = '12%';
      if (ariaEl) ariaEl.setAttribute('aria-valuenow', '12');

      if (titleEl) {
        titleEl.textContent = "CRITICAL FAILURE: FREQUENCY DESTABILIZED!";
        titleEl.style.color = "var(--color-warning-yellow)";
      }

      if (alertEl) {
        alertEl.classList.add('visible');
        alertEl.innerHTML = `
          <div class="qte-panic-box" id="qte-panic-box">
            <div class="qte-panic-title blink-text">🚨 EMERGENCY PROTOCOL: BRO SYSTEM OFFLINE 🚨</div>
            <div class="qte-panic-sub">MASH [SPACE] OR CLICK RAPIDLY TO RECHARGE!</div>
            <button type="button" class="btn-arcade warning btn-mash-action" id="btn-mash-charge" tabIndex="0">
              💥 MASH TO RESTORE 💥 (<span id="mash-num">0</span> / ${targetMashes})
            </button>
          </div>
        `;
      }

      narrator.speak('mash_prompt', true);

      const mashBtn = document.getElementById('btn-mash-charge');
      const mashNumEl = document.getElementById('mash-num');

      let qteDone = false;

      const handleMash = () => {
        if (qteDone) return;
        mashCount++;
        gameState.state.mashCount = (gameState.state.mashCount || 0) + 1;
        gameAudio.playMashTone(mashCount);

        if (mashNumEl) mashNumEl.textContent = mashCount;

        // Animate mash button
        if (mashBtn) {
          mashBtn.style.transform = 'scale(1.08)';
          setTimeout(() => {
            if (mashBtn) mashBtn.style.transform = 'scale(1)';
          }, 80);
        }

        // Increment progress from 12% to over 100%
        const added = (mashCount / targetMashes) * 92;
        currentProgress = Math.min(104, 12 + added);

        if (fill) {
          fill.style.width = `${Math.min(100, Math.floor(currentProgress))}%`;
        }
        if (percentEl) {
          percentEl.textContent = `${Math.floor(currentProgress)}%`;
        }

        if (mashCount >= targetMashes) {
          qteDone = true;
          currentProgress = 104;

          if (percentEl) {
            percentEl.textContent = "104% (OVERCHARGED!)";
            percentEl.style.color = "var(--color-warning-yellow)";
          }
          if (fill) {
            fill.classList.add('overcharged');
          }

          if (mashBtn) {
            mashBtn.disabled = true;
            mashBtn.textContent = "⚡ SYSTEM OVERCHARGED! ⚡";
            mashBtn.classList.add('primary');
            mashBtn.classList.remove('warning');
          }

          // Trigger overcharge feedback
          gameAudio.playOvercharge();
          document.body.classList.add('shake-active');
          const cabinet = document.querySelector('.arcade-cabinet');
          if (cabinet) cabinet.classList.add('glitch-flash');

          setTimeout(() => {
            document.body.classList.remove('shake-active');
            if (cabinet) cabinet.classList.remove('glitch-flash');
          }, 500);

          gameState.recordChallengeCompletion(1);
          narrator.speak('overcharge', true);

          this.activeTimeout = setTimeout(() => {
            this.startChallenge(2);
          }, 1800);
        }
      };

      const onKeyDown = (e) => {
        if (e.code === 'Space' || e.key === ' ') {
          e.preventDefault();
          handleMash();
        }
      };

      if (mashBtn) {
        mashBtn.addEventListener('click', handleMash);
      }
      window.addEventListener('keydown', onKeyDown);

      this.cleanups.push(() => {
        if (mashBtn) mashBtn.removeEventListener('click', handleMash);
        window.removeEventListener('keydown', onKeyDown);
      });
    };

    // Initial ramp up towards 99%
    this.activeInterval = setInterval(() => {
      if (!this.progressBarHasReset) {
        currentProgress += (currentProgress < 75 ? 3.2 : 1.2);
        if (currentProgress >= 99) {
          currentProgress = 99;
          this.progressBarHasReset = true;
          gameState.incrementAttempt('progressbar');

          // Troll Drop Event!
          gameAudio.playBuzzer();
          gameAudio.playWrongAnswer();
          document.body.classList.add('shake-active');

          narrator.speak('progress_reset', true);

          setTimeout(() => {
            document.body.classList.remove('shake-active');
            gameState.addFrustration(3);
            gameState.updateBroMeter(-10);
            startMashQTE();
          }, 700);
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
  // CHALLENGE C — THE IMPOSSIBLE QUESTION (UPGRADED)
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

    // Subtle bait teasing on option hover
    const buttons = optionsContainer.querySelectorAll('.btn-impossible-opt');
    buttons.forEach((b) => {
      let hovered = false;
      const originalText = b.textContent;
      b.addEventListener('mouseenter', () => {
        if (!hovered && this.impossibleAttempts > 0) {
          hovered = true;
          b.style.transform = 'translate(2px, -2px)';
          setTimeout(() => {
            b.style.transform = 'none';
          }, 200);
        }
      });
    });

    const onOptionClick = (e) => {
      const targetBtn = e.target.closest('.btn-impossible-opt');
      if (!targetBtn) return;

      this.impossibleAttempts++;
      gameState.incrementAttempt('impossible');
      gameState.addFrustration(2);
      gameState.updateBroMeter(4);

      gameAudio.playBuzzer();
      document.body.classList.add('shake-active');
      setTimeout(() => document.body.classList.remove('shake-active'), 250);

      narrator.speak('impossible_fail', true);

      targetBtn.classList.add('rejected');
      setTimeout(() => targetBtn.classList.remove('rejected'), 400);

      // After 2 attempts, reveal the bailout escape button!
      if (this.impossibleAttempts >= 2 && surrenderZone && !document.getElementById('pass-btn')) {
        surrenderZone.innerHTML = `
          <button type="button" class="btn-pass-surrender pulse-warning" id="pass-btn">
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
