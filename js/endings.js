/**
 * GAY-M OFF — Endings Engine
 * Deterministic ending evaluation based on state metrics.
 */

export const ENDINGS_DATA = {
  ending_bro: {
    id: "ending_bro",
    title: "ENDING A: CERTIFIED BRO",
    tagline: "ANALYSIS INCONCLUSIVE",
    quote: "After extensive analysis, we have learned absolutely nothing.",
    description: "You navigated the questions with suspicious standard-issue bro etiquette. The machine has archived your profile under 'Inconclusive Dudebro'.",
    narratorKey: "ending_bro"
  },
  ending_chaos: {
    id: "ending_chaos",
    title: "ENDING B: CHAOS DETECTED",
    tagline: "ANOMALOUS ENERGY REGISTERED",
    quote: "Your decisions have confused the entire system.",
    description: "From glittery matcha tailgates to lingering eye contact, you overloaded the mainframe's binary logic circuits. Absolute chaos.",
    narratorKey: "ending_chaos"
  },
  ending_game_lost: {
    id: "ending_game_lost",
    title: "ENDING C: THE GAME LOST",
    tagline: "ARCADE RETIREMENT NOTICE",
    quote: "You didn't beat the game. The game gave up.",
    description: "Between chasing runaway buttons and smashing impossible quantum physics equations, your raw obstinance broke the game's spirit.",
    narratorKey: "ending_game_lost"
  }
};

export function evaluateEnding(state) {
  // Deterministic evaluation:
  // 1. High frustration / obstinance (tried impossible question 3+ times or frustration >= 6) -> ENDING C
  const impossibleAttempts = state.challengeAttempts?.impossible || 0;
  if (impossibleAttempts >= 3 || state.frustration >= 7) {
    return ENDINGS_DATA.ending_game_lost;
  }

  // 2. High Bro Meter (>= 60) -> ENDING B (Chaos Detected)
  if (state.broMeter >= 60) {
    return ENDINGS_DATA.ending_chaos;
  }

  // 3. Otherwise standard Certified Bro
  return ENDINGS_DATA.ending_bro;
}
