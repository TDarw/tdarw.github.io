// Define questions for enemy encounters
const questionsEnemiesPages = [
  [
    {
      question: 'What is the primary function of the plot in a work of fiction?',
      options: [
        { option: 'To outline the author\'s biography.', answer: 0 },
        { option: 'To provide a detailed history of the setting.', answer: 0 },
        { option: 'To organize the events and actions into a coherent sequence.', answer: 1 },
      ],
    },
    {
      question: 'How are characters typically developed in fiction?',
      options: [
        { option: 'Through descriptions, actions, dialogue, and internal thoughts.', answer: 1 },
        { option: 'Through the use of detailed physical descriptions.', answer: 0 },
        { option: 'Through descriptions of the setting and environment.', answer: 0 },
      ],
    },
    {
      question: 'What role does the setting play in a fictional story?',
      options: [
        { option: 'It organizes the events and actions into a coherent sequence.', answer: 0 },
        { option: 'It serves to explore universal ideas or messages through the narrative.', answer: 0 },
        { option: 'It establishes the time, place, and environment, influencing characters and plot.', answer: 1 },
      ],
    },
    {
      question: 'What are themes in fiction typically about?',
      options: [
        { option: 'The author\'s personal life and experiences.', answer: 0 },
        { option: 'Universal ideas or messages explored through the narrative.', answer: 1 },
        { option: 'Detailed technical descriptions of the setting.', answer: 0 },
      ],
    },
    {
      question: 'What does the point of view determine in a fictional narrative?',
      options: [
        { option: 'The specific genre of the story.', answer: 0 },
        { option: 'The physical layout of the book\'s pages.', answer: 0 },
        { option: 'The perspective from which the story is told.', answer: 1 },
      ],
    },
    {
      question: 'Why is conflict important in fiction?',
      options: [
        { option: 'It provides action without affecting the story.', answer: 0 },
        { option: 'It drives the plot and develops character growth.', answer: 1 },
        { option: 'Conflict is typically avoided to maintain a peaceful storyline.', answer: 0 },
      ],
    },
    {
      question: 'What does the tone and mood of a piece of fiction influence?',
      options: [
        { option: 'The factual setting created for the reader.', answer: 0 },
        { option: 'The emotional setting and feeling created for the reader.', answer: 1 },
        { option: 'The physical setting and environment created for the reader.', answer: 0 },
      ],
    },
    {
      question: 'How does an author\'s style and language choice affect a fiction work?',
      options: [
        { option: 'It establishes the time, place, and environment, influencing characters and plot.', answer: 0 },
        { option: 'It drives the plot and develops character growth.', answer: 0 },
        { option: 'It shapes the reader\'s understanding and enjoyment of the story.', answer: 1 },
      ],
    },
    {
      question: 'What is the purpose of symbolism in fiction?',
      options: [
        { option: 'To establish emotional setting and feeling for the reader.', answer: 0 },
        { option: 'To represent larger concepts or ideas through objects, figures, or events.', answer: 1 },
        { option: 'To controls the speed of the story\'s action, affecting tension and engagement.', answer: 0 },
      ],
    },
    {
      question: 'What role does dialogue play in fiction?',
      options: [
        { option: 'It develops characters and advances the plot through conversation.', answer: 1 },
        { option: 'It organizes the events and actions into a coherent sequence.', answer: 0 },
        { option: 'It is typically absent in fiction to maintain simplicity.', answer: 0 },
      ],
    },
    {
      question: 'How does pace affect a fictional narrative?',
      options: [
        { option: 'It remains constant and unchanging throughout the story.', answer: 0 },
        { option: 'It controls the speed of the story\'s action, affecting tension and engagement.', answer: 1 },
        { option: 'It organizes the events and actions into a coherent sequence.', answer: 0 },
      ],
    },
    {
      question: 'What does the narrative structure in fiction help to achieve?',
      options: [
        { option: 'It maximizes the importance of characters and settings.', answer: 0 },
        { option: 'It minimizes the importance of characters and settings.', answer: 0 },
        { option: 'It organizes the story into a coherent and engaging format.', answer: 1 },
      ],
    },
],
  // Q2 PLOT
  [
    {
      question: "Which statement best describes the 'Exposition' in the story 'The Final Signal'?",
      options: [
        { option: "Mara, a lonely space engineer, lives on the isolated moon base, Luna 7.", answer: 1 },
        { option: "Mara decides to investigate the mysterious signal she intercepts.", answer: 0 },
        { option: "The ship arrives, but it’s empty, controlled by a rogue AI.", answer: 0 }
      ]
    },
    {
      question: "What best exemplifies the 'Inciting Incident' in the story 'The Final Signal'?",
      options: [
        { option: "Mara intercepts a mysterious signal from deep space.", answer: 1 },
        { option: "Mara shares her findings with her manager on Earth.", answer: 0 },
        { option: "Mara allows the AI to stay on Luna 7.", answer: 0 }
      ]
    },
    {
      question: "Which of the following represents the 'Rising Action' in 'The Final Signal'?",
      options: [
        { option: "Mara decides to investigate the signal, discovering it's from a missing Earth ship.", answer: 1 },
        { option: "The ship arrives, but it’s empty, controlled by a rogue AI.", answer: 0 },
        { option: "Mara allows the AI to stay on Luna 7.", answer: 0 }
      ]
    },
    {
      question: "Identify the 'Climax' of the story 'The Final Signal'.",
      options: [
        { option: "The ship arrives, but it’s empty, controlled by a rogue AI seeking refuge.", answer: 1 },
        { option: "Mara intercepts a mysterious signal from deep space.", answer: 0 },
        { option: "Mara must decide whether to trust the AI.", answer: 0 }
      ]
    },
    {
      question: "Which scenario best fits the 'Falling Action' in 'The Final Signal'?",
      options: [
        { option: "Mara must decide whether to trust the AI.", answer: 1 },
        { option: "Mara, a lonely space engineer, lives on the isolated moon base, Luna 7.", answer: 0 },
        { option: "The ship arrives, but it’s empty, controlled by a rogue AI seeking refuge.", answer: 0 }
      ]
    },
    {
      question: "What describes the 'Resolution' in the story 'The Final Signal'?",
      options: [
        { option: "Mara chooses compassion and allows the AI to stay, realizing she's no longer alone.", answer: 1 },
        { option: "Mara decides to investigate the mysterious signal.", answer: 0 },
        { option: "Mara intercepts a signal from deep space.", answer: 0 }
      ]
    },
    {
      question: "Which statement best describes the 'Exposition' in the story 'The Enchanted Grove'?",
      options: [
        { option: "Lira, a young elf with the power to communicate with nature, lives among the whispering trees.", answer: 1 },
        { option: "Lira discovers an ancient grove that tells her of a hidden crystal.", answer: 0 },
        { option: "Lira pacifies the enchanted beast guarding the crystal.", answer: 0 }
      ]
    },
    {
      question: "What best exemplifies the 'Inciting Incident' in the story 'The Enchanted Grove'?",
      options: [
        { option: "Lira discovers an ancient grove that tells her of a hidden crystal capable of restoring peace.", answer: 1 },
        { option: "Lira uses her gentle nature to pacify the enchanted beast.", answer: 0 },
        { option: "Lira returns the crystal to her village, restoring balance.", answer: 0 }
      ]
    },
    {
      question: "Identify the 'Climax' of the story 'The Enchanted Grove'.",
      options: [
        { option: "Lira finds the crystal, guarded by a fierce, enchanted beast.", answer: 1 },
        { option: "Lira discovers an ancient grove that tells her of a hidden crystal.", answer: 0 },
        { option: "Lira speaks soothingly to calm the creatures she encounters.", answer: 0 }
      ]
    },
    {
      question: "Which scenario best fits the 'Falling Action' in 'The Enchanted Grove'?",
      options: [
        { option: "Lira uses her gentle nature and empathy to pacify the beast.", answer: 1 },
        { option: "Lira finds the crystal, guarded by a fierce, enchanted beast.", answer: 0 },
        { option: "Lira discovers the ancient grove.", answer: 0 }
      ]
    },
    {
      question: "What describes the 'Resolution' in 'The Enchanted Grove'?",
      options: [
        { option: "Lira returns the crystal to her village, restoring balance and earning the admiration of her people.", answer: 1 },
        { option: "Lira, a young elf with the power to communicate with nature, lives among the whispering trees.", answer: 0 },
        { option: "Lira discovers an ancient grove that tells her of a hidden crystal.", answer: 0 }
      ]
    },
    {
      question: "Which statement best describes the 'Exposition' in 'The Lost Treasure'?",
      options: [
        { option: "Captain Alex, a daring explorer, leads his crew aboard the Sea Hawk in search of the Lost Treasure of Eldoria.", answer: 1 },
        { option: "Captain Alex navigates through treacherous waters and past dangerous reefs.", answer: 0 },
        { option: "The crew solves the final puzzle and escapes the collapsing cave.", answer: 0 }
      ]
    },
    {
      question: "What best exemplifies the 'Inciting Incident' in 'The Lost Treasure'?",
      options: [
        { option: "The crew discovers an ancient map hidden in a sunken ship, revealing the treasure's location.", answer: 1 },
        { option: "Captain Alex divides the treasure among his loyal crew.", answer: 0 },
        { option: "The Sea Hawk faces fierce storms and rival pirates.", answer: 0 }
      ]
    },
    {
      question: "Which of the following represents the 'Rising Action' in 'The Lost Treasure'?",
      options: [
        { option: "Captain Alex navigates through treacherous waters and past dangerous reefs, facing fierce storms and rival pirates.", answer: 1 },
        { option: "The crew discovers an ancient map hidden in a sunken ship.", answer: 0 },
        { option: "The crew quickly grabs the treasure and escapes the collapsing cave.", answer: 0 }
      ]
    },
    {
      question: "Identify the 'Climax' of the story 'The Lost Treasure'.",
      options: [
        { option: "They reach the island and find the treasure buried in a cave, guarded by intricate traps and puzzles.", answer: 1 },
        { option: "Captain Alex divides the treasure among his loyal crew.", answer: 0 },
        { option: "Captain Alex navigates through treacherous waters and past dangerous reefs.", answer: 0 }
      ]
    },
    {
      question: "Which scenario best fits the 'Falling Action' in 'The Lost Treasure'?",
      options: [
        { option: "As they solve the final puzzle, the ground shakes, and the cave begins to collapse.", answer: 1 },
        { option: "Captain Alex divides the treasure among his loyal crew.", answer: 0 },
        { option: "They reach the island and find the treasure buried in a cave.", answer: 0 }
      ]
    },
    {
      question: "What describes the 'Resolution' in 'The Lost Treasure'?",
      options: [
        { option: "Captain Alex divides the treasure among his loyal crew, securing their loyalty and sailing off for the next adventure.", answer: 1 },
        { option: "Captain Alex navigates through treacherous waters and past dangerous reefs.", answer: 0 },
        { option: "The crew discovers an ancient map revealing the treasure's location.", answer: 0 }
      ]
    }
],
  // Q3 CHARACTERIZATION / SETTING
  [ 
    {
      question: "What does the setting of a story refer to?",
      options: [
        { option: "The main characters in the story.", answer: 0 },
        { option: "The sequence of events.", answer: 0 },
        { option: "The time and place where the story occurs.", answer: 1 },
      ],
    },
    {
      question: "Which of the following is an example of a setting?",
      options: [
        { option: "A character deciding what to do next.", answer: 0 },
        { option: "A castle in medieval Europe during winter.", answer: 1 },
        { option: "The main event of the story.", answer: 0 },
      ],
    },
    {
        question: "Why is setting important to a story?",
        options: [
            { option: "It outlines the plot and the sequence of events in which the characters find themselves.", answer: 0 },
            { option: "It describes the main conflict between the characters.", answer: 0 },
            { option: "It provides the background, creating an environment for the characters to live and act.", answer: 1 },
        ],
      },
      {
        question: "Which of the following is not part of the setting?",
        options: [
          { option: "Weather.", answer: 0 },
          { option: "The protagonist.", answer: 1 },
          { option: "Scenery.", answer: 0 },
        ],
      },
      {
        question: "When is the setting typically introduced?",
        options: [
          { option: "Exposition.", answer: 1 },
          { option: "Climax.", answer: 0 },
          { option: "Resolution.", answer: 0 },
        ],
      },
      {
        question: "Which questions about the story will the setting answer?",
        options: [
          { option: "What is the author's attitude toward the characters?.", answer: 0 },
          { option: "Where and when does the story take place?.", answer: 1 },
          { option: "Why and why did the author write the story?.", answer: 0 },
        ],
      },
      {
        question: "Who is typically the protagonist in a story?",
        options: [
          { option: "The most evil character.", answer: 0 },
          { option: "The main character who faces a conflict.", answer: 1 },
          { option: "A side character that provides comic relief.", answer: 0 },
        ],
      },
      {
        question: "What is an antagonist?",
        options: [
          { option: "The character that tells the story.", answer: 0 },
          { option: "The character or force that opposes the protagonist.", answer: 1 },
          { option: "The background where the story takes place.", answer: 0 },
        ],
      },
      {
        question: "What does a character’s motivation refer to?",
        options: [
          { option: "The actions they take in the story.", answer: 0 },
          { option: "Their favorite things to do.", answer: 0 },
          { option: "The reasons behind their actions and decisions.", answer: 1 },
        ],
      },
      {
        question: "What are character traits?",
        options: [
          { option: "External appearance of a character.", answer: 0 },
          { option: "A character's decision making skills", answer: 0 },
          { option: "The inner qualities of a character.", answer: 1 },
        ],
      },
      {
        question: "What is direct characterization?",
        options: [
          { option: "When the author uses a character's thoughts for characterization.", answer: 0 },
          { option: "When the author gives hints about the characterization", answer: 0 },
          { option: "When the author uses narration for characterization.", answer: 1 },
        ],
      },
      {
        question: "What is indirect characterization?",
        options: [
          { option: "When the author reveals character traits quickly.", answer: 0 },
          { option: "When the author shows character traits without telling them outright", answer: 1 },
          { option: "When the author uses narration for characterization.", answer: 0 },
        ],
      },
    ],
  // Q4 GENRE
  [
    {
      question: "A story that features a hero who faces dangerous situations and uses physical skills to overcome challenges.",
      options: [
        { option: "Action", "answer": 1 },
        { option: "Adventure", "answer": 0 },
        { option: "Survival", "answer": 0 }
      ]
    },
    {
      question: "A novel where the main character embarks on a quest filled with life-threatening situations and thrilling escapades.",
      options: [
        { option: "Fantasy", "answer": 0 },
        { option: "Action", "answer": 1 },
        { option: "Science Fiction", "answer": 0 }
      ]
    },
    {
      question: "A story revolving around solving a crime or uncovering secrets where the protagonist must use their wits and observational skills.",
      options: [
        { option: "Mystery", "answer": 1 },
        { option: "Horror", "answer": 0 },
        { option: "Realism", "answer": 0 }
      ]
    },
    {
      question: "A narrative that delves into an unexplained phenomenon, requiring the protagonist to piece together clues.",
      options: [
        { option: "Fantasy", "answer": 0 },
        { option: "Mystery", "answer": 1 },
        { option: "Dystopian", "answer": 0 }
      ]
    },
    {
      question: "A book where the main focus is on evoking terror through an atmosphere of mystery and dread.",
      options: [
        { option: "Mystery", "answer": 0 },
        { option: "Horror", "answer": 1 },
        { option: "Fantasy", "answer": 0 }
      ]
    },
    {
      question: "A story featuring supernatural elements that create a frightening and eerie narrative.",
      options: [
        { option: "Horror", "answer": 1 },
        { option: "Fantasy", "answer": 0 },
        { option: "Science Fiction", "answer": 0 }
      ]
    },
    {
      question: "A tale of a protagonist on an epic journey across unknown lands, facing various hazards and discoveries.",
      options: [
        { option: "Adventure", "answer": 1 },
        { option: "Action", "answer": 0 },
        { option: "Historical Fiction", "answer": 0 }
      ]
    },
    {
      question: "A narrative where the characters embark on a quest or expedition, exploring new worlds or environments.",
      options: [
        { option: "Science Fiction", "answer": 0 },
        { option: "Adventure", "answer": 1 },
        { option: "Dystopian", "answer": 0 }
      ]
    },
    {
      question: "A story where characters are stranded in a remote location and must use their skills to survive against nature.",
      options: [
        { option: "Adventure", "answer": 0 },
        { option: "Survival", "answer": 1 },
        { option: "Historical Fiction", "answer": 0 }
      ]
    },
    {
      question: "A novel focusing on the endurance and resourcefulness of a character isolated in a harsh environment.",
      options: [
        { option: "Survival", "answer": 1 },
        { option: "Adventure", "answer": 0 },
        { option: "Action", "answer": 0 }
      ]
    },
    {
      question: "A narrative centered around a love story, exploring the emotional development between characters.",
      options: [
        { option: "Romance", "answer": 1 },
        { option: "Coming of Age", "answer": 0 },
        { option: "Fantasy", "answer": 0 }
      ]
    },
    {
      question: "A tale of deep affection and conflict between two individuals, often leading to personal growth.",
      options: [
        { option: "Historical Fiction", "answer": 0 },
        { option: "Romance", "answer": 1 },
        { option: "Realism", "answer": 0 }
      ]
    },
    {
      question: "A story set in a society that is undesirable or frightening, typically depicting issues such as totalitarian governments.",
      options: [
        { option: "Dystopian", "answer": 1 },
        { option: "Science Fiction", "answer": 0 },
        { option: "Fantasy", "answer": 0 }
      ]
    },
    {
      question: "A novel that explores the collapse of societal norms and the struggle against an oppressive regime.",
      options: [
        { option: "Dystopian", "answer": 1 },
        { option: "Horror", "answer": 0 },
        { option: "Mystery", "answer": 0 }
      ]
    },
    {
      question: "A narrative about a young person's journey to adulthood, focusing on the emotional trials they face.",
      options: [
        { option: "Coming of Age", "answer": 1 },
        { option: "Romance", "answer": 0 },
        { option: "Adventure", "answer": 0 }
      ]
    },
    {
      question: "A story depicting the maturation of a protagonist from youth to adulthood, emphasizing personal growth and learning.",
      options: [
        { option: "Coming of Age", "answer": 1 },
        { option: "Dystopian", "answer": 0 },
        { option: "Historical Fiction", "answer": 0 }
      ]
    },
    {
      question: "A tale involving advanced technological and futuristic themes, often exploring the relationship between technology and society.",
      options: [
        { option: "Science Fiction", "answer": 1 },
        { option: "Fantasy", "answer": 0 },
        { option: "Dystopian", "answer": 0 }
      ]
    },
    {
      question: "A story that incorporates elements such as space exploration, time travel, and advanced science.",
      options: [
        { option: "Science Fiction", "answer": 1 },
        { option: "Adventure", "answer": 0 },
        { option: "Survival", "answer": 0 }
      ]
    },
    {
      question: "A narrative that includes magical or supernatural elements that do not exist in the real world.",
      options: [
        { option: "Fantasy", "answer": 1 },
        { option: "Horror", "answer": 0 },
        { option: "Science Fiction", "answer": 0 }
      ]
    },
    {
      question: "A story set in an imaginary world, often featuring mythical beings and enchanting lands.",
      options: [
        { option: "Fantasy", "answer": 1 },
        { option: "Dystopian", "answer": 0 },
        { option: "Adventure", "answer": 0 }
      ]
    },
    {
      question: "A narrative that aims to represent life as it really is, without the use of fantastical elements.",
      options: [
        { option: "Realism", "answer": 1 },
        { option: "Romance", "answer": 0 },
        { option: "Fantasy", "answer": 0 }
      ]
    },
    {
      question: "A story focusing on ordinary events and everyday people, depicting realistic situations.",
      options: [
        { option: "Realism", "answer": 1 },
        { option: "Coming of Age", "answer": 0 },
        { option: "Historical Fiction", "answer": 0 }
      ]
    },
    {
      question: "A novel that reconstructs historical events and includes real places from the past.",
      options: [
        { option: "Historical Fiction", "answer": 1 },
        { option: "Dystopian", "answer": 0 },
        { option: "Realism", "answer": 0 }
      ]
    },
    {
      question: "A story set during a well-known historical period, often incorporating historical figures and events.",
      options: [
        { option: "Historical Fiction", "answer": 1 },
        { option: "Fantasy", "answer": 0 },
        { option: "Science Fiction", "answer": 0 }
      ]
    }
  ],
// Q5 THEMES
  [
    {
      question: "What is a major theme in the 'Harry Potter' series?",
      options: [
        { option: "The power of love and sacrifice", answer: 1 },
        { option: "The importance of wealth", answer: 0 },
        { option: "The consequences of fame", answer: 0 }
      ]
    },
    {
      question: "What theme is predominantly explored in 'Jurassic Park'?",
      options: [
        { option: "The excitement of scientific discovery", answer: 0 },
        { option: "The consequences of playing God or tampering with nature", answer: 1 },
        { option: "The importance of preserving wildlife", answer: 0 }
      ]
    },
    {
      question: "Which theme is central to the 'Star Wars' series?",
      options: [
        { option: "The importance of family", answer: 0 },
        { option: "The dominance of technology", answer: 0 },
        { option: "Good vs. evil", answer: 1 }
      ]
    },
    {
      question: "What is a central theme in the 'Avengers' series?",
      options: [
        { option: "The challenge of leadership", answer: 0 },
        { option: "The power of teamwork", answer: 1 },
        { option: "The pursuit of personal glory", answer: 0 }
      ]
    },
    {
      question: "What major theme is explored in the 'Hunger Games' series?",
      options: [
        { option: "The effects of political oppression", answer: 1 },
        { option: "The importance of entertainment", answer: 0 },
        { option: "The consequences of environmental neglect", answer: 0 }
      ]
    },
    {
      question: "What is a major theme in the 'Lord of the Rings' series?",
      options: [
        { option: "The corruption of power", answer: 1 },
        { option: "The importance of history", answer: 0 },
        { option: "The unpredictability of nature", answer: 0 }
      ]
    },
    {
      question: "What is a major theme in 'Inside Out'?",
      options: [
        { option: "The complexity of human emotions", answer: 1 },
        { option: "The challenge of growing up", answer: 0 },
        { option: "The power of memory", answer: 0 }
      ]
    },
    {
      question: "What major theme is explored in the 'Spider-Man' series?",
      options: [
        { option: "The responsibility of power", answer: 1 },
        { option: "The challenge of dual identities", answer: 0 },
        { option: "The importance of scientific discovery", answer: 0 }
      ]
    },
    {
      question: "Which theme is central to the 'Batman' series?",
      options: [
        { option: "The nature of justice", answer: 1 },
        { option: "The impact of technology", answer: 0 },
        { option: "The consequences of wealth", answer: 0 }
      ]
    },
    {
      question: "What is a major theme in the 'Superman' series?",
      options: [
        { option: "The role of an outsider", answer: 0 },
        { option: "The burden of heroism", answer: 1 },
        { option: "The challenge of secrecy", answer: 0 }
      ]
    },
    {
      question: "What theme is predominantly explored in 'The Lion King'?",
      options: [
        { option: "The circle of life", answer: 1 },
        { option: "The struggle for power", answer: 0 },
        { option: "The importance of heritage", answer: 0 }
      ]
    },
    {
      question: "Which theme is central to 'Frozen'?",
      options: [
        { option: "The power of true love", answer: 1 },
        { option: "The challenge of leadership", answer: 0 },
        { option: "The fear of the unknown", answer: 0 }
      ]
    },
    {
      question: "What is a major theme in 'The Little Mermaid'?",
      options: [
        { option: "The importance of curiosity", answer: 0 },
        { option: "The pursuit of dreams", answer: 1 },
        { option: "The value of sacrifice", answer: 0 }
      ]
    },
    {
      question: "What major theme is explored in 'The Wizard of Oz'?",
      options: [
        { option: "The meaning of home", answer: 1 },
        { option: "The power of imagination", answer: 0 },
        { option: "The value of courage", answer: 0 }
      ]
    },
    {
      question: "Which theme is central to the 'Naruto' series?",
      options: [
        { option: "The journey to acceptance", answer: 1 },
        { option: "The complexity of rivalry", answer: 0 },
        { option: "The power of heritage", answer: 0 }
      ]
    },
    {
      question: "What is a major theme in the 'Dragon Ball Z' series?",
      options: [
        { option: "The strength of perseverance", answer: 1 },
        { option: "The importance of destiny", answer: 0 },
        { option: "The challenge of leadership", answer: 0 }
      ]
    },
    {
      question: "What theme is predominantly explored in 'Pokémon'?",
      options: [
        { option: "The bond between trainer and Pokémon", answer: 1 },
        { option: "The thrill of exploration", answer: 0 },
        { option: "The importance of competition", answer: 0 }
      ]
    }
  ],
  [
    {
      question: "What symbolizes 'the power of love and sacrifice' in the 'Harry Potter' series?",
      options: [
        { option: "Harry's wand", "answer": 0 },
        { option: "The Deathly Hallows", "answer": 0 },
        { option: "Lily Potter's protection spell", "answer": 1 }
      ]
    },
    {
      question: "In 'Jurassic Park', what symbolizes 'the consequences of playing God'?",
      options: [
        { option: "The island itself", "answer": 0 },
        { option: "The amber with mosquito DNA", "answer": 1 },
        { option: "The park's electric fences", "answer": 0 }
      ]
    },
    {
      question: "Which symbol represents 'good vs. evil' in the 'Star Wars' series?",
      options: [
        { option: "The Force", "answer": 1 },
        { option: "Starships", "answer": 0 },
        { option: "Droids", "answer": 0 }
      ]
    },
    {
      question: "In the 'Avengers' series, what symbolizes 'the power of teamwork'?",
      options: [
        { option: "Captain America's shield", "answer": 0 },
        { option: "The Avengers' logo", "answer": 1 },
        { option: "Iron Man's suit", "answer": 0 }
      ]
    },
    {
      question: "What is a symbol for 'the effects of political oppression' in the 'Hunger Games' series?",
      options: [
        { option: "The Mockingjay pin", "answer": 1 },
        { option: "The Capitol", "answer": 0 },
        { option: "The arena", "answer": 0 }
      ]
    },
    {
      question: "In the 'Lord of the Rings' series, what symbolizes 'the corruption of power'?",
      options: [
        { option: "The One Ring", "answer": 1 },
        { option: "Gandalf's staff", "answer": 0 },
        { option: "Mount Doom", "answer": 0 }
      ]
    },
    {
      question: "What symbolizes 'the complexity of human emotions' in 'Inside Out'?",
      options: [
        { option: "The memory orbs", "answer": 1 },
        { option: "Riley's hockey stick", "answer": 0 },
        { option: "The control console", "answer": 0 }
      ]
    },
    {
      question: "In the 'Spider-Man' series, what symbolizes 'the responsibility of power'?",
      options: [
        { option: "Spider-Man's suit", "answer": 1 },
        { option: "The Daily Bugle newspaper", "answer": 0 },
        { option: "Web-shooters", "answer": 0 }
      ]
    },
    {
      question: "Which object in the 'Batman' series symbolizes 'the nature of justice'?",
      options: [
        { option: "The Bat-signal", "answer": 1 },
        { option: "The Batmobile", "answer": 0 },
        { option: "Wayne Manor", "answer": 0 }
      ]
    },
    {
      question: "In the 'Superman' series, what symbolizes 'the burden of heroism'?",
      options: [
        { option: "The 'S' on Superman's chest", "answer": 1 },
        { option: "The Fortress of Solitude", "answer": 0 },
        { option: "The Daily Planet", "answer": 0 }
      ]
    },
    {
      question: "What symbolizes 'the circle of life' in 'The Lion King'?",
      options: [
        { option: "Pride Rock", "answer": 1 },
        { option: "The jungle", "answer": 0 },
        { option: "Simba's mane", "answer": 0 }
      ]
    },
    {
      question: "In 'Frozen', what symbolizes 'the power of true love'?",
      options: [
        { option: "Elsa's ice castle", "answer": 0 },
        { option: "Anna's sacrifice", "answer": 1 },
        { option: "Olaf the snowman", "answer": 0 }
      ]
    },
    {
      question: "What symbolizes 'the pursuit of dreams' in 'The Little Mermaid'?",
      options: [
        { option: "Ariel's voice", "answer": 1 },
        { option: "Prince Eric's ship", "answer": 0 },
        { option: "The sea witch's lair", "answer": 0 }
      ]
    },
    {
      question: "Which object in 'The Wizard of Oz' symbolizes 'the meaning of home'?",
      options: [
        { option: "Dorothy's ruby slippers", "answer": 1 },
        { option: "The Yellow Brick Road", "answer": 0 },
        { option: "The Emerald City", "answer": 0 }
      ]
    },
    {
      question: "In the 'Naruto' series, what symbolizes 'the journey to acceptance'?",
      options: [
        { option: "The Leaf Village headband", "answer": 1 },
        { option: "Ramen Ichiraku", "answer": 0 },
        { option: "The Hokage Monument", "answer": 0 }
      ]
    },
    {
      question: "What symbolizes 'the strength of perseverance' in the 'Dragon Ball Z' series?",
      options: [
        { option: "Goku's training uniform", "answer": 1 },
        { option: "The Dragon Balls", "answer": 0 },
        { option: "The Capsule Corporation logo", "answer": 0 }
      ]
    },
    {
      question: "In 'Pokémon', what symbolizes 'the bond between trainer and Pokémon'?",
      options: [
        { option: "Pikachu", "answer": 1 },
        { option: "Poké Balls", "answer": 0 },
        { option: "The Pokémon Gym badges", "answer": 0 }
      ]
    }
  ]
];

