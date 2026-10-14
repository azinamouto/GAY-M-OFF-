export const QUESTION_CATEGORIES = [
  "Bro Code Violations",
  "Suspicious Friendships",
  "Midnight Overthinking",
  "Questionable Decisions",
  "Delusional Confidence",
  "Socially Awkward Situations",
  "Unexpected Plot Twists",
  "Brainrot and Internet Humor",
  "Friendship Loyalty Tests",
  "Completely Unhinged Questions",
];


export const QUESTION_TIERS = {
  NORMAL: 'normal',
  SUSPICIOUS: 'suspicious',
  UNHINGED: 'unhinged'
};


export const QUESTION_SESSION_COUNT = 10;
export const QUESTION_STORAGE_KEY = 'gay-m-off.question-history.v1';
export const LAST_SESSION_STORAGE_KEY = 'gay-m-off.last-session-questions.v1';


const FALLBACK_QUESTION = {
  id: 'fallback',
  category: 'Completely Unhinged Questions',
  tier: QUESTION_TIERS.UNHINGED,
  text: 'The cabinet lost the plot. Please reboot your confidence and try again.',
  narratorReactions: ['The system had a little existential crisis.', 'Fresh slate. Same nonsense.'],
  options: [
    { text: 'Try again with a better strategy.', delta: 0, effect: 'none', reaction: 'The machine accepts your surrender.', reactions: ['The machine accepts your surrender.'] },
    { text: 'Pretend this never happened.', delta: 0, effect: 'glitch', reaction: 'Excellent. Denial is now official protocol.', reactions: ['Excellent. Denial is now official protocol.'] },
    { text: 'Ask the narrator for a new personality.', delta: 0, effect: 'suspicion', reaction: 'The narrator is unavailable. It is currently processing a dramatic sigh.', reactions: ['The narrator is unavailable. It is currently processing a dramatic sigh.'] },
    { text: 'Restart and hope the code learns from its mistakes.', delta: 0, effect: 'shake', reaction: 'A reasonable strategy for a questionable machine.', reactions: ['A reasonable strategy for a questionable machine.'] }
  ]
};


