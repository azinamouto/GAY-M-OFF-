# GAY-M OFF

<div align="center">

### pretty in pink. questionable by design.

**A psychological troll game for people who think they're difficult to annoy.**

*Spoiler: you're probably not.*

![JavaScript](https://img.shields.io/badge/JavaScript-11101B?style=flat-square&logo=javascript&logoColor=FF4F9C)
![HTML5](https://img.shields.io/badge/HTML5-11101B?style=flat-square&logo=html5&logoColor=FF4F9C)
![CSS3](https://img.shields.io/badge/CSS3-11101B?style=flat-square&logo=css&logoColor=FF4F9C)
![Game Off](https://img.shields.io/badge/GAME_OFF-2026-FF4F9C?style=flat-square&labelColor=11101B)
![Status](https://img.shields.io/badge/STATUS-IN_DEVELOPMENT-A78BFA?style=flat-square&labelColor=11101B)

[**Repository**](https://github.com/azinamouto/GAY-M-OFF-) · [**Report an Issue**](https://github.com/azinamouto/GAY-M-OFF-/issues)

</div>

---

## What the hell is GAY-M OFF?

It's a browser game.

You answer questions. The game judges you. You question why you're still playing.

That's pretty much it.

**GAY-M OFF** is a deliberately annoying, pink-themed arcade quiz built to test your patience, your decision-making, and your ability to tolerate a narrator who thinks they're funnier than you.

There's no deep psychological analysis here. No meaningful personality assessment. No revolutionary artificial intelligence.

It's literally JavaScript making fun of you.

And somehow, you're still reading.

The game is being developed as an experimental entry for **GitHub Game Off 2026**.

---

## Gameplay

You get ten questions per run, drawn from a larger question pool.

Some are ridiculous. Some make absolutely no sense. A few might genuinely make you reconsider your friendships.

Your answers influence the game's reactions and its completely unqualified final verdict.

And just when you think you're making progress, the game throws something stupid at you.

Question history is stored in your browser to vary future runs. Your answers stay in the current game session; the game has no account or game server.

### Meet the problems

| Challenge | Description |
|:--|:--|
| **The Interrogation** | Ten questions. Multiple choices. Not a single respectable outcome. |
| **Catch Me If You Can** | A button that runs away from your cursor. Even a button doesn't want you. |
| **Almost There** | A progress bar reaches 99%, then resets. Your trust issues are now justified. |
| **Wrong Again** | Every answer is wrong. Including the one you're absolutely sure about. |
| **The Final Verdict** | The game evaluates your performance using a system of entirely made-up nonsense. |

Don't worry. Every challenge is designed to be beatable.

We're annoying, not incompetent.

---

## Screenshots

The interface leans into dark arcade cabinets, pink accents, pixel-inspired details, and deliberately dramatic interactions. The main menu previews the run: ten shuffled questions, three rage challenges, and three possible endings.

---

## Run it locally

If you're the kind of person who clones random repositories from strangers, congratulations. You're exactly our target audience.

### Requirements

- Node.js 20.19+ or 22.12+
- npm
- A modern web browser
- Python 3 (optional, for the static-server option)
- A reasonable amount of patience

### Installation

```bash
git clone https://github.com/azinamouto/GAY-M-OFF-.git
cd GAY-M-OFF-
npm install
npm run dev
```

Open the local address displayed by the development server.

You can also serve the static files using Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

The game uses JavaScript modules, so opening `index.html` directly may not work properly.

If something breaks, open an issue.

If you're about to report that the game is annoying, please reconsider. That's the feature.

### Check a change

Run the TypeScript check and create a production build with:

```bash
npm run lint
npm run build
```

To preview the production build locally, run `npm run preview` after the build.

---

## Built with

No complicated framework. No backend. No database storing your embarrassing answers.

Just the essentials.

| Technology | Purpose |
|:--|:--|
| **HTML5** | Structure and game interface |
| **CSS3** | Responsive layout, visual effects, and animations |
| **JavaScript ES6+** | Game logic, randomized questions, and state management |
| **Web Audio API** | Optional sound effects and audio interactions |

The project is organized into separate modules for questions, challenges, state, audio, narration, and UI behavior.

Display fonts load from Google Fonts when available and fall back to system fonts if offline.

Because messy code is only funny when it belongs to somebody else.

---

## Features and design goals

**Randomized gameplay**

Each run draws ten questions from a larger pool, with question-history tracking intended to keep repeated sessions varied.

**Interactive rage challenges**

Three deliberately frustrating encounters that test patience without requiring the player to perform impossible actions forever.

**A narrator with an attitude**

Contextual commentary, sarcastic reactions, and occasional unnecessary judgment.

**Multiple endings**

Three possible conclusions, none of which should be taken as a serious assessment of your personality.

**Accessible interactions**

Keyboard navigation, touch-friendly controls, optional audio, and reduced-motion support are part of the intended experience.

**Lightweight architecture**

A small browser game that doesn't require an entire technology company to run.

## Controls and accessibility

- Use Tab to move between controls and Enter or Space to activate them.
- Space also skips the boot screen and mashes during the loading challenge.
- Press Escape on the instructions screen to return to the menu.
- Sound effects start off and can be toggled from the HUD.
- Animations honor your device's reduced-motion preference.

---

## Development status

This is an experimental project under active development. The core game loop is playable; deployment and final game-jam submission are still ahead.

| Milestone | Status |
|:--|:--|
| Game concept and identity | Complete |
| Initial JavaScript architecture | Complete |
| Full quiz experience | Implemented |
| Three playable challenges | Implemented |
| Audio and animation effects | Implemented |
| Responsive layout and accessibility features | Implemented; ongoing testing |
| Public playable deployment | Not yet published |
| Game jam submission | Pending |

The roadmap will be updated as features are implemented and verified.

I'm trying to finish a game here, not maintain a museum of unfinished side projects.

---

## Contributing

Found a genuine bug? Open an issue.

Have a suggestion? Start a discussion in an issue.

Want to improve something? Fork the repository and submit a pull request.

Useful contributions include bug fixes, accessibility improvements, performance optimizations, and gameplay refinements.

Please keep changes focused and explain what they do.

And no, making the button even harder to click is not automatically an improvement.

---

## Disclaimer

This game is satire.

It doesn't determine anyone's sexuality, gender identity, intelligence, or personal worth. The questions are fictional, the results are deliberately meaningless, and the narrator has absolutely no qualifications.

The joke is the game's absurd behavior, not anyone's identity.

If the game insults you, congratulations. It insults everyone.

---

<div align="center">

### Congratulations. You reached the bottom.

You survived an entire README for a game that isn't even finished yet.

That's genuinely impressive.

Unfortunately, there's no achievement for that.

**GAY-M OFF**

*she's cute. she's mean. she's written in JavaScript.*

Made by [**azinamouto**](https://github.com/azinamouto) · 2026

</div>