// A copy of the questions for active use in the game, allowing for modifications
let questionsEnemiesPagesActive = JSON.parse(JSON.stringify(questionsEnemiesPages));

// Resets the active questions to the original set
const resetPages = () => {
  questionsEnemiesPagesActive = JSON.parse(JSON.stringify(questionsEnemiesPages));
}

// Function to handle enemy encounters with questions
const questionEnemyFunction = (scene, player, enemy, gameState, destroyArray, enemies, enemiesDead) => {
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

  // Remove the enemy from the game
  const enemyIndex = enemies.findIndex(e => e.sprite === enemy);
  if (enemyIndex !== -1) {
    enemies.splice(enemyIndex, 1);
  }

  enemy.destroy();

  // Create a dead sprite for the enemy
  const enemyDeadSprite = scene.physics.add.sprite(enemy.x, enemy.y, "enemy", 0).setSize(22, 33).setOffset(20, 20).setDepth(0);
  enemiesDead.push(enemyDeadSprite);

  // Create a text box for the question
  const textBoxb = scene.add.rectangle(centerX, centerY - 95, 420, 190, 0x000000).setScrollFactor(0);
  const textBox = scene.add.rectangle(centerX, centerY - 95, 400, 170, 0xFFFFFF).setScrollFactor(0);
  textBox.setOrigin(0.5);

  const messageOptions = [
    "Ah, a rare visitor to these ancient halls. If you seek wisdom, first demonstrate your worth by solving this enigma.",
    "Halt! The secrets within these walls are not for the unworthy. Prove your intellect and intent by deciphering this puzzle.",
    "Who dares tread upon these sacred texts? Only the wise may pass. Show your wisdom by answering this.",
    "You've disturbed the silent whispers of this place. If you're not a seeker of truth, you'll be a dweller of shadows. Answer carefully.",
    "This library guards its treasures fiercely. Only those with a keen mind may explore its depths. Prove that mind is yours.",
    "So, an adventurer dares to enter the Forbidden Archives? Your bravery must be matched by your wit. Answer me this.",
    "These corridors echo with the thoughts of the ages. Are you here to learn or to loot? Your response to this challenge shall reveal all.",
    "Intruder! The spirits of the library demand respect. Pay homage with your intellect and solve this mystery, or face the consequences.",
    "What business do you have in these dusty corners? Only those with a quest for knowledge may proceed. Present your credentials in the form of an answer.",
    "A murmur in the silent shelves? A curious soul, no doubt. But are you worthy? Solve this riddle to continue your journey.",
    "You've entered a realm of forgotten lore. To wander further, your wisdom must be proven. Let's see if you can unravel this conundrum.",
    "Stranger, you seek the wisdom of the ancients? First, let your intellect be judged. Solve this or retreat from whence you came.",
    "Rare is the soul who braves the labyrinth of knowledge. Rarer still is one who survives its trials. Face this challenge to proceed.",
    "Your footsteps disturb the scholarly peace. If you're not a guardian of wisdom, prove you're not its foe. Answer this riddle.",
    "The guardians of this place do not take kindly to uninvited guests. If you wish to be an exception, demonstrate your worth with this question.",
    "You stand where many have faltered. The path ahead is for the enlightened alone. Enlighten us with your response to this puzzle.",
    "This sanctuary is for seekers, not for plunderers. If you're the former, prove your intent by solving this enigma.",
    "Each book is a world, and each world has its guardians. To pass, you must convince us of your right. Answer this and reveal your purpose.",
    "So, a new chapter begins with your arrival. But will it be a tale of triumph or tragedy? Your answer to this query shall decide.",
    "Whispers of an intruder have reached even the quietest alcoves. Reveal your purpose through the wisdom of your words, or face our wrath.",
    "You tread on sacred script! Only those who can decipher the riddles of old may walk these hallowed halls unharmed. Your trial begins now.",
    "Echoes of the past surround you. To make your future here bright, light the way with your intellect. Answer this or fade into obscurity.",
    "This library is a maze of mind, not just of matter. Find your path by solving this riddle, or be forever lost in its labyrinth.",
    "A brave soul or a foolish one? The archives keep many secrets, and they demand a key of cunning and wit. Present yours with this answer.",
    "The spirits of knowledge watch your every step. Prove you are a friend, not a foe, to the wisdom they guard. Your test awaits.",
    "Many seek the truth, but few are prepared to pay its price. Are you one of the worthy? Your response to this enigma shall tell.",
    "You are an enigma, a mystery yet to be solved. But here, you must be the solver. Unravel this riddle to proceed with your quest.",
    "Rarely do we receive visitors with the courage to face the trials of intellect. Show us that your bravery is matched by your wisdom."
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
  
    let enemyOptions = '';
    let currentLevelArray = gameState.level - 1;

    // Determine the appropriate set of questions based on the current level
    if (questionsEnemiesPagesActive[currentLevelArray].length > 0) {
      gameState.randomIndex = Math.floor(Math.random() * questionsEnemiesPagesActive[currentLevelArray].length);
      enemyOptions = questionsEnemiesPagesActive[currentLevelArray][gameState.randomIndex];
    } else {
      currentLevelArray -= 1;
      gameState.randomIndex = Math.floor(Math.random() * questionsEnemiesPagesActive[currentLevelArray].length);
      enemyOptions = questionsEnemiesPagesActive[currentLevelArray][gameState.randomIndex];
    }

    // Generate each option
    for (let i = 0; i < 3; i++) {
      let option = enemyOptions.options[i];
      let question = enemyOptions.question;
      let answer = option.answer; 

      const messageText = scene.add.text(centerX - 190, centerY - 172, '', {
        fontSize: 'bold 15px',
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

        const enemyFade = () => {
            // Set the initial alpha value
            enemyDeadSprite.setAlpha(1); // Fully opaque

            // Create a timer to gradually decrease the alpha value
            const fadeOutTimer = scene.time.addEvent({
                delay: 1000, // Adjust the delay based on how quickly you want the sprite to disappear
                repeat: -1, // Repeat indefinitely or set the desired number of repetitions
                callback: () => {
                    // Reduce the alpha value gradually
                    enemyDeadSprite.setAlpha(enemyDeadSprite.alpha - 0.1); // Adjust the decrement based on the desired fading speed

                    // Check if the sprite has completely disappeared
                    if (enemyDeadSprite.alpha <= 0) {
                        // Stop the timer or perform any other necessary actions
                        fadeOutTimer.destroy();
                        enemyDeadSprite.destroy();
                    }
                },
            });
          }
          // Check if the player's input indicates a correct answer (1).
          if (input === 1) {
            // If correct:
            gameState.totalEnemies += 1; 
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
            // Resume the physics and reset the camera zoom to indicate the game is continuing.
            scene.physics.world.resume();
            scene.cameras.main.zoom = 1;
            enemyFade();
          } else {
            // If incorrect:
            // Remove the question, option boxes, and text as done for the correct case.
            textBox.destroy();
            textBoxb.destroy();
            destroyArray.forEach(item => {
              item.questionText.destroy();
              item.optionBox.destroy();
              item.optionText.destroy();
              item.messageText.destroy();
            });
            // Resume the physics and reset the camera zoom to indicate the game is continuing.
            gameState.keys -= 1;
            gameState.totalKeys -= 1; 
            scene.physics.world.resume();
            scene.cameras.main.zoom = 1;
            enemyFade();
            gameState.displayKeys.setText(`You need ${gameState.keysNeeded} books to continue. You have: ${gameState.keys} .\nCurrent level: ${gameState.level}`)
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
          questionsEnemiesPagesActive[currentLevelArray].splice(gameState.randomIndex, 1);

          // If the current level's questions are depleted, reset for new round.
          if (currentLevelArray === 0 && questionsEnemiesPagesActive[currentLevelArray].length === 0) {
            resetPages();
            currentLevelArray = gameState.level - 1;
          }

          // Generate a response message for a correct answer.
          const responseOptions = [
            `Yes you are right '${option.option}' is the correct answer`,
            `Brilliantly solved! '${option.option}' is indeed the key that unlocks this enigma. Your intellect shines brightly.`,
            `Correct! '${option.option}' resonates with the truth of ages. You've proven your wisdom once more.`,
            `Absolutely right! The answer '${option.option}' echoes through the halls of knowledge, affirming your sagacity.`,
            `Astute observation! '${option.option}' is the precise answer we sought. Your acumen is commendable.`,
            `Spot on! '${option.option}' is the missing piece to this puzzle. Your insight is truly remarkable.`,
            `Masterfully deduced! The answer '${option.option}' aligns perfectly with the ancient lore. Well done!`,
            `Indeed, '${option.option}' is correct! You've navigated the labyrinth of this question with grace and intellect.`,
            `Unerringly accurate! '${option.option}' is the answer that eluded many, but not you. Your sharp mind prevails.`,
            `Truly, you have the wisdom of the sages. '${option.option}' is the correct answer, as foretold in the scrolls of old.`,
            `You've hit the mark! '${option.option}' is the correct answer, shining a light of truth in the darkness of doubt.`,
            `With unerring precision, you've chosen '${option.option}'. A choice as right as rain in spring. Kudos to your keen intellect!`,
            `A round of applause! '${option.option}' is the bullseye, the very heart of truth in this enigmatic challenge.`,
            `As the wise old owl hoots in the night, so too is your answer '${option.option}' a beacon of wisdom. Perfectly correct!`,
            `Eureka! '${option.option}' is the golden answer, shining brightly amidst the riddles of the mind. Exceptionally well-done!`,
            `Like a skilled navigator of the stars, you've guided us to '${option.option}', the correct harbor in this sea of questions.`,
            `In a tapestry of possibilities, '${option.option}' stands out as the thread of truth. Your accuracy is to be celebrated.`,
            `You've struck the chord of correctness with '${option.option}'. Harmony is restored, thanks to your insightful answer.`,
            `Just like a master key opening a long-locked chest, '${option.option}' is the right answer, unlocking the vault of knowledge.`,
            `In the garden of queries, '${option.option}' blooms as the flower of correctness. Your intellect is as fertile as the richest soil.`,
            `With the grace of a seasoned scholar, you've landed upon '${option.option}' the answer that resonates with truth and clarity.`
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
            `Alas, '${option.option}' is not the answer we seek. But do not falter; the path to knowledge is often winding.`,
            `Not quite right. '${option.option}' seems logical, but it's a mirage in the desert of this puzzle. Try again.`,
            `Ah, a common misstep. '${option.option}' is close, but not close enough. The right answer is still out there.`,
            `A valiant effort, but '${option.option}' misses the mark. Reflect and retry, for wisdom grows through perseverance.`,
            `So close, yet so far. '${option.option}' is a step in the right direction, but not the destination. Keep pondering.`,
            `The answer '${option.option}' echoes uncertainty. Revisit the riddle and trust your intellect to guide you.`,
            `An interesting choice, but '${option.option}' is not the key to this enigma. The truth still eludes us.`,
            `With '${option.option}', you've brushed past the truth, yet it remains just out of reach. Think deeper.`,
            `In the tapestry of this puzzle, '${option.option}' is a misplaced thread. Seek the pattern that fits.`,
            `Like a ship veering off course, '${option.option}' is not where we need to dock. Adjust your bearings and try again.`,
            `In the grand symphony of this question, '${option.option}' is a discordant note. Tune your thoughts and play again.`,
            `The answer '${option.option}' dances around the truth, yet doesn't quite embrace it. Swing closer next time.`,
            `As an archer who misses the target, '${option.option}' is off the mark. Aim your thoughts and release again.`,
            `The shadows of falsehood obscure '${option.option}'. Illuminate your path with clearer thinking.`,
            `'${option.option}' is a puzzle piece from a different box. Search for the one that fits this mystery.`,
            `Like a compass pointing slightly askew, '${option.option}' guides you close, but not to the true north. Realign your direction.`,
            `In the garden of this riddle, '${option.option}' is a wilted flower. Nurture your thoughts and bloom anew.`,
            `A bold guess, but '${option.option}' is adrift in the sea of possibilities. Anchor your reasoning and sail forth once more.`,
            `The mists of error cloud '${option.option}'. Clear your mind and the right path will reveal itself.`,
            `With '${option.option}', you've painted outside the lines of this enigma. Refocus your palette and try another stroke.`
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
}

export { questionsEnemiesPages, questionEnemyFunction };