export const QUIZ_QUESTIONS = [

  {

    id: 'q1',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: "Your bro says 'I miss you' at 2 AM. What's your response?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q2',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: 'Your bro steals your hoodie and refuses to return it. What do you do?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q3',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: "Your bro calls you 'princess' in front of the squad. What is the move?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q4',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: "Your bro keeps forgetting your birthday but remembers your favorite snack. What's the verdict?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q5',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: "Your bro says 'we are not talking about feelings' while crying at 3 AM. What do you say?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q6',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: 'Your bro starts a dramatic pep talk in the grocery aisle. How do you react?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q7',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: 'Your bro shows up to your house without warning and brings three extra chairs. What happens?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q8',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: "Your bro wants to 'just be honest' and then reveals a suspiciously detailed plan to move in. How do you respond?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q9',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: 'Your bro wants to be your wingman at a wedding. What is the primary concern?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q10',

    category: 'Bro Code Violations',

    tier: 'normal',

    text: "Your bro says he 'forgot' to buy you a gift but then returns with a fake cactus. What now?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q11',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: 'Your bro appears in your dreams three nights in a row. What now?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q12',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: 'Your friend keeps sending you three-dot texts and disappearing. What does that mean?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q13',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: 'Your roommate starts naming your snacks after your emotional problems. What is your response?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q14',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: 'You catch your friend making a detailed notebook of your habits. How do you proceed?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q15',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: "Your best friend keeps 'accidentally' sitting closer to you at the movies. What diagnosis?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q16',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: 'Your friend texts you a photo of their shoes and asks what emotional state they are in. You:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q17',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: "Your buddy keeps asking whether your phone is 'tracking your every move.' You're not sure if this is concern or confession.",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q18',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: "A friend says they 'just want to protect you' while following you around town. What do you do?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q19',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: "Your friend says, 'I know your schedule better than your own mom.' What is the appropriate response?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q20',

    category: 'Suspicious Friendships',

    tier: 'normal',

    text: 'A friend calls you for a 2 AM check-in with no reason. What do you suspect?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q21',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: 'You hear your phone buzz at 2:17 AM. It is your bro. What is your first thought?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q22',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: 'You mentally replay a text message for forty minutes. What happens next?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q23',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: 'You are staring at your ceiling and suddenly remember a weird disagreement from seventh grade. How do you cope?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q24',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: "You open your notes app and write, 'Maybe I am being dramatic.' Then you write another line. What next?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q25',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: 'You start overanalyzing a compliment from a friend. What is the correct action?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q26',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: 'You realize you have a full emotional spiral about a single emoji. What do you do?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q27',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: "Your brain becomes convinced your friend is mad because they used the word 'cool.' How do you respond?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q28',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: 'You start imagining every possible interpretation of one vague text. What is the actual next move?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q29',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: 'You spend twenty minutes drafting a response that is both funny and emotionally devastating. What do you send?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q30',

    category: 'Midnight Overthinking',

    tier: 'normal',

    text: 'A harmless sentence becomes a psychological warfare campaign in your head. What do you do?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q31',

    category: 'Questionable Decisions',

    tier: 'normal',

    text: 'Your friends dare you to call a random number and ask for a mayor. You:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q32',

    category: 'Questionable Decisions',

    tier: 'normal',

    text: 'You discover a mysterious cash envelope on the counter. You decide to:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q33',

    category: 'Questionable Decisions',

    tier: 'normal',

    text: "A stranger says 'I know your name' and your group decides to stay for the story. What happens?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q34',

    category: 'Questionable Decisions',

    tier: 'normal',

    text: 'You have one hour before a major family event and you decide to dye your hair. Why?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q35',

    category: 'Questionable Decisions',

    tier: 'suspicious',

    text: 'You find a haunted-looking trinket in a gas station. What do you do with it?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q36',

    category: 'Questionable Decisions',

    tier: 'suspicious',

    text: 'At a festival, you decide to fight the giant inflatable mascot alone. Why?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q37',

    category: 'Questionable Decisions',

    tier: 'suspicious',

    text: 'You are offered a free pet lizard with no cage. How do you proceed?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q38',

    category: 'Questionable Decisions',

    tier: 'suspicious',

    text: 'You rent a canoe for a solo lake expedition. What are you actually prepared for?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q39',

    category: 'Questionable Decisions',

    tier: 'suspicious',

    text: 'You accept a challenge to eat a mystery food from a stranger. What is your defense?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q40',

    category: 'Questionable Decisions',

    tier: 'suspicious',

    text: 'You volunteer for a surprise prank and immediately regret it. What is your final move?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q41',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: 'You decide to make an emotional speech to the entire group at brunch. What is your thesis?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q42',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: 'You claim you are a natural-born leader because you can hold a door open. What next?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q43',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: 'Your friend asks if you are genuinely prepared for the social stakes. You say:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q44',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: 'You announce that all your bad decisions are actually high-level strategy. Which one?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q45',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: "You are convinced your chaotic energy is 'a brand.' What is the brand motto?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q46',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: "You challenge a stranger to a staring contest because you 'read people well.' What's your opening line?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q47',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: 'You begin a business selling unusually specific emotional support cubes. What is your pitch?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q48',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: 'You insist that your terrible idea is actually a lifestyle. What is the slogan?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q49',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: "You say, 'I do not panic; I just get spiritually expressive.' What do you do next?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q50',

    category: 'Delusional Confidence',

    tier: 'suspicious',

    text: 'You start a debate club themed around whether coffee counts as a personality. Your opening statement is:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q51',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'You accidentally sit in the wrong booth at a restaurant. What do you do?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q52',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'The cashier asks if you want a bag and you answer with a dramatic monologue. What is your tone?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q53',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'A person waves at you from across the street and you wave back like a long-lost relative. What happens?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q54',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'You hear your own name in a crowded room and instantly apologize to the wrong person. Why?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q55',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'A dog sits next to you with full emotional eye contact. What do you do?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q56',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'You walk into a room, realize you are late, and choose to act like the room owes you an apology. Why?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q57',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'You are invited to a fancy party and bring the wrong snack. How do you defend it?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q58',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'The group goes quiet and someone turns to you for a thought. You say:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q59',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'A stranger compliments your shirt and you respond like it is a royal decree. What happens?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q60',

    category: 'Socially Awkward Situations',

    tier: 'suspicious',

    text: 'You open your mouth to ask a simple question and somehow turn it into a TED Talk. How do you recover?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q61',

    category: 'Unexpected Plot Twists',

    tier: 'suspicious',

    text: 'Your friend reveals they have been training to be a professional dramatic narrator. What is your response?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q62',

    category: 'Unexpected Plot Twists',

    tier: 'suspicious',

    text: 'The local arcade announces it now runs on emotional intelligence. What do you do?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q63',

    category: 'Unexpected Plot Twists',

    tier: 'suspicious',

    text: 'A mysterious man in a trench coat offers you free Wi-Fi and a worldview. What do you accept?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q64',

    category: 'Unexpected Plot Twists',

    tier: 'suspicious',

    text: 'The grocery store installs a laser maze to discourage loitering. You respond by:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q65',

    category: 'Unexpected Plot Twists',

    tier: 'suspicious',

    text: 'Your roommate reveals they are secretly hosting a tiny underground jazz club in the laundry room. What is your role?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q66',

    category: 'Unexpected Plot Twists',

    tier: 'suspicious',

    text: 'A suspiciously ambitious pigeon lands on your windowsill and starts staring at you. What does that mean?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q67',

    category: 'Unexpected Plot Twists',

    tier: 'suspicious',

    text: 'The bus driver announces that today the route is being run by vibes alone. What happens?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q68',

    category: 'Unexpected Plot Twists',

    tier: 'suspicious',

    text: 'Your text thread becomes a formal legal dispute because someone used an ellipsis wrong. How do you settle it?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q69',

    category: 'Unexpected Plot Twists',

    tier: 'unhinged',

    text: "A friend quietly hands you a key and says, 'For the secret rooftop rehearsal.' What do you do?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q70',

    category: 'Unexpected Plot Twists',

    tier: 'unhinged',

    text: "The town fair has a booth for 'adult emotional support napkins.' You buy one because:",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q71',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: 'You open a random meme and immediately become spiritually committed to it. What is your first move?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q72',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: "A guy says 'this is peak brainrot' in a serious business meeting. Your response:",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q73',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: 'You discover your friend has a spreadsheet of all your questionable opinions. What do you call it?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q74',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: 'You are challenged to explain the internet to your grandma in one sentence. You say:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q75',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: "Your phone auto-corrects 'bro' to 'broccoli.' You respond by:",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q76',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: 'A random cartoon dog becomes your emotional support mascot. What do you name it?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q77',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: 'You are invited to a group chat that only sends one weird phrase. You decide to:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q78',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: 'Your friend posts a dramatic reaction reel without context. You instantly:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q79',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: 'You get trapped in a loop of cursed phrase memes and decide to:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q80',

    category: 'Brainrot and Internet Humor',

    tier: 'unhinged',

    text: 'A random AI voice says your name in a whisper. What do you do?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q81',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: 'Your friend asks you to lie to their mom about where they are. What is your immediate answer?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q82',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: 'Your best friend wants to borrow your last snack during a crisis. Do you:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q83',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: 'A friend calls you from the parking lot, crying, and says they lost the car keys. How do you help?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q84',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: "Your friend wants to prank the entire office with a fake announcement about your 'grand promotion.' Do you join?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q85',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: 'You discover your friend has hidden your favorite coffee mug in the back of their car. What happens?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q86',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: "A friend says they are 'absolutely not dramatic' while crying in the rain. What's your move?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q87',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: "Your friend asks for your password 'just for one minute' while they are in a crisis. What do you say?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q88',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: 'Your buddy steals your best joke and tells it at the wrong time. Do you:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q89',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: 'Your friend asks if you will defend them if their enormous sandwich is attacked. You say:',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q90',

    category: 'Friendship Loyalty Tests',

    tier: 'unhinged',

    text: 'You are asked to choose between your friend and the truth in a tiny dramatic dispute. How do you handle it?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q91',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: "You wake up on a stranger's porch wearing a ceremonial cape and a suspiciously confident grin. What now?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q92',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: 'A local conspiracy says the moon is judging your texting habits. What is your defense?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q93',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: 'You find out the vending machine knows your emotional history. What does it ask first?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q94',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: "Your houseplant says 'I am not okay' in a low voice. What is your response?",

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'Your lawyer would advise you to stop clicking.',
      reactions: ['Your lawyer would advise you to stop clicking.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q95',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: 'You discover your shadow has opinions about your life choices. What does it say?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'Even JavaScript is disappointed.',
      reactions: ['Even JavaScript is disappointed.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q96',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: 'A tiny fake court emerges in your living room and demands a verdict on your latest decision. What do you do?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "You're somehow making this worse.",
      reactions: ["You're somehow making this worse.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q97',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: 'You are chased by a cheerful parade of lawn flamingos while trying to be serious. What is the move?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Tell the truth and accept the consequences.',
      delta: 10,
      effect: 'none',
      reaction: 'Girl, stand UP.',
      reactions: ['Girl, stand UP.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -10,
      effect: 'glitch',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -18,
      effect: 'shake',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q98',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: 'An alien translator keeps converting your jokes into warnings. What do you say back?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Use the silence as a strategy.',
      delta: 10,
      effect: 'none',
      reaction: 'The room has become a witness.',
      reactions: ['The room has become a witness.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: 18,
      effect: 'suspicion',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: -10,
      effect: 'glitch',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -18,
      effect: 'shake',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q99',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: 'You find a hidden room full of suspiciously confident rubber ducks. What is your strategy?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Blame the Wi-Fi and slowly back away.',
      delta: 10,
      effect: 'none',
      reaction: 'This is not a choice; this is a public warning.',
      reactions: ['This is not a choice; this is a public warning.', 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Make it a joke before it becomes a confession.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: -10,
      effect: 'glitch',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -18,
      effect: 'shake',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  },

  {

    id: 'q100',

    category: 'Completely Unhinged Questions',

    tier: 'unhinged',

    text: 'The city announces a holiday for people who made alarming life choices. How do you celebrate?',

    narratorReactions: ['Absolutely not. That was a red flag in a cardigan.', 'The room is taking notes.', 'This is either bravery or a very loud cry for help.'],

    options: [
    {
      text: 'Act like this is all part of the plan.',
      delta: 10,
      effect: 'none',
      reaction: "Bro, I wasn't even asking that seriously.",
      reactions: ["Bro, I wasn't even asking that seriously.", 'Pretend the situation is normal and absolutely not a problem.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Pretend the situation is normal and absolutely not a problem.',
      delta: 18,
      effect: 'suspicion',
      reaction: "Interesting. I'll be telling absolutely everyone.",
      reactions: ["Interesting. I'll be telling absolutely everyone.", 'Turn it into a dramatic monologue and walk away.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Turn it into a dramatic monologue and walk away.',
      delta: -10,
      effect: 'glitch',
      reaction: "That's not an answer. That's a confession.",
      reactions: ["That's not an answer. That's a confession.", 'Call the whole thing off before the narrator gets ideas.', 'The cabinet is now emotionally invested.']
    },
        {
      text: 'Call the whole thing off before the narrator gets ideas.',
      delta: -18,
      effect: 'shake',
      reaction: 'The council has been notified.',
      reactions: ['The council has been notified.', 'Make it a joke before it becomes a confession.', 'The cabinet is now emotionally invested.']
    }
    ]
  }

];


export function isQuestionObject(question) {
  if (!question || typeof question !== 'object') return false;
  if (typeof question.id !== 'string' || typeof question.text !== 'string') return false;
  if (!Array.isArray(question.options) || question.options.length < 2 || question.options.length > 4) return false;
  if (!QUESTION_CATEGORIES.includes(question.category)) return false;
  if (!Object.values(QUESTION_TIERS).includes(question.tier)) return false;
  return true;
}

function resolveStorage(storage) {
  if (storage && typeof storage.getItem === 'function' && typeof storage.setItem === 'function') {
    return storage;
  }
  if (typeof globalThis !== 'undefined' && globalThis.localStorage && typeof globalThis.localStorage.getItem === 'function') {
    return globalThis.localStorage;
  }
  return null;
}

export function readQuestionHistory(storage = resolveStorage(globalThis.localStorage)) {
  const safeStorage = resolveStorage(storage);
  if (!safeStorage) return [];
  try {
    const raw = safeStorage.getItem(QUESTION_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id) => typeof id === 'string' && id.length > 0).slice(-250);
  } catch (error) {
    console.warn('Question history was corrupted or unavailable; resetting local state.', error);
    try { safeStorage.removeItem(QUESTION_STORAGE_KEY); } catch (_) {}
    return [];
  }
}

export function writeQuestionHistory(history, storage = resolveStorage(globalThis.localStorage)) {
  const safeStorage = resolveStorage(storage);
  if (!safeStorage) return history;
  const nextHistory = Array.from(new Set((Array.isArray(history) ? history : []).filter((id) => typeof id === 'string' && id.length > 0))).slice(-250);
  try {
    safeStorage.setItem(QUESTION_STORAGE_KEY, JSON.stringify(nextHistory));
  } catch (error) {
    console.warn('Question history could not be saved.', error);
  }
  return nextHistory;
}

export function readLastSessionQuestions(storage = resolveStorage(globalThis.localStorage)) {
  const safeStorage = resolveStorage(storage);
  if (!safeStorage) return [];
  try {
    const raw = safeStorage.getItem(LAST_SESSION_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string' && id.length > 0) : [];
  } catch (error) {
    console.warn('Last session question cache is unreadable; ignoring it.', error);
    return [];
  }
}

export function writeLastSessionQuestions(ids, storage = resolveStorage(globalThis.localStorage)) {
  const safeStorage = resolveStorage(storage);
  if (!safeStorage) return ids;
  const nextIds = Array.from(new Set((Array.isArray(ids) ? ids : []).filter((id) => typeof id === 'string' && id.length > 0))).slice(-20);
  try {
    safeStorage.setItem(LAST_SESSION_STORAGE_KEY, JSON.stringify(nextIds));
  } catch (error) {
    console.warn('Last session question cache could not be saved.', error);
  }
  return nextIds;
}

export function fisherYatesShuffle(items, randomFn = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(randomFn() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildTierOrder(questions) {
  const order = { normal: 0, suspicious: 1, unhinged: 2 };
  return [...questions].sort((a, b) => {
    const left = order[a.tier] ?? order.unhinged;
    const right = order[b.tier] ?? order.unhinged;
    return left - right;
  });
}

export function getValidatedQuestionPool() {
  return QUIZ_QUESTIONS.filter(isQuestionObject).map((question, index) => ({
    ...question,
    id: question.id || `q${index + 1}`,
    category: question.category || 'Completely Unhinged Questions',
    tier: Object.values(QUESTION_TIERS).includes(question.tier) ? question.tier : QUESTION_TIERS.NORMAL,
    text: typeof question.text === 'string' && question.text.trim() ? question.text : 'The machine is confused by a silence.'
  }));
}

export function buildQuestionSet({ count = QUESTION_SESSION_COUNT, randomFn = Math.random, storage = resolveStorage(globalThis.localStorage), previousSessionIds = [] } = {}) {
  const pool = getValidatedQuestionPool();
  if (!pool.length) {
    return [FALLBACK_QUESTION];
  }

  const requestedCount = Math.max(1, Math.min(count, pool.length));
  const history = readQuestionHistory(storage);
  const previousIds = new Set(Array.isArray(previousSessionIds) ? previousSessionIds : []);
  const recentIds = new Set(history);

  const tierWeights = { normal: 3, suspicious: 4, unhinged: 3 };
  const orderedTiers = [QUESTION_TIERS.NORMAL, QUESTION_TIERS.SUSPICIOUS, QUESTION_TIERS.UNHINGED];
  const selected = [];
  const seenIds = new Set();

  for (const tier of orderedTiers) {
    const target = Math.min(tierWeights[tier] ?? 0, requestedCount - selected.length);
    if (target <= 0) continue;

    const tierPool = fisherYatesShuffle(
      pool.filter((question) => question.tier === tier && !seenIds.has(question.id) && !recentIds.has(question.id) && !previousIds.has(question.id)),
      randomFn
    );

    const fallbackPool = fisherYatesShuffle(
      pool.filter((question) => question.tier === tier && !seenIds.has(question.id) && !previousIds.has(question.id)),
      randomFn
    );

    const candidatePool = tierPool.length >= target ? tierPool : [...tierPool, ...fallbackPool.filter((question) => !tierPool.some((item) => item.id === question.id))];
    let picked = 0;

    for (const question of candidatePool) {
      if (picked >= target) break;
      if (seenIds.has(question.id)) continue;
      if (selected.some((item) => item.category === question.category && selected.filter((entry) => entry.category === question.category).length >= 2)) {
        continue;
      }

      selected.push(question);
      seenIds.add(question.id);
      picked += 1;
    }
  }

  if (selected.length < requestedCount) {
    const remaining = fisherYatesShuffle(
      pool.filter((question) => !seenIds.has(question.id) && !previousIds.has(question.id)),
      randomFn
    );
    for (const question of remaining) {
      if (selected.length >= requestedCount) break;
      if (seenIds.has(question.id)) continue;
      selected.push(question);
      seenIds.add(question.id);
    }
  }

  if (selected.length < requestedCount) {
    const overflow = fisherYatesShuffle(
      pool.filter((question) => !seenIds.has(question.id)),
      randomFn
    );
    for (const question of overflow) {
      if (selected.length >= requestedCount) break;
      if (seenIds.has(question.id)) continue;
      selected.push(question);
      seenIds.add(question.id);
    }
  }

  const finalSelection = selected
    .slice(0, requestedCount)
    .sort((a, b) => {
      const order = { normal: 0, suspicious: 1, unhinged: 2 };
      return (order[a.tier] ?? 99) - (order[b.tier] ?? 99);
    });

  const finalized = finalSelection.map((question) => ({
    ...question,
    options: Array.isArray(question.options) ? question.options.map((option) => ({
      ...option,
      effect: ['none', 'suspicion', 'glitch', 'shake'].includes(option.effect) ? option.effect : 'none',
      delta: Number.isFinite(Number(option.delta)) ? Number(option.delta) : 0,
      reaction: typeof option.reaction === 'string' ? option.reaction : 'The machine holds judgment.',
      reactions: Array.isArray(option.reactions) && option.reactions.length ? option.reactions : [typeof option.reaction === 'string' ? option.reaction : 'The machine holds judgment.']
    })) : []
  }));

  const finalIds = finalized.map((question) => question.id);
  writeQuestionHistory([...readQuestionHistory(storage), ...finalIds], storage);
  writeLastSessionQuestions(finalIds, storage);

  return finalized;
}

export function generateQuestionSession(options = {}) {
  const storage = options.storage || resolveStorage(globalThis.localStorage);
  const previousSessionIds = readLastSessionQuestions(storage);
  return buildQuestionSet({ ...options, storage, previousSessionIds });
}
