/**
 * GAY-M OFF — Main Application Entry Point
 * Orchestrates systems, sets up delegation, handles boot sequence and restart loops.
 */

import { gameState, GAME_PHASES } from './state.js';
import { ui } from './ui.js';
import { narrator } from './narrator.js';
import { gameAudio } from './audio.js';
import { ChallengeManager } from './challenges.js';

class GameController {
  constructor() {
    this.challengeManager = null;
    this.bootTimeout = null;
  }

  init() {
    this.challengeManager = new ChallengeManager(ui);
    ui.setChallengeManager(this.challengeManager);

    ui.initDOM();
    this.setupGlobalEventListeners();
    this.startBootSequence();
  }

  startBootSequence() {
    gameState.setPhase(GAME_PHASES.BOOT);
    narrator.speak("boot", true);

    // Boot auto-advances to MENU after ~2 seconds
    this.bootTimeout = setTimeout(() => {
      this.skipBoot();
    }, 2200);
  }

  skipBoot() {
    if (this.bootTimeout) {
      clearTimeout(this.bootTimeout);
      this.bootTimeout = null;
    }
    if (gameState.get().phase === GAME_PHASES.BOOT) {
      gameState.setPhase(GAME_PHASES.MENU);
    }
  }

  startGame() {
    gameAudio.playClick();
    gameState.startQuestionSession();
    gameState.get().currentQuestion = 0;
    gameState.get().currentChallenge = 0;
    gameState.setPhase(GAME_PHASES.QUIZ);
    narrator.speak("quiz_start", true);
  }

  restartGame() {
    gameAudio.playClick();
    if (this.challengeManager) {
      this.challengeManager.cleanupCurrentChallenge();
    }
    gameState.reset();
    narrator.speak("restart", true);
  }

  setupGlobalEventListeners() {
    // Single event listener delegator on document for stable restarts and zero leaks
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, a, .clickable');
      if (!target) return;

      const action = target.getAttribute('data-action');
      if (!action) return;

      switch (action) {
        case 'skip-boot':
          this.skipBoot();
          break;

        case 'start-game':
          this.startGame();
          break;

        case 'how-to-play':
          gameAudio.playClick();
          gameState.setPhase(GAME_PHASES.HOW_TO_PLAY);
          break;

        case 'back-to-menu':
          gameAudio.playClick();
          gameState.setPhase(GAME_PHASES.MENU);
          break;

        case 'toggle-sound':
          const enabled = gameState.toggleSound();
          gameAudio.setEnabled(enabled);
          if (enabled) {
            gameAudio.playClick();
          }
          break;

        case 'play-again':
          this.restartGame();
          this.startGame();
          break;

        case 'menu-from-ending':
          this.restartGame();
          gameState.setPhase(GAME_PHASES.MENU);
          break;

        default:
          break;
      }
    });

    // Keyboard shortcuts (Space/Enter to skip boot, Esc to return to menu if on how-to-play)
    document.addEventListener('keydown', (e) => {
      if (gameState.get().phase === GAME_PHASES.BOOT && (e.code === 'Space' || e.code === 'Enter')) {
        e.preventDefault();
        this.skipBoot();
      } else if (gameState.get().phase === GAME_PHASES.HOW_TO_PLAY && e.code === 'Escape') {
        gameState.setPhase(GAME_PHASES.MENU);
      }
    });
  }
}

// Instantiate on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  const game = new GameController();
  game.init();
});
