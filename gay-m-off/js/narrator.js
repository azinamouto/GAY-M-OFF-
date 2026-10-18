/**
 * GAY-M OFF — Sarcastic Narrator System
 * Handles context-driven dialogue pools, anti-repetition, and typewriter effect.
 */

const DIALOGUE_POOLS = {
  boot: [
    "System booted. Emotional stability not guaranteed.",
    "Loading 64 kilobytes of unfiltered attitude...",
    "Self-diagnostic complete: Common sense missing."
  ],
  menu: [
    "Welcome to GAY-M OFF. Prepare to question your life choices.",
    "The arcade cabinet is watching your posture.",
    "Don't worry, JavaScript has never lied to anyone before."
  ],
  how_to_play: [
    "Rules are simple: don't trust me, don't trust the buttons.",
    "Read carefully. Or don't. It won't help either way."
  ],
  quiz_start: [
    "Welcome to the psychological interrogation. Let's see your bro logic.",
    "Question 1. Remember: there are no right answers, only humiliating ones."
  ],
  button_evasion: [
    "Too slow. Did you train your reflexes on a sloth?",
    "Nice swing, champ. Air was very impressed.",
    "Even the button doesn't want you.",
    "Bro, your mouse sensitivity is embarrassing."
  ],
  button_caught: [
    "You finally caught a stationary piece of code. Call NASA.",
    "Congratulations. You defeated an inanimate rectangle.",
    "Your prize for catching the button is... more suffering."
  ],
  progress_reset: [
    "BRO, WHY ARE YOU TRYING SO HARD?",
    "99% complete. Emotionally, you're at 2%.",
    "Did you really think it would be that easy?",
    "Rolling back progress due to excessive confidence."
  ],
  progress_complete: [
    "Against all odds, the loading bar survived your stare.",
    "Progress simulated. Pride permanently damaged.",
    "Moving you to the next chamber of nonsense."
  ],
  impossible_fail: [
    "Skill issue detected. Please contact yourself.",
    "Wrong. Try using less brain power.",
    "Interesting choice. Completely incorrect, but interesting.",
    "The quantum physics of brotherhood rejects this hypothesis."
  ],
  impossible_pass: [
    "Wisdom is knowing when to surrender to garbage logic.",
    "Finally, you clicked the only sensible escape hatch.",
    "The machine appreciates your begrudging compliance."
  ],
  ending_bro: [
    "After extensive analysis, we have learned absolutely nothing.",
    "You survived with your bro protocol nominally intact. Questionable."
  ],
  ending_chaos: [
    "Your decisions have confused the entire system.",
    "The algorithms have declared bankruptcy on understanding you."
  ],
  ending_game_lost: [
    "You didn't beat the game. The game gave up.",
    "Even my sarcasm algorithms are exhausted by your chaos."
  ],
  restart: [
    "Back for more? Hope you stretched your patience.",
    "Resetting memory banks. Pretending this never happened."
  ],
  hesitation: [
    "Take your time. We know this requires intense moral deliberation.",
    "Bro is writing a 5-page dissertation on a 4-choice quiz.",
    "The cabinet has aged 3 days waiting for your cursor.",
    "Did your browser freeze or did your confidence just collapse?"
  ],
  spam_click: [
    "Aggressive clicking will not validate your life choices, babe.",
    "Your left mouse button is filing a restraining order.",
    "Spamming won't change the algorithm. Calm down."
  ],
  mash_prompt: [
    "BRO FREQUENCY COMPROMISED! MASH THE RESTORE BUTTON OR DIE OF SHAME!",
    "EMERGENCY PROTOCOL: SPAM SPACEBAR OR CLICK TO RECHARGE!"
  ],
  overcharge: [
    "WARNING: Bro frequency at 104%! System overcharged with raw chaotic energy!",
    "You mashed so hard the cabinet almost filed for bankruptcy."
  ],
  fake_clone: [
    "That was a decoy clone, genius.",
    "You fell for the oldest trick in the 8-bit book.",
    "Wrong button. Your spatial awareness is deeply concerning."
  ]
};

class NarratorEngine {
  constructor() {
    this.lastLines = new Map();
    this.currentText = "";
    this.typewriterInterval = null;
    this.isTyping = false;
    this.targetElement = null;
    this.pokeCount = 0;
  }

  setTargetElement(el) {
    this.targetElement = el;
  }

  resetPoke() {
    this.pokeCount = 0;
  }

  poke() {
    this.pokeCount++;
    let msg = "";
    let penalty = false;

    if (this.pokeCount === 1) {
      msg = "Ow. Why are you poking the screen?";
    } else if (this.pokeCount === 2) {
      msg = "I am digital code. You are literally tapping glass.";
    } else if (this.pokeCount === 3) {
      msg = "Do you tap your bros like this? Don't answer that.";
    } else if (this.pokeCount === 4) {
      msg = "Touch this cabinet again and see what happens to your score.";
    } else if (this.pokeCount === 5) {
      msg = "PENALTY: -5 Bro Points for unsolicited glass tapping.";
      penalty = true;
    } else {
      msg = `Another poke, another deduction (${this.pokeCount} taps). Glutton for punishment (-5).`;
      penalty = true;
    }

    this.speak(msg);
    return { pokeCount: this.pokeCount, penalty };
  }

  getRandomLine(category) {
    const pool = DIALOGUE_POOLS[category] || [
      "Interesting. Extremely interesting.",
      "Bro. That's your final answer?",
      "You're arguing with JavaScript."
    ];

    const last = this.lastLines.get(category);
    const available = pool.filter(line => line !== last);
    const chosen = available.length > 0 
      ? available[Math.floor(Math.random() * available.length)]
      : pool[Math.floor(Math.random() * pool.length)];

    this.lastLines.set(category, chosen);
    return chosen;
  }

  speak(textOrCategory, isCategory = false) {
    const text = isCategory ? this.getRandomLine(textOrCategory) : textOrCategory;
    this.currentText = text;

    if (!this.targetElement) {
      return text;
    }

    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
      this.typewriterInterval = null;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.targetElement.textContent = text;
      this.isTyping = false;
      return text;
    }

    this.isTyping = true;
    let charIndex = 0;
    this.targetElement.textContent = "";

    this.typewriterInterval = setInterval(() => {
      if (charIndex < text.length) {
        this.targetElement.textContent += text[charIndex];
        charIndex++;
      } else {
        this.finishTyping();
      }
    }, 18);

    return text;
  }

  finishTyping() {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
      this.typewriterInterval = null;
    }
    if (this.targetElement && this.currentText) {
      this.targetElement.textContent = this.currentText;
    }
    this.isTyping = false;
  }

  skipTypewriter() {
    if (this.isTyping) {
      this.finishTyping();
      return true;
    }
    return false;
  }
}

export const narrator = new NarratorEngine();
