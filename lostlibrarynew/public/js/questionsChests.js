const questionsChestsPages = [
// Q1 GENERAL
[
  {
    question: "Is 'The Great Gatsby' by F. Scott Fitzgerald a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 1 },
      { option: "Non-fiction", answer: 0 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'A Brief History of Time' by Stephen Hawking a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 0 },
      { option: "Non-fiction", answer: 1 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'Harry Potter and the Sorcerer's Stone' by J.K. Rowling a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 1 },
      { option: "Non-fiction", answer: 0 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'The Diary of a Young Girl' by Anne Frank a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 0 },
      { option: "Non-fiction", answer: 1 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'The Catcher in the Rye' by J.D. Salinger a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 1 },
      { option: "Non-fiction", answer: 0 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'The Art of War' by Sun Tzu a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 0 },
      { option: "Non-fiction", answer: 1 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'Green Eggs and Ham' by Dr. Seuss a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 1 },
      { option: "Non-fiction", answer: 0 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'The Guinness World Records' a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 0 },
      { option: "Non-fiction", answer: 1 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'Aesop's Fables' a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 1 },
      { option: "Non-fiction", answer: 0 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'The Bible' a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 0 },
      { option: "Non-fiction", answer: 0 },
      { option: "Neither", answer: 1 }
    ]
  },
  {
    question: "Is 'The Origin of Species' by Charles Darwin a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 0 },
      { option: "Non-fiction", answer: 1 },
      { option: "Neither", answer: 0 }
    ]
  },
  {
    question: "Is 'The Lord of the Rings' by J.R.R. Tolkien a fiction, non-fiction, or neither?",
    options: [
      { option: "Fiction", answer: 1 },
      { option: "Non-fiction", answer: 0 },
      { option: "Neither", answer: 0 }
    ]
  },
], 
// Q2 PLOT
[
  {
    question: 'In the Freytag Pyramid, what does the exposition refer to?',
    options: [
      { option: 'The part of the plot where characters and setting are introduced', answer: 1 },
      { option: 'The part of the plot where some outside complication forces the protagonist into motion.', answer: 0 },
      { option: 'The highest point of action in a story.', answer: 0 },
    ],
  },
  {
    question: 'In the Freytag Pyramid, what does the inciting incident refer to?',
    options: [
      { option: 'The part of the plot where the action dies down following the climax.', answer: 0 },
      { option: 'The part of the plot where some outside complication forces the protagonist into motion.', answer: 1 },
      { option: 'The part of the plot that refers to the last event that ties up the story’s loose ends', answer: 0 },
    ],
  },
  {
    question: 'In the Freytag Pyramid, what does the rising action refer to?',
    options: [
      { option: 'The part of the plot where the action dies down following the climax.', answer: 0 },
      { option: 'The part of the story that builds in action toward the climax', answer: 1 },
      { option: 'The part of the plot where characters and setting are introduced', answer: 0 },
    ],
  },
  {
    question: 'In the Freytag Pyramid, what does the climax refer to?',
    options: [
      { option: 'The highest point of action in a story.', answer: 1 },
      { option: 'The part of the plot where some outside complication forces the protagonist into motion.', answer: 0 },
      { option: 'The part of the plot where characters and setting are introduced', answer: 0 },
    ],
  },
  {
    question: 'In the Freytag Pyramid, what does the falling action refer to?',
    options: [
      { option: 'The part of the plot where the action dies down following the climax.', answer: 1 },
      { option: 'The part of the story that builds in action toward the climax', answer: 0 },
      { option: 'The part of the plot where characters and setting are introduced', answer: 0 },
    ],
  },
  {
    question: 'In the Freytag Pyramid, what does the resolution refer to?',
    options: [
      { option: 'The part of the plot where the action dies down following the climax.', answer: 0 },
      { option: 'The part of the plot where some outside complication forces the protagonist into motion.', answer: 0 },
      { option: 'The part of the plot that refers to the last event that ties up the story’s loose ends', answer: 1 },
    ],
  },
  {
    question: 'What is the part of the plot where characters and setting are introduced?',
    options: [
      { option: 'Exposition', answer: 1 },
      { option: 'Climax', answer: 0 },
      { option: 'Falling Action', answer: 0 },
    ],
  },
  {
    question: 'What is the part of the plot where some outside complication forces the protagonist into motion.',
    options: [
      { option: 'Resolution', answer: 0 },
      { option: 'Inciting Incident', answer: 1 },
      { option: 'Climax', answer: 0 },
    ],
  },
  {
    question: 'What is the part of the story that builds in action toward the climax. Any characters who have not as of yet been introduced should be introduced here.',
    options: [
      { option: 'Falling Action', answer: 0 },
      { option: 'Rising Action', answer: 1 },
      { option: 'Exposition', answer: 0 },
    ],
  },
  {
    question: 'What is the highest point of action in a story.',
    options: [
      { option: 'Exposition', answer: 0 },
      { option: 'Resolution', answer: 0 },
      { option: 'Climax', answer: 1 },
    ],
  },
  {
    question: 'What is the part of the plot where the action dies down following the climax.',
    options: [
      { option: 'Falling Action', answer: 1 },
      { option: 'Rising Action', answer: 0 },
      { option: 'Exposition', answer: 0 },
    ],
  },
  {
    question: 'What is the part of the plot that refers to the last event that ties up the story’s loose ends, sometimes expressed in the story’s epilogue or closing scene.',
    options: [
      { option: 'Exposition', answer: 0 },
      { option: 'Resolution', answer: 1 },
      { option: 'Climax', answer: 0 },
    ],
  },
],
// Q3 CHARACTERIZATION / SETTING
[
  {
    question: "Which statement best analyzes a character's speech?",
    options: [
      { option: "John's decision to help the lost child showed his kindness.", answer: 0 },
      { option: "Sarah often spoke in a gentle, calming voice, especially when someone was upset.", answer: 1 },
      { option: "Mark always wore the latest fashion trends.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's thoughts?",
    options: [
      { option: "Lisa often daydreamed about becoming a famous artist, which showed her creative aspirations.", answer: 1 },
      { option: "Alex had a kind smile that made everyone feel at ease.", answer: 0 },
      { option: "The town was known for its beautiful scenery.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's actions?",
    options: [
      { option: "Whenever someone needed help, Peter was the first to volunteer, showing his helpful nature.", answer: 1 },
      { option: "Laura's hair was always perfectly styled.", answer: 0 },
      { option: "The city was bustling with activity.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's appearance?",
    options: [
      { option: "James' piercing blue eyes and tall stature made him stand out in a crowd.", answer: 1 },
      { option: "Maria often thought about how to solve the mystery.", answer: 0 },
      { option: "The school was filled with colorful murals.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's motivations?",
    options: [
      { option: "Anna worked tirelessly to achieve her goals, driven by her desire for success.", answer: 1 },
      { option: "The weather was unusually cold that day.", answer: 0 },
      { option: "Steve's laugh was contagious.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's emotions?",
    options: [
      { option: "Emma's heart raced as she stepped onto the stage, showing her nervousness.", answer: 1 },
      { option: "The sun set over the horizon, painting the sky in hues of orange and pink.", answer: 0 },
      { option: "Jack's backpack was heavy with books.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's relationships with others?",
    options: [
      { option: "Lucy always took care of her younger siblings, showing her sense of responsibility.", answer: 1 },
      { option: "The garden was filled with blooming flowers.", answer: 0 },
      { option: "Tom's presence always brought comfort to his friends.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's speech?",
    options: [
      { option: "Michael's voice grew louder and more aggressive when he felt threatened.", answer: 1 },
      { option: "Emily's room was always neatly organized.", answer: 0 },
      { option: "The forest was quiet and serene.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's thoughts?",
    options: [
      { option: "Rachel often worried about what others thought of her, showing her insecurity.", answer: 1 },
      { option: "The lake was calm and still.", answer: 0 },
      { option: "David's shoes were always spotless.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's actions?",
    options: [
      { option: "Whenever Jenny saw someone in need, she would stop whatever she was doing to help.", answer: 1 },
      { option: "The sky was clear and blue.", answer: 0 },
      { option: "Mark's hair was always perfectly combed.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's appearance?",
    options: [
      { option: "Sophie had a radiant smile that lit up the room.", answer: 1 },
      { option: "The house was painted bright yellow.", answer: 0 },
      { option: "The park was filled with children playing.", answer: 0 }
    ]
  },
  {
    question: "Which statement best analyzes a character's emotions?",
    options: [
      { option: "Liam felt a surge of pride as he crossed the finish line.", answer: 1 },
      { option: "The wind blew gently through the trees.", answer: 0 },
      { option: "Sarah's dress was a vibrant shade of red.", answer: 0 }
    ]
  }
],
  // Q4 GENRE
[
    {
      question: "What is a key characteristic of the Mystery genre?",
      options: [
        { option: "The story revolves around a romantic relationship.", answer: 0 },
        { option: "The story is set in a futuristic society.", answer: 0 },
        { option: "The plot involves solving a puzzle or crime.", answer: 1 },
      ],
    },
    {
      question: "What element is most prevalent in Action genre stories?",
      options: [
        { option: "Fast-paced, thrilling sequences, often with physical danger.", answer: 1 },
        { option: "Philosophical debates and introspection.", answer: 0 },
        { option: "Detailed magical systems and mythical creatures.", answer: 0 },
      ],
    },
    {
      question: "What makes a story belong to the Fantasy genre?",
      options: [
        { option: "It focuses on technology and scientific principles.", answer: 0 },
        { option: "It involves magical or supernatural elements.", answer: 1 },
        { option: "The plot centers around a dystopian future.", answer: 0 },
      ],
    },
    {
      question: "What is a common theme in Adventure stories?",
      options: [
        { option: "A journey or quest filled with risks and unexpected challenges.", answer: 1 },
        { option: "The daily lives and struggles of characters in a realistic setting.", answer: 0 },
        { option: "A focus on the development of romantic relationships.", answer: 0 },
      ],
    },
    {
      question: "What defines a Science Fiction story?",
      options: [
        { option: "Exploration of futuristic, scientific, and technological advancements.", answer: 1 },
        { option: "An emphasis on life in an imagined, oppressive society.", answer: 0 },
        { option: "A narrative centered on a character's psychological and moral growth.", answer: 0 },
      ],
    },
    {
        question: "What is the central focus of the Romance genre?",
        options: [
          { option: "Characters involved in intense emotional and romantic relationships.", answer: 1 },
          { option: "Characters involved in a profound change in perspective or maturity. ", answer: 0 },
          { option: "Characters embarking on a thrilling and dangerous expedition.", answer: 0 },
        ],
      },
      {
        question: "What is the Coming of Age genre primarily about?",
        options: [
          { option: "Characters navigating complex political landscapes.", answer: 0 },
          { option: "Characters transitioning from youth to adulthood.", answer: 1 },
          { option: "Characters solving a mysterious crime.", answer: 0 },
        ],
      },
      {
        question: "What characteristic is most important to the Realism genre?",
        options: [
          { option: "Accurate, detailed portrayal of everyday life and real, relatable characters.", answer: 1 },
          { option: "Fantastical elements and magical creatures.", answer: 0 },
          { option: "Advanced technology and futuristic settings.", answer: 0 },
        ],
      },
      {
        question: "What makes a story belong to the Survival genre?",
        options: [
          { option: "It focuses the characters' struggle to physically survive.", answer: 1 },
          { option: "It involves characters' struggling with their past.", answer: 0 },
          { option: "The plot centers around the need for mental survival after a traumatic event.", answer: 0 },
        ],
      },
      {
        question: "What characteristic is most important to the horror genre?",
        options: [
          { option: "It scares, shocks and even repulses audiences.", answer: 1 },
          { option: "It makes the audience think and ponder about their existence.", answer: 0 },
          { option: "It excites, rouses and even thrills audiences.", answer: 0 },
        ],
      },
      {
        question: "What theme is most common in Dystopian Fiction?",
        options: [
          { option: "Exploration of futuristic and scientific advancements, often exploring existential themes. ", answer: 0 },
          { option: "Depiction of romantic relationships set in historical contexts, often exploring themes of love,", answer: 0 },
          { option: "Depiction of imagined oppressive societies, often exploring themes of freedom and identity.", answer: 1 },
        ],
      },
      {
        question: "What defines a Historical Fiction story?",
        options: [
          { option: "Made up story based on historical past events.", answer: 1 },
          { option: "Accurate, detailed portrayal of everyday life and real, relatable characters.", answer: 0 },
          { option: "Exploration of futuristic, scientific, and technological advancements.", answer: 0 },
        ],
      },
],
    // Q5 THEMES
  [
    {
      question: "A novel follows a group of astronauts stranded on a distant planet, struggling to find a way back home. The theme is most likely:",
      options: [
        { option: "Love conquers all", answer: 0 },
        { option: "Survival ", answer: 1 },
        { option: "Leadership", answer: 0 },
      ],
    },
    {
      question: "In a story where a family is isolated in the wilderness and must rely on their wits and each other to make it through each season, the theme is:",
      options: [
        { option: "Sacrifice", answer: 0 },
        { option: "Power corrupts", answer: 0 },
        { option: "Survival ", answer: 1 },
      ],
    },
    {
      question: "A protagonist gives up their dreams to support their sibling's education. This story is primarily about the theme of:",
      options: [
        { option: "Sacrifice ", answer: 1 },
        { option: "Leadership", answer: 0 },
        { option: "Love is letting go", answer: 0 },
      ],
    },
    {
      question: "In a tale where a soldier throws himself on a grenade to save his platoon, the narrative explores:",
      options: [
        { option: "Love conquers all", answer: 0 },
        { option: "Sacrifice ", answer: 1 },
        { option: "Redemption", answer: 0 },
      ],
    },
    {
      question: "A young queen rises to the challenge of ruling a kingdom in turmoil, making wise and just decisions. The story's theme is most likely:",
      options: [
        { option: "Leadership ", answer: 1 },
        { option: "Power corrupts", answer: 0 },
        { option: "Be yourself", answer: 0 },
      ],
    },
    {
      question: "In a narrative where a teacher inspires troubled students to succeed against all odds, the story celebrates the theme of:",
      options: [
        { option: "Survival", answer: 0 },
        { option: "Leadership ", answer: 1 },
        { option: "Love conquers all", answer: 0 },
      ],
    },
    {
      question: "A former criminal works tirelessly to right the wrongs of his past, seeking forgiveness and a new path. This story focuses on:",
      options: [
        { option: "Love is letting go", answer: 0 },
        { option: "Redemption ", answer: 1 },
        { option: "Action Speaks", answer: 0 },
      ],
    },
    {
      question: "After betraying a friend, a character goes on a journey to earn back trust and make amends, illustrating the theme of:",
      options: [
        { option: "Power corrupts", answer: 0 },
        { option: "Redemption ", answer: 1 },
        { option: "Stronger together", answer: 0 },
      ],
    },
    {
      question: "In a community facing injustice, one person's brave act sparks widespread change. This demonstrates the theme that:",
      options: [
        { option: "Action Speaks ", answer: 1 },
        { option: "Love conquers all", answer: 0 },
        { option: "Be yourself", answer: 0 },
      ],
    },
    {
      question: "When words fail, a character's decision to stand up for what is right, even at personal risk, highlights the theme of:",
      options: [
        { option: "Love is letting go", answer: 0 },
        { option: "Power corrupts", answer: 0 },
        { option: "Action Speaks ", answer: 1 },
      ],
    },
    {
      question: "Despite all obstacles, two individuals from rival groups fall in love and unite their communities. This story is about how:",
      options: [
        { option: "Love conquers all ", answer: 1 },
        { option: "Power corrupts", answer: 0 },
        { option: "Stronger together", answer: 0 },
      ],
    },
    {
      question: "In a world torn apart by war, the unwavering love between family members brings hope and peace, showcasing:",
      options: [
        { option: "Sacrifice", answer: 0 },
        { option: "Love conquers all ", answer: 1 },
        { option: "Redemption", answer: 0 },
      ],
    },
    {
      question: "A parent must let their child travel far away to pursue their dreams, illustrating the theme of:",
      options: [
        { option: "Survival", answer: 0 },
        { option: "Leadership", answer: 0 },
        { option: "Love is letting go ", answer: 1 },
      ],
    },
    {
      question: "Realizing their presence endangers their loved one, a character chooses to leave, demonstrating:",
      options: [
        { option: "Power corrupts", answer: 0 },
        { option: "Stronger together", answer: 0 },
        { option: "Love is letting go ", answer: 1 },
      ],
    },
    {
      question: "A leader, once just and fair, becomes tyrannical over time, embodying the theme:",
      options: [
        { option: "Leadership", answer: 0 },
        { option: "Power corrupts ", answer: 1 },
        { option: "Be yourself", answer: 0 },
      ],
    },
    {
      question: "In a story where the quest for control leads to a society's downfall, the narrative explores:",
      options: [
        { option: "Redemption", answer: 0 },
        { option: "Power corrupts ", answer: 1 },
        { option: "Action Speaks", answer: 0 },
      ],
    },
    {
      question: "A diverse group of individuals combines their strengths to overcome a seemingly insurmountable challenge, highlighting:",
      options: [
        { option: "Sacrifice", answer: 0 },
        { option: "Stronger together ", answer: 1 },
        { option: "Love conquers all", answer: 0 },
      ],
    },
    {
      question: "When a community bands together to protect its vulnerable members, the story exemplifies:",
      options: [
        { option: "Power corrupts", answer: 0 },
        { option: "Stronger together ", answer: 1 },
        { option: "Be yourself", answer: 0 },
      ],
    },
    {
      question: "A character realizes that embracing their unique qualities is their greatest strength, illustrating the theme:",
      options: [
        { option: "Survival", answer: 0 },
        { option: "Love is letting go", answer: 0 },
        { option: "Be yourself ", answer: 1 },
      ],
    },
    {
      question: "In a society that values conformity, one person's journey to self-acceptance inspires others, demonstrating:",
      options: [
        { option: "Redemption", answer: 0 },
        { option: "Action Speaks", answer: 0 },
        { option: "Be yourself ", answer: 1 },
      ],
    },
  ],
  //Q6 SYMBOLS
  [
    {
      question: "In a novel, a lone tree growing in a barren wasteland serves as a symbol of:",
      options: [
        { option: "Redemption", answer: 0 },
        { option: "Sacrifice", answer: 0 },
        { option: "Survival ", answer: 1 },
      ],
    },
    {
      question: "A character carries an old compass everywhere, symbolizing:",
      options: [
        { option: "Redemption", answer: 0 },
        { option: "Survival ", answer: 1 },
        { option: "Leadership", answer: 0 },
      ],
    },
    {
      question: "A family heirloom is broken to save a life, symbolizing:",
      options: [
        { option: "Sacrifice ", answer: 1 },
        { option: "Love conquers all", answer: 0 },
        { option: "Action speaks", answer: 0 },
      ],
    },
    {
      question: "A character gives up their most cherished possession for the greater good, representing:",
      options: [
        { option: "Action speaks", answer: 0 },
        { option: "Sacrifice ", answer: 1 },
        { option: "Leadership", answer: 0 },
      ],
    },
    {
      question: "A crown that becomes heavier with each decision made by the ruler symbolizes:",
      options: [
        { option: "Power corrupts", answer: 0 },
        { option: "Leadership ", answer: 1 },
        { option: "Action speaks", answer: 0 },
      ],
    },
    {
      question: "A ship successfully navigating through a storm under the command of a capable captain symbolizes:",
      options: [
        { option: "Survival", answer: 0 },
        { option: "Redemption", answer: 0 },
        { option: "Leadership ", answer: 1 },
      ],
    },
    {
      question: "A character plants a new garden where one was once destroyed, symbolizing:",
      options: [
        { option: "Redemption ", answer: 1 },
        { option: "Leadership", answer: 0 },
        { option: "Survival", answer: 0 },
      ],
    },
    {
      question: "An old, battered book is restored and treasured, symbolizing:",
      options: [
        { option: "Survival", answer: 0 },
        { option: "Redemption ", answer: 1 },
        { option: "Sacrifice", answer: 0 },
      ],
    },
    {
      question: "A character's worn and calloused hands symbolize their:",
      options: [
        { option: "Redemption", answer: 0 },
        { option: "Action Speaks ", answer: 1 },
        { option: "Leadership", answer: 0 },
      ],
    },
    {
      question: "In a community suffering from injustice, a mural depicting raised hands symbolizes:",
      options: [
        { option: "Leadership", answer: 0 },
        { option: "Action speaks ", answer: 1 },
        { option: "Power corrupts", answer: 0 },
      ],
    },
    {
      question: "A bridge built by two feuding towns coming together symbolizes:",
      options: [
        { option: "Action speaks", answer: 0 },
        { option: "Love conquers all ", answer: 1 },
        { option: "Be yourself", answer: 0 },
      ],
    },
    {
      question: "A locket containing portraits of two characters from rival sides symbolizes:",
      options: [
        { option: "Love is letting go", answer: 0 },
        { option: "Love conquers all ", answer: 1 },
        { option: "Stronger together", answer: 0 },
      ],
    },
    {
      question: "In a story, a character releases a caged bird, symbolizing:",
      options: [
        { option: "Be yourself", answer: 0 },
        { option: "Love is letting go ", answer: 1 },
        { option: "Survival", answer: 0 },
      ],
    },
    {
      question: "A boat drifting away on the current symbolizes:",
      options: [
        { option: "Survival", answer: 0 },
        { option: "Love is letting go ", answer: 1 },
        { option: "Sacrifice", answer: 0 },
      ],
    },
    {
      question: "A crown that grows increasingly tarnished as a ruler becomes more tyrannical symbolizes:",
      options: [
        { option: "Leadership", answer: 0 },
        { option: "Power corrupts ", answer: 1 },
        { option: "Sacrifice", answer: 0 },
      ],
    },
    {
      question: "In a narrative, a once-pristine palace that falls into disrepair as the ruler becomes more despotic symbolizes:",
      options: [
        { option: "Survival", answer: 0 },
        { option: "Power corrupts ", answer: 1 },
        { option: "Action speaks", answer: 0 },
      ],
    },
    {
      question: "A patchwork quilt made from different communities' fabrics symbolizes:",
      options: [
        { option: "Love conquers all", answer: 0 },
        { option: "Stronger together ", answer: 1 },
        { option: "Love is letting go", answer: 0 },
      ],
    },
    {
      question: "In a story, a group of diverse characters forms a circle, symbolizing:",
      options: [
        { option: "Survival", answer: 0 },
        { option: "Redemption", answer: 0 },
        { option: "Stronger together ", answer: 1 },
      ],
    },
    {
      question: "A character's unique, colorful attire that stands out in a uniform crowd symbolizes:",
      options: [
        { option: "Action speaks", answer: 0 },
        { option: "Be yourself ", answer: 1 },
        { option: "Leadership", answer: 0 },
      ],
    },
    {
      question: "A wildflower growing in a field of uniform crops symbolizes:",
      options: [
        { option: "Survival", answer: 0 },
        { option: "Be yourself ", answer: 1 },
        { option: "Love conquers all", answer: 0 },
      ],
    },
  ],
]


// A copy of the questions for active use in the game, allowing for modifications
let questionsChestsPagesActive = JSON.parse(JSON.stringify(questionsChestsPages));

// Resets the active questions to the original set
const resetPages = () => {
  questionsChestsPagesActive = JSON.parse(JSON.stringify(questionsChestsPages));
}

// Function to handle chest encounters with questions
const questionChestFunction = (scene, chestBox, gameState, destroyArray, player, TILES, groundLayer, chestopen, dungeon) => {
  // Function to calculate the typing speed based on word length
  const getNextSpeed = (text, currentIndex) => {
    let spaceIndex = text.indexOf(' ', currentIndex);
    if (spaceIndex === -1) spaceIndex = text.length;
    let wordLength = spaceIndex - currentIndex;
    return wordLength > 5 ? 1 : 50;
  }

  // Function to type out text character by character
  const typeText = (scene, textObject, targetText, startDelay = 0, index = 0, onComplete = null, onCompleteDelay = 0) => {
    if (index < targetText.length) {
      scene.time.delayedCall(startDelay, () => {
        textObject.setText(targetText.substring(0, index + 1));
        typeText(scene, textObject, targetText, getNextSpeed(targetText, index), index + 1, onComplete, onCompleteDelay);
      });
    } else if (onComplete) {
      scene.time.delayedCall(onCompleteDelay, () => {
        onComplete();
      });
    }
  }

  // Zoom in and pause the game
  scene.cameras.main.zoom = 2;
  scene.physics.world.pause();

  // Coordinates for text placement
  const centerX = scene.cameras.main.width / 2;
  const centerY = scene.cameras.main.height / 2;

  // Create a text box for the question
  const textBoxb = scene.add.rectangle(centerX, centerY - 95, 420, 190, 0x000000).setScrollFactor(0);
  const textBox = scene.add.rectangle(centerX, centerY - 95, 400, 170, 0xFFFFFF).setScrollFactor(0);
  textBox.setOrigin(0.5);

  // Array of introduction messages for the question
  const messageOptions = [
    "You discover a book with a knight riding bravely on its cover. 'Don Quixote' by Miguel de Cervantes promises adventures filled with dreams and reality.",
    "Among the shelves, you find a hefty book titled 'War & Peace' by Leo Tolstoy. It beckons with stories of bravery and life in distant Russia.",
    "A bright blue book catches your eye. It's 'Ulysses' by James Joyce, promising a unique adventure through the streets of Dublin.",
    "A collection called 'In Search of Lost Time' by Marcel Proust sits elegantly, ready to take you on a journey through memories and time.",
    "You spot an old book showing a ship on stormy seas. 'The Odyssey' by Homer invites you to experience an epic ancient adventure.",
    "Moby Dick' by Herman Melville, with its striking whale on the cover, hints at a thrilling chase across the seas.",
    "You find 'The Divine Comedy' by Dante Alighieri, its mystical cover suggesting a journey through fantastical realms beyond the world.",
    "Tucked away is 'Hamlet' by William Shakespeare, featuring a thoughtful prince. It promises a tale of mystery and finding one's way.",
    "'One Hundred Years of Solitude' by Gabriel Garcia Marquez shows a mysterious house on its cover, leading you into a story of family and enchantment.",
    "In a quiet nook, you find 'The Brothers Karamazov' by Fyodor Dostoevsky. Its snowy scene suggests a tale of deep thoughts and family bonds.",
    "A slender volume catches your eye. 'Madame Bovary' by Gustave Flaubert hints at a tale of desire and dreams clashing with the stark reality of provincial life.",
    "The glamorous cover of 'The Great Gatsby' by F. Scott Fitzgerald promises a journey into the lavish, yet hollow world of the Jazz Age.",
    "You find a well-loved book titled 'Pride and Prejudice' by Jane Austen, suggesting a witty tale of manners, marriage, and misunderstanding.",
    "A solitary figure on the cover of 'The Catcher in the Rye' by J.D. Salinger beckons you into a story of teenage angst and the search for authenticity.",
    "The stark, Russian winter on the cover of 'Crime and Punishment' by Fyodor Dostoevsky suggests a deep dive into guilt, redemption, and moral dilemma.",
    "An intriguing book titled 'The Sound and the Fury' by William Faulkner awaits, its cover promising a complex journey through a Southern family's decay.",
    "You discover 'To Kill a Mockingbird' by Harper Lee, its cover hinting at a tale of innocence, injustice, and growing up in the Deep South.",
    "The elegant cover of 'Anna Karenina' by Leo Tolstoy suggests a dramatic tale of love, society, and self-discovery in imperial Russia.",
    "'The Adventures of Huckleberry Finn' by Mark Twain sits invitingly, promising a rollicking adventure down the Mississippi River.",
    "A whimsical illustration on 'Alice's Adventures in Wonderland' by Lewis Carroll hints at the surreal and curious journey awaiting within.",
    "The moody, windswept moors on 'Wuthering Heights' by Emily Bronte promise a tale of passionate love and haunting revenge.",
    "An ancient helmet on 'The Iliad' by Homer speaks of epic battles, heroes, and the tragic consequences of rage and honor.",
    "The enigmatic smile on the cover of 'Lolita' by Vladimir Nabokov hints at the controversial and captivating narrative within.",
    "'Middlemarch' by George Eliot presents a detailed panorama of provincial life, with its cover suggesting the interweaving fates of its characters.",
    "You find 'The Trial' by Franz Kafka, its ominous cover suggesting a surreal journey into the nightmarish bureaucracy and existential angst.",
    "The cover of 'Heart of Darkness' by Joseph Conrad depicts a river winding into darkness, symbolizing a journey into the unknown and the human psyche.",
    "A stark, Dust Bowl landscape on 'The Grapes of Wrath' by John Steinbeck sets the stage for a powerful tale of struggle and survival.",
    "You pick up '1984' by George Orwell, its cover foreboding a dark, dystopian world where freedom and truth are subverted.",
    "The sun setting behind a bullfighter on 'The Sun Also Rises' by Ernest Hemingway suggests a tale of the Lost Generation's disillusionment and quest.",
    "You're drawn to 'Gulliver's Travels' by Jonathan Swift, where the cover promises a satirical adventure to fantastical lands and societies.",
    "The eerie, gothic cover of 'Frankenstein' by Mary Shelley beckons with the promise of a chilling tale of ambition and monstrosity.",
    "You find 'Jane Eyre' by Charlotte Bronte, its cover depicting a solitary woman, hinting at a story of resilience and self-discovery.",
    "An ornate, ancient cover encases 'The Tale of Genji' by Murasaki Shikibu, promising an exquisite journey through courtly life in medieval Japan.",
    "The colorful, medieval scenes on 'The Canterbury Tales' by Geoffrey Chaucer suggest a diverse collection of stories full of humor and insight.",
    "You discover 'Beloved' by Toni Morrison, its cover hauntingly suggesting a tale of love, trauma, and the scars of history.",
    "A simple yet profound cover on 'Mrs. Dalloway' by Virginia Woolf hints at a day's exploration of life's beauty and underlying darkness.",
    "The stark cover of 'The Stranger' by Albert Camus suggests an existential journey into the absurdity of life and the inevitability of fate.",
    "You come across 'Catch-22' by Joseph Heller, its cover suggesting a satirical and surreal take on the madness of war.",
    "The intricate cover of 'The Magic Mountain' by Thomas Mann hints at a deep, reflective tale set in a Swiss sanatorium.",
    "You're intrigued by 'The Portrait of a Lady' by Henry James, its cover promising a tale of freedom and fate in a changing world.",
    "An inviting cover on 'A Passage to India' by E.M. Forster hints at a story exploring the complex realities of colonial India.",
    "'Invisible Man' by Ralph Ellison stands out with its cover depicting a man's silhouette, promising a profound exploration of identity and society.",
    "The bold cover of 'Things Fall Apart' by Chinua Achebe suggests a powerful tale of change and resistance in pre-colonial Africa.",
    "You find 'To the Lighthouse' by Virginia Woolf, its cover portraying a distant beacon, suggesting a journey through family, time, and art.",
    "The mysterious mansion on 'Rebecca' by Daphne du Maurier promises a tale filled with suspense and haunting memories.",
    "You pick up 'On the Road' by Jack Kerouac, its cover suggesting a freewheeling adventure across America and into the depths of the human spirit.",
    "The sweeping landscape on 'Gone with the Wind' by Margaret Mitchell sets the stage for a dramatic tale of love and change in the South.",
    "You're drawn to 'The Old Man and the Sea' by Ernest Hemingway, its cover depicting a solitary fisherman, hinting at a story of perseverance and struggle.",
    "The ornate cover of 'The Count of Monte Cristo' by Alexandre Dumas promises a thrilling tale of betrayal, adventure, and ultimate revenge.",
    "'A Tale of Two Cities' by Charles Dickens, with its stark depiction of London and Paris, suggests a profound narrative of love, sacrifice, and revolution.",
];

  // Create and type out the message text
  const messageText = scene.add.text(centerX - 190, centerY - 172, '', {
    fontSize: 'bold 19px',
    fill: '#000000',
    wordWrap: { width: 390, useAdvancedWrap: true },
    lineSpacing: 10,
  }).setScrollFactor(0);

  typeText(scene, messageText, messageOptions[Math.floor(Math.random() * messageOptions.length)], 0, 0, () => {questionGenerator()}, 2000);

  // Continue from the questionGenerator function
  const questionGenerator = () => {
    messageText.destroy();
    textBox.disableInteractive();
    let chestOptions = '';
    let currentLevelArray = gameState.level - 1;

    // Determine the appropriate set of questions based on the current level
    if (questionsChestsPagesActive[currentLevelArray].length > 0) {
      gameState.randomIndex = Math.floor(Math.random() * questionsChestsPagesActive[currentLevelArray].length);
      chestOptions = questionsChestsPagesActive[currentLevelArray][gameState.randomIndex];
    } else {
      currentLevelArray -= 1;
      gameState.randomIndex = Math.floor(Math.random() * questionsChestsPagesActive[currentLevelArray].length);
      chestOptions = questionsChestsPagesActive[currentLevelArray][gameState.randomIndex];
    }

    // Generate each option
    for (let i = 0; i < 3; i++) {
      let option = chestOptions.options[i];
      let question = chestOptions.question;
      let answer = option.answer; 

      const messageText = scene.add.text(centerX - 190, centerY - 172, '', {
        fontSize: 'bold 16px',
        fill: '#000000',
        wordWrap: { width: 390, useAdvancedWrap: true },
        lineSpacing: 10,
      }).setScrollFactor(0);

      // Create the question text
      const questionText = scene.add.text(centerX - 190, centerY - 170, '', {
        fontSize: 'bold 19px', 
        fill: '#000000',
        wordWrap: { width: 390, useAdvancedWrap: true },
        lineSpacing: 10,
      }).setScrollFactor(0);
      typeText(scene, questionText, question);

      // Create the option boxes and text
      const optionBoxX = centerX;
      const optionBoxY = centerY + 32 + i * 60; // Adjust the Y position for each option
      const optionBox = scene.add.rectangle(optionBoxX, optionBoxY, 400, 55, 0xFFFFFF).setScrollFactor(0);
      optionBox.setStrokeStyle(1, 0x000000, 1);
  
      const optionText = scene.add.text(optionBoxX - 190, optionBoxY - 20, '', {
        fontSize: 'bold 15px', 
        fill: '#000000',
        wordWrap: { width: 380, useAdvancedWrap: true }
      }).setScrollFactor(0);

      typeText(scene, optionText, option.option, 2000 + question.length * 50, 0,() => {optionBox.setInteractive();});

      destroyArray.push({questionText, optionBox, optionText, messageText}); 

      let optionBoxActive = true; 

      // Interactivity for option box: highlight on hover
      optionBox.on('pointerover', () => {
        if (optionBoxActive) {
          optionBox.setStrokeStyle(5, 0x000000, 1);
        }
      });

      // Revert style when the pointer is no longer over the option box
      optionBox.on('pointerout', () => {
        if (optionBoxActive) {
          optionBox.setStrokeStyle(1, 0x000000, 1);
        }
      });

      // The answerResult function determines the outcome of the player's choice.
      const answerResult = (input) => {
        // Check if the player's input indicates a correct answer (1).
        if (input === 1) {
          // If correct:
          // Add key 
          gameState.keys += 1;
          gameState.totalKeys += 1; 
          gameState.chestBoxActive -= 1;
          // Remove the question, option boxes, and text from the screen.
          textBox.destroy();
          textBoxb.destroy();
          destroyArray.forEach(item => {
            item.questionText.destroy();
            item.optionBox.destroy();
            item.optionText.destroy();
            item.messageText.destroy();
          });
          // Clear the array holding the elements to ensure they don't linger in memory.
          destroyArray.length = 0;

          // Convert the player's world coordinates to tile coordinates
          const playerTileX = scene.groundLayer.worldToTileX(scene.player.sprite.x);
          const playerTileY = scene.groundLayer.worldToTileY(scene.player.sprite.y);
          // Retrieve the room object where the player is currently located
          const playerRoom = scene.dungeon.getRoomAt(playerTileX, playerTileY);
          // Access the center coordinates of the player's room
          const roomCenterX = playerRoom.centerX;
          const roomCenterY = playerRoom.centerY;

          const chestClosed = scene.add.image(roomCenterX * 64 + 32, roomCenterY * 64 + 32, chestopen);
          chestClosed.setDepth(0);
      
          // Reset the score, resume the physics and reset the camera zoom to indicate the game is continuing.
          gameState.displayKeys.setText(`You need ${gameState.keysNeeded} books to continue. You have: ${gameState.keys} .\nCurrent level: ${gameState.level}`)
          scene.physics.world.resume();
          scene.cameras.main.zoom = 1;

        } else {
          // If incorrect:
          // Remove the question, option boxes, and text as done for the correct case.
          gameState.chestBoxActive -= 1;
          gameState.speed += 100;
          textBox.destroy();
          textBoxb.destroy();
          destroyArray.forEach(item => {
            item.questionText.destroy();
            item.optionBox.destroy();
            item.optionText.destroy();
            item.messageText.destroy();
          });

          // Convert the player's world coordinates to tile coordinates
          const playerTileX = scene.groundLayer.worldToTileX(scene.player.sprite.x);
          const playerTileY = scene.groundLayer.worldToTileY(scene.player.sprite.y);
          // Retrieve the room object where the player is currently located
          const playerRoom = scene.dungeon.getRoomAt(playerTileX, playerTileY);
          // Access the center coordinates of the player's room
          const roomCenterX = playerRoom.centerX;
          const roomCenterY = playerRoom.centerY;

          const chestClosed = scene.add.image(roomCenterX * 64 + 32, roomCenterY * 64 + 32, chestopen);
          chestClosed.setDepth(0);
          
          scene.physics.world.resume();
          scene.cameras.main.zoom = 1;
        }
      };


      // Event listener for when the player selects an option.
      optionBox.on('pointerup', () => {
        // Check if the selected option is correct.
        if (answer === 1) {
          // Correct answer logic:
          // Change the style of the option box to indicate correctness.
          optionBoxActive = false;
          optionBox.setStrokeStyle(5, 0x228B22, 1); 
          // Disable interaction for all option boxes.
          destroyArray.forEach(item => {
            item.optionBox.disableInteractive();
          });

          // Remove the answered question from the active question pool.
          questionsChestsPagesActive[currentLevelArray].splice(gameState.randomIndex, 1);

          // If the current level's questions are depleted, reset for new round.
          if (currentLevelArray === 0 && questionsChestsPagesActive[currentLevelArray].length === 0) {
            resetPages();
            currentLevelArray = gameState.level - 1;
          }

          // Generate a response message for a correct answer.
          const responseOptions = [
            `When you choose '${option.option}', the book disappears magically, and a soft whisper reassures you, 'you are on the right path, my child.'`,
            `After you say '${option.option}' quietly, the book teleports to another dimension. You feel like you did well.`,
            `In response to '${option.option}', the air is filled with ancient knowledge, and the ground beneath you seems to pulse with unseen energy.`,
            `As you say '${option.option}', the book turns into a bright light. A celestial guide appears, nodding in approval of your choice.`,
            `Choosing '${option.option}' makes the book dissolve into glowing particles that dance around you, revealing glimpses of hidden truths and untold secrets.`,
            `After picking '${option.option}', the book disappears like magic. You hear a soft voice saying, 'You're on the right path, my friend.'`,
            `After you say '${option.option}' quietly, the book goes to another dimension. You feel good about your choice.`,
            `Choosing '${option.option}', the air feels wise, and the ground seems to throb with hidden energy.`,
            `Deciding on '${option.option}', the book turns into glowing specks. They dance around, showing you glimpses of secrets and truths.`,
            `Upon uttering '${option.option}', the book's pages flutter wildly before vanishing, while you hear whispers about ancient secrets.`,
            `With the choice of '${option.option}', the book emits a harmonious melody. Each note seems to echo with wisdom and understanding.`,
            `As '${option.option}' leaves your lips, the book transforms into a radiant orb of light, guiding you towards an unseen, mystical path.`,
            `Selecting '${option.option}' causes the book to burst into thousands of pieces, each one carrying a fragment of knowledge.`,
            `The moment you decide on '${option.option}', the book explodes into a cloud of golden letters, swirling around you with an aura of ancient wisdom.`,
            `By opting for '${option.option}', the book's cover glows and the words form a celestial map in the air, pointing to a destiny yet unknown.`,
            `Choosing '${option.option}' causes the book to shrink and transform into a glowing key, hinting at unlocking mysteries yet to be discovered.`,
            `With the utterance of '${option.option}', the book releases a soft glow, and shadows cast upon the walls begin to tell tales of old, forgotten lore.`
          ];
          
          // Destroy the text of the previous question.
          destroyArray.forEach(item => {
            item.questionText.destroy();
          });

          // Display the correct answer response and trigger the answer result after a delay.
          typeText(scene, messageText, responseOptions[Math.floor(Math.random() * responseOptions.length)], 0, 0, () => { answerResult(1); }, 2000);
          
        } else {
          // Incorrect answer logic:
          // Change the style of the option box to indicate incorrectness.
          optionBoxActive = false; 
          optionBox.setStrokeStyle(5, 0xff0000, 1);
          // Disable interaction for all option boxes.
          destroyArray.forEach(item => {
            item.optionBox.disableInteractive();
          });

          // Generate a response message for an incorrect answer.
          const responseOptions = [
            `When you choose '${option.option}', the book vanishes abruptly, leaving you with a sense of uncertainty. There's no reassurance, only a lingering doubt.`,
            `After you mutter '${option.option}' under your breath, the book abruptly disappears to another dimension. You can't shake the feeling that something went wrong.`,
            `As you utter '${option.option}', the book transforms into a harsh glare of light, a disapproving figure appears, shaking its head at your choice.`,
            `Choosing '${option.option}' results in the book dissolving into ominous shadows. These shadows swirl menacingly around you, hinting at dark and foreboding secrets.`,
            `After selecting '${option.option}', the book disappears abruptly, leaving you in silence. There's no comforting voice; instead, a sense of isolation creeps in.`,
            `After you speak '${option.option}' quietly, the book abruptly shifts to another dimension. Doubt clouds your mind, and you question if your choice was truly wise.`,
            `Deciding on '${option.option}', the air feels oppressive, and the ground throbs with an ominous energy, making you question the consequences of your decision.`,
            `As you pick '${option.option}', the book disintegrates into eerie particles. They swarm around you, whispering unsettling truths that leave you feeling uneasy.`,
            `With the choice of '${option.option}', the book's ink turns blood red, then vanishes. A cold wind blows, leaving you with an unsettling chill and a growing sense of dread.`,
            `Upon saying '${option.option}', the book's text scrambles chaotically before disappearing. The air grows heavy, filling you with a deep unease about what may come next.`,
            `After declaring '${option.option}', the book's pages crumble to dust. The room darkens momentarily, engulfing you in a momentary, but profound, sense of loss.`,
            `Choosing '${option.option}' causes the book to emit a low, dissonant hum before it fades away. A shadow lingers, casting doubt on the wisdom of your choice.`,
            `By opting for '${option.option}', the book's pages turn blank and then vanish. The silence that follows feels heavy, loaded with unspoken warnings and regrets.`,
            `When '${option.option}' is chosen, the book shudders and disappears. You're left in an unsettling quiet, pondering the eerie absence it has left behind.`,
            `As '${option.option}' is spoken, the book flickers like a dying flame and then is gone. A sense of foreboding lingers in the air, leaving you to wonder what you've unleashed.`,
            `Selecting '${option.option}' makes the book's cover warp and then fade. The unsettling transformation leaves you questioning the nature of your decision.`
        ];
        
          // Destroy the text of the previous question.
          destroyArray.forEach(item => {
            item.questionText.destroy();
          });

          // Display the incorrect answer response and trigger the answer result after a delay.
          typeText(scene, messageText, responseOptions[Math.floor(Math.random() * responseOptions.length)], 0, 0, () => { answerResult(0); }, 2000);
        }
      });
    }  
  }

  chestBox.destroy();
}

export { questionsChestsPages, questionChestFunction };
