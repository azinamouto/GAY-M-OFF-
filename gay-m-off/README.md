# GAY-M OFF 🕹️

> *"Your choices are questionable. The game is worse."*

A browser-based comedy psychological troll quiz and ragebait arcade game built with vanilla HTML5, CSS3, and ES6+ JavaScript. Designed for the GitHub Game Off.

---

## 🎮 Game Overview

**GAY-M OFF** combines two comedic game mechanics:
1. **Psychological Troll Quiz:** 10 satirical, deadpan questions that challenge the arbitrary rules of "the bro code" with sarcastic commentary, screen shakes, suspicion alerts, and unpredictable consequences.
2. **Ragebait Challenges:** 3 intentionally aggravating but fair challenges:
   - **Challenge A — The Runaway Button:** A button that evades cursor approach up to 3 times within bounded coordinates before getting exhausted and clickable.
   - **Challenge B — The Fake Progress Bar:** A synchronization bar that loads to 99%, hits the player with an existential troll alert, drops to 12%, and resumes cleanly to 100%.
   - **Challenge C — The Impossible Question:** An unhinged quantum bro-physics question that initially rejects answers before revealing the comedic bailout escape hatch: *"FINE. JUST LET ME PASS."*

---

## 🛠️ Architecture

Built completely with native web technologies — no frameworks, no external runtime dependencies:

```text
gay-m-off/
├── index.html          # Clean semantic markup with retro arcade cabinet layout
├── css/
│   ├── style.css       # Core arcade design system & tokens (Void Black, Chaos Pink, Arcade Purple, Warning Yellow, Pixel White)
│   ├── animations.css  # Scanlines, typewriter, screen shake, chromatic glitch & prefers-reduced-motion
│   └── responsive.css  # Mobile adaptations down to 320px with accessible touch targets
├── js/
│   ├── main.js         # GameController orchestration & global event delegation
│   ├── state.js        # Single source of truth & finite state machine
│   ├── questions.js    # 10 satirical questions with state deltas & reaction pools
│   ├── challenges.js   # 3 ragebait challenges with boundary checking & lifecycle cleanups
│   ├── narrator.js     # Context-aware dialogue system with anti-repetition & typewriter effect
│   ├── endings.js      # Deterministic ending calculation (Certified Bro, Chaos Detected, The Game Lost)
│   ├── audio.js        # Synthesized Web Audio API retro 8-bit sound effects
│   └── ui.js           # DOM manipulation, HUD rendering, Bro Meter, and screen switching
└── README.md
```

---

## 🚀 How to Run

### Option 1: Any Static Web Server
Because the game uses standard ES6 modules, serve it through any static server:
```bash
# Python 3
python3 -m http.server 8000

# Node / npx
npx serve .
```
Then navigate to `http://localhost:8000`.

### Option 2: Vite Dev Server (AI Studio environment)
```bash
npm run dev
```

### Option 3: GitHub Pages
Commit and push to a GitHub repository, then enable GitHub Pages in repository settings pointing to root `/` or `/docs`. Zero build step required!

---

## 🕹️ Controls & Accessibility

- **Mouse / Touch:** Click buttons, answer questions, chase the runaway button.
- **Keyboard:** Full Tab / Enter navigation through all interactive elements. Space or Enter to skip the boot screen. Esc to return from the How to Play screen.
- **Audio:** Web Audio API sound effects are **OFF by default**; toggle anytime with the `SOUND` button in the top HUD.
- **Reduced Motion:** Fully complies with `prefers-reduced-motion` to disable screen shaking and instant-render typewriter text.
