// Define questions for enemy encounters
const questionsEnemiesPages = [
  // Q2 FICTION
  [
    {
      question: 'In fiction, how does a well-constructed plot contribute to the story beyond organizing events?',
      options: [
        { option: 'By strictly adhering to genre conventions.', answer: 0 },
        { option: 'By enhancing thematic depth and character arcs.', answer: 1 },
        { option: 'By introducing complex language and structure.', answer: 0 },
      ],
    },
    {
      question: 'What role do secondary characters typically play in shaping the protagonist\'s journey?',
      options: [
        { option: 'They mirror the protagonist\'s traits for emphasis.', answer: 0 },
        { option: 'They challenge and influence the protagonist\'s growth.', answer: 1 },
        { option: 'They solely provide background support with little impact.', answer: 0 },
      ],
    },
    {
      question: 'Beyond establishing time and place, what role does the setting often play in a narrative?',
      options: [
        { option: 'It subtly reflects the story\'s mood and themes.', answer: 1 },
        { option: 'It serves as a static backdrop which supports the plot.', answer: 0 },
        { option: 'It subtly diverts attention from the central plot with detailed descriptions.', answer: 0 },
      ],
    },
    {
      question: 'How do themes in fiction typically manifest within the narrative?',
      options: [
        { option: 'Through overt moral lessons stated by the narrator.', answer: 0 },
        { option: 'Through recurring elements that resonate with the plot and characters.', answer: 1 },
        { option: 'Through insight into the mental states of the different characters.', answer: 0 },
      ],
    },
    {
      question: 'How can changing the point of view impact the reader\'s perception of the narrative?',
      options: [
        { option: 'It allows for a more comprehensive view of events and motivations.', answer: 1 },
        { option: 'It subtly diverts attention from the central plot in order to create mystery.', answer: 0 },
        { option: 'It provides a uniform perspective throughout the story.', answer: 0 },
      ],
    },
    {
      question: 'In what way does conflict enrich a fictional narrative?',
      options: [
        { option: 'By offering constant action and drama.', answer: 0 },
        { option: 'By driving character development and thematic tension.', answer: 1 },
        { option: 'By acting as a distraction from the story\'s deeper meaning.', answer: 0 },
      ],
    },
    {
      question: 'How do subtle shifts in tone and mood influence a story\'s impact?',
      options: [
        { option: 'By aligning the reader\'s emotions with the narrative\'s direction.', answer: 1 },
        { option: 'By creating an inconsistent reading experience the reader will be kept in suspense.', answer: 0 },
        { option: 'By focusing the reader’s attention away from the plot and characters.', answer: 0 },
      ],
    },
    {
      question: 'What is the effect of an author\'s distinct style and language choice on a fiction work?',
      options: [
        { option: 'It shapes the narrative\'s atmosphere and reader\'s interpretation.', answer: 1 },
        { option: 'It serves as an ornamental aspect to make the story more aesthetically pleasing.', answer: 0 },
        { option: 'It subtly diverts attention from the central plot in order to create mystery.', answer: 0 },
      ],
    },
    {
      question: 'How does effective use of symbolism add to a fiction work\'s depth?',
      options: [
        { option: 'By providing a literal representation of the story\'s events.', answer: 0 },
        { option: 'By offering deeper layers of meaning connected to theme and character.', answer: 1 },
        { option: 'By acting as a straightforward tool for plot advancement.', answer: 0 },
      ],
    },
    {
      question: 'What purpose does nuanced dialogue serve in character development?',
      options: [
        { option: 'It reveals underlying motives and conflicts.', answer: 1 },
        { option: 'It primarily serves to deliver exposition and plot details.', answer: 0 },
        { option: 'It provides a literal representation of the story\'s events.', answer: 0 },
      ],
    },
    {
      question: 'How does the variation of pace within a story affect the reader\'s experience?',
      options: [
        { option: 'It highlights critical moments and controls tension.', answer: 1 },
        { option: 'It maintains a consistent rhythm for easy reading.', answer: 0 },
        { option: 'It acts as a straightforward tool for plot advancement.', answer: 0 },
      ],
    },
    {
      question: 'What does employing a non-linear narrative structure typically achieve in fiction?',
      options: [
        { option: 'It challenges the reader to piece together thematic elements and character development.', answer: 1 },
        { option: 'It creates an inconsistent reading experience to create suspense.', answer: 0 },
        { option: 'It serves as an ornamental aspect to make the story more aesthetically pleasing.', answer: 0 },
      ],
    },
  ],
  // Q4 PLOT / SETTING / CHARACTERS
  [
    {
      question: 'How does foreshadowing in the early stages of a plot influence reader expectations?',
      options: [
        { option: 'By providing explicit spoilers about the ending, creating excitement.', answer: 0 },
        { option: 'By subtly hinting at future events, creating anticipation.', answer: 1 },
        { option: 'By diverting attention away from the main storyline, creating suspense.', answer: 0 },
      ],
    },
    {
      question: 'In what way does a subplot enrich the main plot of a story?',
      options: [
        { option: 'By introducing unrelated themes and characters.', answer: 0 },
        { option: 'By serving as filler material to extend the story\'s length.', answer: 0 },
        { option: 'By adding depth and complexity to the central narrative.', answer: 1 },
      ],
    },
    {
      question: 'What is the significance of a turning point within the plot\'s structure?',
      options: [
        { option: 'It shifts the story\'s direction, affecting character paths and outcomes.', answer: 1 },
        { option: 'It confuses readers with a sudden change in genre.', answer: 0 },
        { option: 'It usually marks the end of a character’s development by introducing a new protagonist.', answer: 0 },
      ],
    },
    {
      question: 'How does the denouement differ from the climax in a story\'s plot?',
      options: [
        { option: 'It re-introduces the conflict presented in the climax.', answer: 0 },
        { option: 'It resolves remaining tensions and answers lingering questions.', answer: 1 },
        { option: 'It typically serves as the peak of action and conflict.', answer: 0 },
      ],
    },
    {
      question: 'How can the setting of a story symbolically reflect the protagonist\'s internal struggle?',
      options: [
        { option: 'By remaining constantly changing throughout the narrative.', answer: 0 },
        { option: 'By mirroring the emotional landscape of the character\'s journey.', answer: 1 },
        { option: 'By limiting the narrative to only what is directly observable in the environment.', answer: 0 },
      ],
    },
    {
      question: 'What role does a dynamic setting play in a character-driven narrative?',
      options: [
        { option: 'It highlights themes through stark differences in environment and culture.', answer: 0 },
        { option: 'It provides a static backdrop for the characters to interact in.', answer: 0 },
        { option: 'It evolves with the story, influencing and reflecting character growth.', answer: 1 },
      ],
    },
    {
      question: 'In what way does an immersive setting enhance a reader\'s experience?',
      options: [
        { option: 'By creating tensions and posing lingering questions.', answer: 0 },
        { option: 'By making the story world believable and engaging, deepening emotional impact.', answer: 1 },
        { option: 'By diverting attention away from the main storyline, creating suspense.', answer: 0 },
      ],
    },
    {
      question: 'How do multi-dimensional characters impact the believability of a story?',
      options: [
        { option: 'They make the story overly complex and less relatable.', answer: 0 },
        { option: 'They add depth and realism, encouraging reader investment.', answer: 1 },
        { option: 'They overshadow the plot with their personal histories and quirks.', answer: 0 },
      ],
    },
    {
      question: 'What function does a foil character serve in relation to the protagonist?',
      options: [
        { option: 'To mirror the protagonist\'s traits exactly.', answer: 0 },
        { option: 'To contrast and highlight particular traits of the protagonist.', answer: 1 },
        { option: 'To act independently of the protagonist without influencing their development.', answer: 0 },
      ],
    },
    {
      question: 'How can an author use minor characters to advance the plot?',
      options: [
        { option: 'By having them remain in the background until a turning point.', answer: 0 },
        { option: 'By focusing the narrative on them, diverting from the main plot.', answer: 0 },
        { option: 'By using their interactions to reveal information and catalyze events.', answer: 1 },
      ],
    },
    {
      question: 'In what way does a character\'s evolution throughout a story affect the narrative?',
      options: [
        { option: 'It typically diverts attention away from the main storyline, creating suspense.', answer: 0 },
        { option: 'It drives the story forward, providing a sense of progress and resolution.', answer: 1 },
        { option: 'It distracts from the thematic elements by focusing too much on individual growth.', answer: 0 },
      ],
    },
  ],
  // Q5 Archetypes
  [
    {
      question: "In 'Harry Potter,' Harry has to face Voldemort to save the wizarding world. What underlying narrative role does this reflect?",
      options: [
        { option: 'A straightforward conflict between good and evil.', answer: 0 },
        { option: 'A fantasy setting full of magic and mystery.', answer: 0 },
        { option: 'A symbolic journey of self-discovery and bravery.', answer: 1 },
      ],
    },
    {
      question: "In 'The Lion King,' Mufasa teaches Simba about the Circle of Life before his tragic demise. How does Mufasa's guidance shape Simba's path?",
      options: [
        { option: 'By offering wisdom that challenges and molds his perspective.', answer: 1 },
        { option: 'By dictating his every decision and belief and forcing his perspective.', answer: 0 },
        { option: 'By creating a shield that keeps him from reality and maintains his perspective.', answer: 0 },
      ],
    },
    {
      question: "In 'The Chronicles of Narnia,' Peter Pevensie fights bravely in the battle against the White Witch. What broader narrative function does his character perform?",
      options: [
        { option: 'An embodiment of physical strength and moral fortitude facing adversity.', answer: 1 },
        { option: 'A secondary character enhancing the development of others.', answer: 0 },
        { option: 'An unimportant secondary character that moves the plot forward through self-sacrifice.', answer: 0 },
      ],
    },
    {
      question: "In 'Aladdin,' the Genie uses his magic to help Aladdin in magical ways. How does this reflect a broader narrative purpose?",
      options: [
        { option: 'By offering wisdom that challenges and molds his perspective.', answer: 0 },
        { option: 'By acting as a moral guide for other characters.', answer: 0 },
        { option: 'By introducing unpredictability and questioning established norms.', answer: 1 },
      ],
    },
    {
      question: "In 'Charlie and the Chocolate Factory,' Charlie's innocence and honesty win Willy Wonka's heart. How does Charlie's character affect the narrative and other characters?",
      options: [
        { option: 'By representing unending mischief and chaos.', answer: 0 },
        { option: 'By embodying wisdom and intelligence.', answer: 0 },
        { option: 'By symbolizing innocence and the possibility of wonder.', answer: 1 },
      ],
    },
    {
      question: "In 'Romeo and Juliet,' Romeo's love for Juliet leads to both their tragic ends. How do Romeo's intense emotions drive the story?",
      options: [
        { option: 'By fueling a tumultuous narrative that explores the depths of passion and its consequences.', answer: 1 },
        { option: 'By introducing unpredictability and questioning established norms.', answer: 0 },
        { option: 'By embodying physical strength and moral fortitude facing adversity.', answer: 0 },
      ],
    },
    {
      question: "In 'Alice in Wonderland,' the garden represents a place of curiosity and wonder but also danger. What might the garden symbolize in the broader narrative?",
      options: [
        { option: 'A place of confusion, reflecting Alice’s youthful innocence.', answer: 0 },
        { option: 'A scary, unknown area, reflecting Alice’s fear and anxiety.', answer: 0 },
        { option: 'A place of growth and discovery, reflecting Alice her journey.', answer: 1 },
      ],
    },
    {
      question: "In 'The Wizard of Oz,' the dark forest is frightening but also where Dorothy meets some of her closest allies. What does the forest typically represent?",
      options: [
        { option: 'An everyday place of stability and continuity.', answer: 0 },
        { option: 'An unpredictable place of adventure and friendship.', answer: 1 },
        { option: 'An enchanting place of wonder and mystery.', answer: 0 },
      ],
    },
    {
      question: "In 'The Adventures of Huckleberry Finn,' the Mississippi River represents freedom and escape for Huck and Jim. What does the river often symbolize?",
      options: [
        { option: 'A slow current that is easy to follow and brings tranquility.', answer: 0 },
        { option: 'A journey filled with changes, challenges, and hope.', answer: 1 },
        { option: 'A journey filled with hardship, tragedy and hopelessness.', answer: 0 },
      ],
    },
    {
      question: "In 'Finding Nemo,' the ocean is vast and filled with both wonders and dangers. What does the sea often symbolize?",
      options: [
        { option: 'A vast place of mystery, danger, and discovery.', answer: 1 },
        { option: 'A vast place of hardship, tragedy and hopelessness.', answer: 0 },
        { option: 'A vast place of adventure and friendship.', answer: 0 },
      ],
    },
    {
      question: "In 'Treasure Island,' the island holds the promise of treasure but also great danger. What does the island represent?",
      options: [
        { option: 'A journey filled with changes, challenges, and hope.', answer: 0 },
        { option: 'A place of mystery, isolation, and adventure.', answer: 1 },
        { option: 'A place of comfort, challenge, and personal growth.', answer: 0 },
      ],
    },
    {
      question: "In 'The Hobbit,' Bilbo and the dwarves traverse the Misty Mountains, facing dangers and learning about themselves. What does the protagonist's journey through various terrains, including mountains, symbolize?",
      options: [
        { option: 'A random series of challenges with no interconnected meaning.', answer: 0 },
        { option: 'An ascent representing mystery, isolation, and adventure.', answer: 0 },
        { option: 'An ascent representing personal growth and the pursuit of destiny.', answer: 1 },
      ],
    },
    {
      question: "In 'Rapunzel,' the tower prevents Rapunzel from experiencing the world. Beyond its physical presence, what does the tower represent in the broader context of the story?",
      options: [
        { option: 'A symbol of isolation and the barriers to personal freedom and growth.', answer: 1 },
        { option: 'A symbol of personal growth and the pursuit of destiny.', answer: 0 },
        { option: 'A symbol of the pursuit of happiness.', answer: 0 },
      ],
    },
    {
      question: "In 'To Kill a Mockingbird,' the small town of Maycomb has its own set of unwritten rules and judgments. How does the small-town setting influence the portrayal of universal human experiences?",
      options: [
        { option: 'By limiting the scope to mundane, everyday occurrences.', answer: 0 },
        { option: 'By serving as a microcosm that reflects larger truths about life and community.', answer: 1 },
        { option: 'By serving as a macrocosm that reflects larger truths about life and God.', answer: 0 },
      ],
    },
  ],
    // Q6 GENRES
  [
    {
      question: "How do Mystery authors typically utilize red herrings (misleading clues or hints) in their narratives?",
      options: [
        { option: "To provide comic relief in tense situations, enhancing reader engagement", answer: 0 },
        { option: "To resolve conflicts and simplify the storyline, enhancing reader engagement", answer: 0 },
        { option: "To mislead and add complexity to the plot, enhancing reader engagement", answer: 1 },
      ],
    },
    {
      question: "What role do secondary characters typically play in Mystery novels?",
      options: [
        { option: "They are often used as red herrings to distract from the main plot", answer: 1 },
        { option: "They are usually there for comedic relief and do not contribute to the mystery", answer: 0 },
        { option: "They primarily serve as romantic interests for the main character", answer: 0 },
      ],
    },
    {
      question: "In Action stories, how is pacing used to enhance the excitement and tension?",
      options: [
        { option: "By maintaining a slow, steady pace to build suspense gradually until the final climax", answer: 0 },
        { option: "By using a fast-paced narrative with intense scenes to create a sense of engagement", answer: 1 },
        { option: "By focusing on detailed descriptions and character introspection to deepen the plot", answer: 0 },
      ],
    },
    {
      question: "How do Action stories often use the environment as a character?",
      options: [
        { option: "It serves a rich backdrop and context for the story's action elements", answer: 0 },
        { option: "It serves as a dynamic force that challenges the protagonist, adding to the action", answer: 1 },
        { option: "It provides a critical perspective on human behaviors and societal norms", answer: 0 },
      ],
    },
    {
      question: "How does the incorporation of mythology in Fantasy literature enrich world-building?",
      options: [
        { option: "By focusing solely on the action sequences", answer: 0 },
        { option: "By making the plot predictable and straightforward", answer: 0 },
        { option: "By providing a rich backdrop and context for the story's magical elements", answer: 1 },
      ],
    },
    {
      question: "How do Fantasy authors typically use the contrast between good and evil to explore deeper themes?",
      options: [
        { option: "By mostly focusing on good characters, exploring themes like moral excellence and growth", answer: 0 },
        { option: "By blurring the lines between good and evil, exploring themes like moral ambiguity", answer: 1 },
        { option: "By focusing on the battles between good and evil, exploring themes like violence and war", answer: 0 },
      ],
    },
    {
      question: "In Adventure literature, what role does the antagonist typically play?",
      options: [
        { option: "They act as a formidable challenge, adding depth to the protagonist's journey", answer: 1 },
        { option: "They act as a comic relief, lightening the mood during the protagonist’s journey", answer: 0 },
        { option: "They are support characters who aid the protagonist in his journey", answer: 0 },
      ],
    },
    {
      question: "How is the theme of exploration typically handled in Adventure literature?",
      options: [
        { option: "By focusing on the battles between good and evil, often leading to self-discovery", answer: 0 },
        { option: "Through both physical and emotional journeys, often leading to self-discovery", answer: 1 },
        { option: "Through both physical and emotional journeys, often leading to conflict", answer: 0 },
      ],
    },
    {
      question: "How do Science Fiction authors often use the concept of time travel to explore themes in their stories?",
      options: [
        { option: "To examine the possibility of meeting alien life", answer: 0 },
        { option: "To examine futuristic technology and the way it can possibly impact society", answer: 0 },
        { option: "To examine the possibility of altering history or the future", answer: 1 },
      ],
    },
    {
      question: "How is the concept of alien life often used in Science Fiction to mirror human society?",
      options: [
        { option: "To examine futuristic technology and the way it can possibly impact ociety", answer: 0 },
        { option: "To examine human behaviors and societal norms, often critiquing or questioning them", answer: 1 },
        { option: "To examine the possibility of altering history or the future", answer: 0 },
      ],
    },
    {
      question: "In Coming of Age narratives, how is the theme of independence typically portrayed?",
      options: [
        { option: "Through a process where the protagonist learns to navigate and overcome personal obstacles", answer: 1 },
        { option: "Through a process where the protagonist learns to navigate and overcome biological obstacles", answer: 0 },
        { option: "Through a process where the protagonist learns to navigate and overcome political obstacles", answer: 0 },
      ],
    },
    {
      question: "How do relationships with mentors or older figures typically influence the protagonist in Coming of Age stories?",
      options: [
        { option: "These relationships of minor importance, because Coming of Age stories are about independent growth", answer: 0 },
        { option: "These relationships are key in providing guidance that contributes to the protagonist's maturity", answer: 1 },
        { option: "These relationships aren’t typical, because CoA normally revolves around the experiences of teenagers", answer: 0 },
      ],
    },
    {
      question: "In Romance novels, how is the concept of conflict typically used to develop the relationship between the main characters?",
      options: [
        { option: "To deepen understanding and reflection on the characters self-understanding, leading to sadness", answer: 0 },
        { option: "To deepen understanding and reflection on the characters role in society, leading to rebellion", answer: 0 },
        { option: "To deepen understanding and emotional connection between characters, leading to a stronger bond", answer: 1 },
      ],
    },
    {
      question: "In Romance novels, how is the theme of compromise often depicted in the development of the relationship?",
      options: [
        { option: "As a minor element, because the characters are typically soulmates without any conflicting character traits", answer: 0 },
        { option: "As a major element, showing how characters are unable to balance their own needs with those of their partner", answer: 0 },
        { option: "As a crucial element, showing how characters balance their own needs with those of their partner", answer: 1 },
      ],
    },
    {
      question: "In Realism literature, how is the socio-economic background of characters often used to shape the narrative?",
      options: [
        { option: "To provide a rich backdrop and context for the story's magical elements", answer: 0 },
        { option: "To provide a critical context for their decisions, reflecting real-world issues", answer: 1 },
        { option: "To provide an idealized or romanticized context their decisions, reflecting imaginary issues", answer: 0 },
      ],
    },
    {
      question: "How does Realism literature typically handle the portrayal of everyday life and routine?",
      options: [
        { option: "By romanticizing and idealizing daily life to create a more engaging narrative", answer: 0 },
        { option: "With attention to detail, capturing the complexity and significance of ordinary experiences", answer: 1 },
        { option: "By briefly mentioning it but focusing mainly on extraordinary events and escapades", answer: 0 },
      ],
    },
    {
      question: "How do authors in Dystopian Fiction often use technology to comment on societal issues?",
      options: [
        { option: "To examine the consequences of human actions and the possibility of altering history or the future", answer: 0 },
        { option: "To explore themes of control, surveillance, and the loss of individuality", answer: 1 },
        { option: "To deepen understanding and reflection on the characters role in society", answer: 0 },
      ],
    },
    {
      question: "In Dystopian Fiction, how is the concept of resistance or rebellion against the regime typically portrayed in terms of its impact on society and individuals?",
      options: [
        { option: "As a catalyst for significant societal and personal transformation, often sparking hope and change", answer: 1 },
        { option: "As futile efforts that rarely bring about any significant change", answer: 0 },
        { option: "As an examination of the possibility of altering history or the future", answer: 0 },
      ],
    },
  ],
  // Q7 THEMES
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
      question: "What theme is predominantly explored in 'The Incredibles'?",
      options: [
        { option: "The normalcy of family life", answer: 0 },
        { option: "The balance between individuality and conformity", answer: 1 },
        { option: "The pursuit of fame", answer: 0 }
      ]
    },
    {
      question: "Which theme is central to 'Monsters Inc.'?",
      options: [
        { option: "The power of friendship", answer: 0 },
        { option: "Overcoming personal fears", answer: 1 },
        { option: "The importance of innovation", answer: 0 }
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
        { option: "The complexity of rivalry", answer: 0 },
        { option: "The power of heritage", answer: 0 },
        { option: "The journey to acceptance", answer: 1 },
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
        { option: "The thrill of exploration", answer: 0 },
        { option: "The importance of competition", answer: 0 },
        { option: "The bond between trainer and Pokémon", answer: 1 }
      ]
    }
  ],
   //Q8 SYMBOLS
  [
    {
      question: "What symbol in the 'Harry Potter' series represents the theme of death and rebirth?",
      options: [
        { option: "The Phoenix", answer: 1 },
        { option: "The Wand", answer: 0 },
        { option: "The Cloak", answer: 0 }
      ]
    },
    {
      question: "In the 'Star Wars' series, what symbolizes the internal struggle between good and evil?",
      options: [
        { option: "The Lightsaber", answer: 0 },
        { option: "The Death Star", answer: 0 },
        { option: "The Force", answer: 1 }
      ]
    },
    {
      question: "What symbol in 'Jurassic Park' represents the theme of the unchecked power of science?",
      options: [
        { option: "The Park Gates", answer: 0 },
        { option: "The Dinosaurs", answer: 0 },
        { option: "The Amber", answer: 1 }
      ]
    },
    {
      question: "What symbol in the 'Avengers' series represents unity and collaboration?",
      options: [
        { option: "The Hammer", answer: 0 },
        { option: "The Suit", answer: 0 },
        { option: "The Shield", answer: 1 }
      ]
    },
    {
      question: "What symbol in the 'Hunger Games' represents hope and rebellion?",
      options: [
        { option: "The Mockingjay", answer: 1 },
        { option: "The Arena", answer: 0 },
        { option: "The Bread", answer: 0 }
      ]
    },
    {
      question: "In the 'James Bond' series, what symbolizes the glamour and danger of espionage?",
      options: [
        { option: "The Car", answer: 0 },
        { option: "The Gun", answer: 1 },
        { option: "The Martini", answer: 0 }
      ]
    },
    {
      question: "What symbol in 'Lord of the Rings' represents the burden of power and corruption?",
      options: [
        { option: "The Sword", answer: 0 },
        { option: "The Tower", answer: 0 },
        { option: "The One Ring", answer: 1 }
      ]
    },
    {
      question: "In 'The Incredibles', what symbolizes the struggle of hiding one's true identity?",
      options: [
        { option: "The Suits", answer: 0 },
        { option: "The Masks", answer: 1 },
        { option: "The Incredibile", answer: 0 }
      ]
    },
    {
      question: "In 'Inside Out', what symbolizes the complexity of emotions?",
      options: [
        { option: "The Control Console", answer: 0 },
        { option: "The Colored Spheres", answer: 1 },
        { option: "The Islands of Personality", answer: 0 }
      ]
    },
    {
      question: "What symbol in the 'Spider-Man' series represents the dual nature of a hero's life?",
      options: [
        { option: "The Mask", answer: 1 },
        { option: "The Web", answer: 0 },
        { option: "The Spider", answer: 0 }
      ]
    },
    {
      question: "In the 'Batman' series, what symbolizes justice and fear against crime?",
      options: [
        { option: "The Cave", answer: 0 },
        { option: "The Batmobile", answer: 0 },
        { option: "The Bat-Signal", answer: 1 }
      ]
    },
    {
      question: "What is a major theme in the 'Superman' series?",
      options: [
        { option: "The S-Shield", answer: 1 },
        { option: "The Cape", answer: 0 },
        { option: "The Fortress", answer: 0 }
      ]
    },
    {
      question: "In 'The Lion King', what symbolizes the circle of life and the passage of time?",
      options: [
        { option: "Pride Rock", answer: 1 },
        { option: "The Savannah", answer: 0 },
        { option: "The Stars", answer: 0 }
      ]
    },
    {
      question: "What symbol in 'Frozen' represents the power and danger of isolation?",
      options: [
        { option: "The Snowflake", answer: 0 },
        { option: "Elsa's Ice Castle", answer: 1 },
        { option: "The Crown", answer: 0 }
      ]
    },
    {
      question: "What symbol in 'The Wizard of Oz' represents the journey to self-discovery?",
      options: [
        { option: "The Ruby Slippers", answer: 0 },
        { option: "The Emerald City", answer: 0 },
        { option: "The Yellow Brick Road", answer: 1 }
      ]
    },
    {
      question: "In 'Naruto', what symbolizes Naruto's growth and determination?",
      options: [
        { option: "The Headband", answer: 1 },
        { option: "The Rasengan", answer: 0 },
        { option: "The Nine-Tails", answer: 0 }
      ]
    },
    {
      question: "What symbol in 'Dragon Ball Z' represents the pursuit of strength and overcoming limits?",
      options: [
        { option: "The Saiyan Tail", answer: 0 },
        { option: "The Capsule Corp Logo", answer: 0 },
        { option: "The Dragon Balls", answer: 1 }
      ]
    },
    {
      question: "In 'Pokémon', what symbolizes the bond between Pokémon and their trainers?",
      options: [
        { option: "The Gym Badges", answer: 0 },
        { option: "The Pokémon League", answer: 0 },
        { option: "The Poké Ball", answer: 1 }
      ]
    }
  ],
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

  // Array of introduction messages for the question
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
    let currentLevelArray = gameState.level;

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
          // Fade the camera to black to indicate a significant change (like game over or level restart).
          const cam = scene.cameras.main;
          cam.fade(250, 0, 0, 0);
          // Once the fade completes, perform a series of actions to reset the game.
          cam.once("camerafadeoutcomplete", () => {
            // Destroy all enemies and reset game-related parameters.
            scene.enemies.forEach(enemy => {
              enemy.sprite.destroy();
            });
            scene.level = 0;
            gameState.keys = 0;
            scene.enemies = [];
            scene.enemiesDead = [];
            // Destroy the player and transition to the start or another scene.
            scene.player.destroy();
            scene.restartScene = true;
          });
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
            currentLevelArray = gameState.level;
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
            `With the grace of a seasoned scholar, you've landed upon '${option.option}' – the answer that resonates with truth and clarity.`
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
