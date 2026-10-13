/**
 * GAY-M OFF — Psychological Quiz Questions
 * 10 original satirical troll questions with unpredictable consequences and narrator reactions.
 */

export const QUIZ_QUESTIONS = [
  {
    id: "q1",
    text: "Your bro says 'Nice outfit.' What is your immediate protocol?",
    options: [
      {
        text: "Say 'Thanks man' and nod once like a normal person.",
        delta: 2,
        effect: "none",
        reaction: "Suspiciously composed. Are you reading from a script?"
      },
      {
        text: "Compliment his shoes while making unblinking eye contact.",
        delta: 12,
        effect: "suspicion",
        reaction: "Intense eye contact registered. The bro protocol is wobbling."
      },
      {
        text: "Pretend you didn't hear and stare at the drywall.",
        delta: -8,
        effect: "glitch",
        reaction: "Emotional defense mechanism activated. Very subtle, champ."
      },
      {
        text: "Ask why he's staring and challenge him to arm wrestle.",
        delta: -15,
        effect: "shake",
        reaction: "Overcompensation level: Critical. Wall damage imminent."
      }
    ]
  },
  {
    id: "q2",
    text: "How long is a legally binding, socially certified bro hug?",
    options: [
      {
        text: "Exactly 0.4 seconds with two firm back-slaps.",
        delta: -5,
        effect: "none",
        reaction: "Textbook masculinity manual, page 42. Very textbook."
      },
      {
        text: "A lingering 8 seconds with gentle, rhythmic sighing.",
        delta: 20,
        effect: "suspicion",
        reaction: "Did the sigh come with emotional closure or just jasmine tea?"
      },
      {
        text: "Hover-hands from three feet away.",
        delta: -10,
        effect: "glitch",
        reaction: "Bluetooth hug. Zero bandwidth, infinite awkwardness."
      },
      {
        text: "Until one of you files next year's joint tax return.",
        delta: 15,
        effect: "shake",
        reaction: "Financial interdependence is the truest intimacy."
      }
    ]
  },
  {
    id: "q3",
    text: "Your gym partner asks you to spot his heavy bench press. You:",
    options: [
      {
        text: "Stand in position and yell 'ALL YOU BRO! ALL YOU!'",
        delta: -8,
        effect: "shake",
        reaction: "Classic. You did 0% of the lifting and 100% of the yelling."
      },
      {
        text: "Gaze into his eyes and whisper 'I believe in our journey.'",
        delta: 18,
        effect: "suspicion",
        reaction: "The barbell is touched by romance. Bro meter surging."
      },
      {
        text: "Drop your shaker bottle and sprint toward the emergency exit.",
        delta: -12,
        effect: "glitch",
        reaction: "Survival instinct: 10/10. Spotting ethics: 0/10."
      },
      {
        text: "Demand a notarized waiver of liability before touching the bar.",
        delta: 0,
        effect: "none",
        reaction: "Litigation-proof bro. The bar remains unlifted."
      }
    ]
  },
  {
    id: "q4",
    text: "Quick tailgate selection! Which beverage do you proudly display?",
    options: [
      {
        text: "A lukewarm domestic light beer in a dented aluminum can.",
        delta: -10,
        effect: "none",
        reaction: "Purity of the tailgate preserved. Tastebuds mourned."
      },
      {
        text: "Iced lavender oat milk matcha latte sprinkled with edible glitter.",
        delta: 22,
        effect: "glitch",
        reaction: "Sparkly matcha at a tailgate? Bold. The grill master fainted."
      },
      {
        text: "Unfiltered tap water sipped directly from a garden hose.",
        delta: -14,
        effect: "shake",
        reaction: "Caveman hydration detected. Soil microorganisms approve."
      },
      {
        text: "Organic fermented kombucha in a recycled mason jar.",
        delta: 8,
        effect: "suspicion",
        reaction: "Gut bacteria thriving. Tailgate credentials questioned."
      }
    ]
  },
  {
    id: "q5",
    text: "Your best buddy asks to borrow your favorite hoodie. You reply:",
    options: [
      {
        text: "'Sure, just keep it warm for me.'",
        delta: 14,
        effect: "suspicion",
        reaction: "A poetic sentiment. Hope you like sandalwood cologne."
      },
      {
        text: "'I don't own hoodies, only tactical cargo vests.'",
        delta: -12,
        effect: "none",
        reaction: "Are you prepping for a paintball tournament or emotional warfare?"
      },
      {
        text: "'Only if you return it washed and vacuum-sealed.'",
        delta: -2,
        effect: "none",
        reaction: "Hygiene over affection. Reasonable boundary."
      },
      {
        text: "'Identity theft is not a joke, Jim!'",
        delta: 4,
        effect: "shake",
        reaction: "Quoting sitcoms to avoid vulnerability. The classic shield."
      }
    ]
  },
  {
    id: "q6",
    text: "Accidental eye contact in the public restroom mirror. Action:",
    options: [
      {
        text: "The sacred single upward nod.",
        delta: -6,
        effect: "none",
        reaction: "The universal protocol. No words, no soul, just the nod."
      },
      {
        text: "Wink slowly and compliment his dental hygiene.",
        delta: 24,
        effect: "suspicion",
        reaction: "Confidence level: Unhinged. Facility manager notified."
      },
      {
        text: "Close eyes tightly and pretend you are temporarily blind.",
        delta: -10,
        effect: "glitch",
        reaction: "Stealth mode failed: you just walked into the hand dryer."
      },
      {
        text: "Challenge the mirror reflection to a duel.",
        delta: 5,
        effect: "shake",
        reaction: "Glass shattered. Mirror ego victorious."
      }
    ]
  },
  {
    id: "q7",
    text: "Rate this scent: Smoked cedar, motor oil, and emotional unavailability.",
    options: [
      {
        text: "10/10 — The pinnacle of modern masculinity.",
        delta: -14,
        effect: "none",
        reaction: "Smells like a lumberjack processing trauma in silence."
      },
      {
        text: "Needs more bergamot and a willingness to communicate.",
        delta: 16,
        effect: "suspicion",
        reaction: "Therapeutic fragrance critique logged into the mainframe."
      },
      {
        text: "I only wear genuine WD-40 spray lubricant.",
        delta: -18,
        effect: "shake",
        reaction: "Your joints are rust-free, but your social life is squeaking."
      },
      {
        text: "I cannot smell feelings, I am an engineer.",
        delta: 2,
        effect: "glitch",
        reaction: "Cold calculation detected. Heart reboot suggested."
      }
    ]
  },
  {
    id: "q8",
    text: "It is pouring rain and there is only ONE umbrella. What happens?",
    options: [
      {
        text: "One bro gets soaked. That is the noble sacrifice of brotherhood.",
        delta: -10,
        effect: "shake",
        reaction: "Hypothermia accepted in exchange for maintaining space."
      },
      {
        text: "Huddle shoulder-to-shoulder singing romantic movie ballads.",
        delta: 25,
        effect: "glitch",
        reaction: "Broadway soundtrack activated in the rainstorm."
      },
      {
        text: "Walk 15 paces behind him using a pizza box as a roof.",
        delta: -6,
        effect: "none",
        reaction: "Greasy hair, dry boundaries. Strategic compromise."
      },
      {
        text: "Throw the umbrella away and challenge the thunderstorm.",
        delta: -15,
        effect: "shake",
        reaction: "Zeus was not intimidated, but your pneumonia is confirmed."
      }
    ]
  },
  {
    id: "q9",
    text: "Your bro texts at 2:00 AM: 'Bro... do you ever think about life?'",
    options: [
      {
        text: "Reply 'that's crazy bro' and immediately fall asleep.",
        delta: -12,
        effect: "none",
        reaction: "Three-word deflection shield. A true conversational sniper."
      },
      {
        text: "Call him instantly and unpack his childhood relationship with art.",
        delta: 20,
        effect: "suspicion",
        reaction: "Midnight psychotherapy session initiated. Tissue box ready."
      },
      {
        text: "Send an unsolicited gym mirror selfie: 'Grind never stops.'",
        delta: -16,
        effect: "shake",
        reaction: "Delt definition does not solve existential dread, bro."
      },
      {
        text: "Reply with a link to buy commercial tractor attachments.",
        delta: 0,
        effect: "glitch",
        reaction: "Nothing says comfort like heavy agricultural machinery."
      }
    ]
  },
  {
    id: "q10",
    text: "Final interrogation check: How confident are you in your answers?",
    options: [
      {
        text: "100% confident. The bro code is etched in my DNA.",
        delta: -10,
        effect: "none",
        reaction: "Confidence noted. The ragebait challenges will now test that."
      },
      {
        text: "Emotionally terrified of what this arcade machine knows.",
        delta: 15,
        effect: "suspicion",
        reaction: "Self-awareness detected! Too bad it won't save you."
      },
      {
        text: "I want to speak with the lead JavaScript architect.",
        delta: 5,
        effect: "glitch",
        reaction: "The architect is hiding behind an evasion button right now."
      },
      {
        text: "Just give me whatever ridiculous verdict you have planned.",
        delta: 8,
        effect: "shake",
        reaction: "Resignation accepted. Welcome to the challenge gauntlet!"
      }
    ]
  }
];
