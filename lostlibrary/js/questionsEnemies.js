// Define questions for enemy encounters
const questionsEnemiesPages = [
  [
    {
      question: "What is alliteration?",
      options: [
        { option: "Using a metaphor in a story.", "answer": 0 },
        { option: "Repeating the first sounds in words close to each other.", "answer": 1 },
        { option: "Describing something by comparing it to something else.", "answer": 0 }
      ]
    },
    {
      question: "What does assonance refer to in poetry?",
      options: [
        { option: "Repeating vowel sounds in nearby words.", "answer": 1 },
        { option: "Using exaggeration to make a point.", "answer": 0 },
        { option: "The actual meaning of the words used.", "answer": 0 }
      ]
    },
    {
      question: "What does 'connotation' mean?",
      options: [
        { option: "The literal definition of a word.", "answer": 0 },
        { option: "The feelings or ideas a word suggests beyond its basic meaning.", "answer": 1 },
        { option: "A direct comparison using 'like' or 'as'.", "answer": 0 }
      ]
    },
    {
      question: "What does 'convention' mean in literature?",
      options: [
        { option: "A rule or method commonly accepted in stories.", "answer": 1 },
        { option: "A scene described vividly through sensory details.", "answer": 0 },
        { option: "Using irony to express something.", "answer": 0 }
      ]
    },
    {
      question: "What is figurative language?",
      options: [
        { option: "Language that means exactly what it says.", "answer": 0 },
        { option: "Language that uses figures of speech to be more effective.", "answer": 1 },
        { option: "Language that repeats sounds in words.", "answer": 0 }
      ]
    },
    {
      question: "What is hyperbole?",
      options: [
        { option: "A way of using language that involves sensory details.", "answer": 0 },
        { option: "An extreme exaggeration used to make a point.", "answer": 1 },
        { option: "A mild or indirect word substituted for one considered too harsh.", "answer": 0 }
      ]
    },
    {
      question: "What is imagery?",
      options: [
        { option: "The use of words to create mental pictures.", "answer": 1 },
        { option: "A type of language that sounds the same.", "answer": 0 },
        { option: "Describing something exactly as it is.", "answer": 0 }
      ]
    },
    {
      question: "What does irony mean?",
      options: [
        { option: "Saying the opposite of what you mean for humorous effect.", "answer": 1 },
        { option: "Using words that mean exactly what they say.", "answer": 0 },
        { option: "Repeating consonant sounds in close proximity.", "answer": 0 }
      ]
    },
    {
      question: "What is literal language?",
      options: [
        { option: "Language that means exactly what it says.", "answer": 1 },
        { option: "Language that implies deeper meanings.", "answer": 0 },
        { option: "Language that exaggerates to create humor.", "answer": 0 }
      ]
    },
    {
      question: "What is a metaphor?",
      options: [
        { option: "A comparison using 'like' or 'as'.", "answer": 0 },
        { option: "A direct comparison not using 'like' or 'as'.", "answer": 1 },
        { option: "A vivid description using the senses.", "answer": 0 }
      ]
    },
    {
      question: "What is satire?",
      options: [
        { option: "Using humor to criticize or mock.", "answer": 1 },
        { option: "Describing things using sensory details.", "answer": 0 },
        { option: "Saying one thing but meaning another.", "answer": 0 }
      ]
    },
    {
      question: "What is a simile?",
      options: [
        { option: "A comparison using 'like' or 'as'.", "answer": 1 },
        { option: "A direct comparison not using 'like' or 'as'.", "answer": 0 },
        { option: "Using exaggeration to make a point.", "answer": 0 }
      ]
    }
  ],
  // Q2 PLOT
  [
    {
      question: "Which statement best describes the 'Exposition' in a story about a boy named Brian?",
      options: [
        { option: "Brian, a 13-year-old boy from New York, was flying to Canada to reunite with his dad.", "answer": 1 },
        { option: "Brian's heart raced as the pilot's head dropped, signaling the beginning of his terrifying ordeal.", "answer": 0 },
        { option: "With the tornado tearing through, Brian felt a sharp pain as debris flew all around him.", "answer": 0 }
      ]
    },
    {
      question: "What best exemplifies the 'Inciting Incident' in Brian's story?",
      options: [
        { option: "Brian learned to identify safe berries to eat.", "answer": 0 },
        { option: "Suddenly, the pilot clutched his chest and gasped, slumping over the controls.", "answer": 1 },
        { option: "Injured but alive, Brian limped back to his shelter.", "answer": 0 }
      ]
    },
    {
      question: "Which of the following represents the 'Rising Action' in the plot about Brian?",
      options: [
        { option: "Each day, Brian learned which berries were safe to eat and which were poisonous.", "answer": 1 },
        { option: "The pilot's sudden incapacitation marked the start of Brian's ordeal.", "answer": 0 },
        { option: "Brian, covered in bandages, greeted the rescue team with a weary smile.", "answer": 0 }
      ]
    },
    {
      question: "Identify the 'Climax' of the story where Brian is the protagonist.",
      options: [
        { option: "Brian remembered survival tips from TV shows.", "answer": 0 },
        { option: "With the tornado tearing through, Brian felt a sharp pain as debris flew around him.", "answer": 1 },
        { option: "Brian greeted the rescue team with a weary smile.", "answer": 0 }
      ]
    },
    {
      question: "Which scenario best fits the 'Falling Action' in Brian's adventure?",
      options: [
        { option: "Despite his injuries, Brian began planning his next steps for survival.", "answer": 1 },
        { option: "Brian was knocked to the ground by a tree branch during the storm.", "answer": 0 },
        { option: "Brian was flying to Canada to reunite with his dad.", "answer": 0 }
      ]
    },
    {
      question: "What describes the 'Resolution' in the story of Brian?",
      options: [
        { option: "Brian often thought back to his days in the wilderness, knowing he had survived against all odds.", "answer": 1 },
        { option: "Brian remembered survival shows he had seen on TV.", "answer": 0 },
        { option: "Brian learned to identify safe and poisonous berries.", "answer": 0 }
      ]
    },
    {
      question: "Which statement best describes the 'Exposition' in Meg and Charles Wallace's story?",
      options: [
        { option: "Meg, struggling in school and missing her father, felt out of place in her small town.", "answer": 1 },
        { option: "The sudden arrival of Mrs. Who confirmed that the adventure had truly begun.", "answer": 0 },
        { option: "Meg faces IT alone, armed only with her love for Charles Wallace.", "answer": 0 }
      ]
    },
    {
      question: "What best exemplifies the 'Inciting Incident' in Meg and Charles Wallace's adventure?",
      options: [
        { option: "The revelation that their father might be alive and trapped on another planet.", "answer": 1 },
        { option: "Meg reflects on her growth and the power of individuality.", "answer": 0 },
        { option: "The children learn about the Dark Thing spreading evil.", "answer": 0 }
      ]
    },
    {
      question: "Identify the 'Climax' of the story involving Meg and Charles Wallace.",
      options: [
        { option: "In a tense confrontation, Meg faces IT alone, armed only with her love.", "answer": 1 },
        { option: "Meg and Charles Wallace learn about a sinister force spreading evil.", "answer": 0 },
        { option: "Meg’s newfound confidence begins to solidify as they prepare to leave Camazotz.", "answer": 0 }
      ]
    },
    {
      question: "Which scenario best fits the 'Falling Action' in Meg's story?",
      options: [
        { option: "With her father and brother now safe, Meg's confidence begins to solidify.", "answer": 1 },
        { option: "Meg faces IT alone in a tense confrontation.", "answer": 0 },
        { option: "Meg, struggling in school and missing her father, felt out of place.", "answer": 0 }
      ]
    },
    {
      question: "What describes the 'Resolution' in Meg and Charles Wallace's story?",
      options: [
        { option: "Back on Earth, the Murry family is reunited, and Meg feels a new sense of strength.", "answer": 1 },
        { option: "The sudden arrival of Mrs. Who confirmed that the adventure had begun.", "answer": 0 },
        { option: "The children learn about the Dark Thing spreading evil.", "answer": 0 }
      ]
    }
  ],
  // Q3 CHARACTERIZATION / SETTING
  [
    {
      question: "What is a defining quality of the Hero archetype?",
      options: [
        { option: "They often use intelligence and wit to challenge norms.", answer: 0 },
        { option: "They typically embark on a quest and overcome obstacles.", answer: 1 },
        { option: "They provide wisdom and guidance to others.", answer: 0 },
      ],
    },
    {
      question: "What role does the Mentor archetype play in stories?",
      options: [
        { option: "They are the main antagonist challenging the hero.", answer: 0 },
        { option: "They serve as a guide or teacher to the hero.", answer: 1 },
        { option: "They use humor and wit to challenge authority.", answer: 0 },
      ],
    },
    {
      question: "What best describes the Warrior archetype?",
      options: [
        { option: "A character known for their innocence and wonder.", answer: 0 },
        { option: "A character that represents strength and skill in combat.", answer: 1 },
        { option: "A character that primarily seeks romantic relationships.", answer: 0 },
      ],
    },
    {
      question: "What is characteristic of the Trickster archetype?",
      options: [
        { option: "They are known for their innocence and wonder.", answer: 0 },
        { option: "They usually play a protective, parental role.", answer: 0 },
        { option: "They use intelligence and wit to challenge norms.", answer: 1 },
      ],
    },
    {
      question: "What does the Child archetype symbolize in literature?",
      options: [
        { option: "Cunning and mischievous behavior.", answer: 0 },
        { option: "Intense feelings and pursuit of deep emotional bonds. ", answer: 0 },
        { option: "Innocence, potential, and a sense of wonder.", answer: 1 },
      ],
    },
    {
      question: "What drives the Lover archetype in stories?",
      options: [
        { option: "A desire for wealth and power.", answer: 0 },
        { option: "Intense feelings and pursuit of deep emotional bonds.", answer: 1 },
        { option: "Innocence, potential, and a sense of wonder. ", answer: 0 },
      ],
    },
    {
      question: "What does the Garden typically symbolize in literature?",
      options: [
        { option: "Isolation and introspection.", answer: 0 },
        { option: "Love and fertility.", answer: 1 },
        { option: "Danger and wildness.", answer: 0 },
      ],
    },
    {
      question: "What does the Forest represent in stories?",
      options: [
        { option: "Spiritual journey and enlightenment.", answer: 0 },
        { option: "Love and unity.", answer: 0 },
        { option: "A wild place with dangers and a connection to nature.", answer: 1 },
      ],
    },
    {
      question: "What is symbolized by the River in literature?",
      options: [
        { option: "Judgment and intolerance.", answer: 0 },
        { option: "Life's journey and boundaries.", answer: 1 },
        { option: "Power and dominance.", answer: 0 },
      ],
    },
    {
      question: "What does the Sea often represent in stories?",
      options: [
        { option: "A symbol of isolation. ", answer: 0 },
        { option: "Infinity and a mix of danger and treasure. ", answer: 1 },
        { option: "Spiritual ascension.", answer: 0 },
      ],
    },
    {
      question: "What does the Island symbolize in literary settings?",
      options: [
        { option: "Wisdom and power. ", answer: 0 },
        { option: "Isolation.", answer: 1 },
        { option: "Love and fertility.", answer: 0 },
      ],
    },
    {
      question: "Climbing a Mountain in a story is often symbolic of what?",
      options: [
        { option: "A journey toward isolation.", answer: 0 },
        { option: "A spiritual or personal journey.", answer: 1 },
        { option: "A descent into madness.", answer: 0 },
      ],
    },
    {
      question: "What does the Tower typically represent in literature?",
      options: [
        { option: "Life's journey and growth.", answer: 0 },
        { option: "Worship or power.", answer: 1 },
        { option: "Love and fertility.", answer: 0 },
      ],
    },
    {
      question: "In literature, what does a Small Town setting often represent?",
      options: [
        { option: "Infinite possibilities and adventures.", answer: 0 },
        { option: "Intense emotional experiences.", answer: 0 },
        { option: "Intolerance and judgment.", answer: 1 },
      ],
    }
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
