// Boot Scene
class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Load assets here if needed
        
    }

    create() {
        this.scene.start('MainMenuScene');
    }
}

// Main Menu Scene
class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    create() {
        // Add game title, instructions, and start button
        this.add.text(100, 100, 'READING COMPREHENSION TEST GAME', { fontSize: '32px', fill: '#fff' });
        this.add.text(100, 200, 'Instructions:', { fontSize: '24px', fill: '#fff' });
        this.add.text(100, 250, '- Read the passage carefully.', { fontSize: '20px', fill: '#fff' });
        this.add.text(100, 280, '- Answer the questions based on your understanding.', { fontSize: '20px', fill: '#fff' });
        this.add.text(100, 310, '- You have 5 minutes to complete the test.', { fontSize: '20px', fill: '#fff' });

        var startButton = this.add.text(100, 400, '[ START ]', { fontSize: '32px', fill: '#fff' }).setInteractive();
        startButton.on('pointerdown', () => this.scene.start('GameScene'));
    }
}

// Game Scene
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Timer logic
        this.timeRemaining = 300; // 5 minutes in seconds
        this.timerText = this.add.text(650, 50, 'Time: 5:00', { fontSize: '24px', fill: '#fff' });

        this.time.addEvent({
            delay: 1000,
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        // Initialize score
        this.score = 0;

        // Load and display passage and questions
        this.currentQuestionIndex = 0;
        this.passageText = this.add.text(50, 100, '', { fontSize: '20px', fill: '#fff', wordWrap: { width: 700 } });
        this.questionText = this.add.text(50, 300, '', { fontSize: '24px', fill: '#fff', wordWrap: { width: 700 } });
        this.optionA = this.add.text(50, 370, '', { fontSize: '20px', fill: '#fff', wordWrap: { width: 700 }, lineSpacing: 10 }).setInteractive();
        this.optionB = this.add.text(50, 420, '', { fontSize: '20px', fill: '#fff', wordWrap: { width: 700 }, lineSpacing: 10 }).setInteractive();
        this.optionC = this.add.text(50, 470, '', { fontSize: '20px', fill: '#fff', wordWrap: { width: 700 }, lineSpacing: 10 }).setInteractive();
        this.optionD = this.add.text(50, 520, '', { fontSize: '20px', fill: '#fff', wordWrap: { width: 700 }, lineSpacing: 10 }).setInteractive();

        this.questions = [
            // A1 Level Questions
            {
                passage: "My name is John. I am a student. I live in a small house with my family. Every morning, I go to school by bus. My favorite subject is math. After school, I like to play soccer with my friends.",
                question: "What is John's favorite subject?",
                options: ["a) Science", "b) Math", "c) History", "d) English"],
                answer: 1
            },
            {
                passage: "My name is John. I am a student. I live in a small house with my family. Every morning, I go to school by bus. My favorite subject is math. After school, I like to play soccer with my friends.",
                question: "How does John go to school?",
                options: ["a) By car", "b) By bike", "c) By bus", "d) By walking"],
                answer: 2
            },
            // A2 Level Questions
            {
                passage: "Marie Curie was a famous scientist. She was born in Poland in 1867. Marie moved to France to study science. She discovered radium and polonium, two important elements. Marie Curie won two Nobel Prizes for her work.",
                question: "Where was Marie Curie born?",
                options: ["a) France", "b) Poland", "c) Germany", "d) Russia"],
                answer: 1
            },
            {
                passage: "Marie Curie was a famous scientist. She was born in Poland in 1867. Marie moved to France to study science. She discovered radium and polonium, two important elements. Marie Curie won two Nobel Prizes for her work.",
                question: "What did Marie Curie discover?",
                options: ["a) Oxygen", "b) Radium and Polonium", "c) Gravity", "d) Electrons"],
                answer: 1
            },
            // B1 Level Questions
            {
                passage: "Photosynthesis is the process by which plants make their food. Plants take in carbon dioxide from the air and water from the soil. Using sunlight, they convert these into glucose, a type of sugar. Oxygen is released as a byproduct. This process is essential for the survival of plants and the production of oxygen for animals and humans.",
                question: "What do plants take in from the air?",
                options: ["a) Oxygen", "b) Carbon dioxide", "c) Nitrogen", "d) Hydrogen"],
                answer: 1
            },
            {
                passage: "Photosynthesis is the process by which plants make their food. Plants take in carbon dioxide from the air and water from the soil. Using sunlight, they convert these into glucose, a type of sugar. Oxygen is released as a byproduct. This process is essential for the survival of plants and the production of oxygen for animals and humans.",
                question: "Why is photosynthesis essential for humans?",
                options: ["a) It produces carbon dioxide.", "b) It provides food for plants.", "c) It produces oxygen.", "d) It provides water."],
                answer: 2
            },
            // B2 Level Questions
            {
                passage: "The old castle stood on the hill, shrouded in mystery. Many believed it was haunted. One stormy night, a young traveler named Eliza sought shelter in the castle. As she entered, the door creaked open by itself. Eliza felt a chill run down her spine. She was about to discover the secrets hidden within its ancient walls.",
                question: "What can be inferred about Eliza’s character based on her actions?",
                options: ["a) She is fearless and adventurous.", "b) She is cautious and fearful.", "c) She is indifferent and uninterested.", "d) She is hesitant but curious."],
                answer: 3
            },
            {
                passage: "The old castle stood on the hill, shrouded in mystery. Many believed it was haunted. One stormy night, a young traveler named Eliza sought shelter in the castle. As she entered, the door creaked open by itself. Eliza felt a chill run down her spine. She was about to discover the secrets hidden within its ancient walls.",
                question: "Analyze the author's use of setting to create a sense of mystery.",
                options: ["a) The castle is described with bright and cheerful imagery.", "b) The stormy night and creaking door contribute to the eerie atmosphere.", "c) The description of Eliza’s feelings lightens the mood.", "d) The castle’s description is neutral and doesn’t affect the mood."],
                answer: 1
            },
            {
                passage: "The old castle stood on the hill, shrouded in mystery. Many believed it was haunted. One stormy night, a young traveler named Eliza sought shelter in the castle. As she entered, the door creaked open by itself. Eliza felt a chill run down her spine. She was about to discover the secrets hidden within its ancient walls.",
                question: "Evaluate the effectiveness of the passage in building suspense.",
                options: ["a) The passage fails to create any suspense.", "b) The descriptive language and setting effectively build suspense.", "c) The suspense is undermined by the detailed explanation.", "d) The suspense is only mild and not very effective."],
                answer: 1
            },
            // C1 Level Questions
            {
                passage: "Global warming is a critical issue that impacts our environment. The increase in greenhouse gases, such as carbon dioxide and methane, leads to rising temperatures. This phenomenon results in the melting of polar ice caps, rising sea levels, and extreme weather conditions. It is imperative for governments and individuals to take action to reduce emissions and combat climate change.",
                question: "Infer the potential long-term impacts of not addressing global warming.",
                options: ["a) Stabilized global temperatures.", "b) Improved economic conditions.", "c) Severe environmental and socio-economic consequences.", "d) Reduced pollution levels."],
                answer: 2
            },
            {
                passage: "Global warming is a critical issue that impacts our environment. The increase in greenhouse gases, such as carbon dioxide and methane, leads to rising temperatures. This phenomenon results in the melting of polar ice caps, rising sea levels, and extreme weather conditions. It is imperative for governments and individuals to take action to reduce emissions and combat climate change.",
                question: "Analyze the author's tone and attitude towards global warming.",
                options: ["a) Indifferent and unconcerned.", "b) Optimistic and hopeful.", "c) Urgent and cautionary.", "d) Neutral and objective."],
                answer: 2
            },
            {
                passage: "Global warming is a critical issue that impacts our environment. The increase in greenhouse gases, such as carbon dioxide and methane, leads to rising temperatures. This phenomenon results in the melting of polar ice caps, rising sea levels, and extreme weather conditions. It is imperative for governments and individuals to take action to reduce emissions and combat climate change.",
                question: "Synthesize the main arguments presented and suggest additional measures to combat global warming.",
                options: ["a) Focus solely on reducing industrial emissions.", "b) Implement renewable energy sources and conservation efforts.", "c) Ignore governmental policies and focus on individual actions.", "d) Prioritize economic growth over environmental concerns."],
                answer: 1
            },
            // C2 Level Questions
            {
                passage: "In his magnum opus, 'Moby-Dick,' Herman Melville delves into the complexities of human nature through the narrative of Captain Ahab's obsessive quest to hunt the white whale. The novel explores themes of vengeance, fate, and the sublime. Melville's intricate prose and profound symbolism invite readers to ponder existential questions and the human condition.",
                question: "What can be inferred about Captain Ahab’s character from his quest?",
                options: ["a) He is driven by a rational and calculated desire for knowledge.", "b) He is consumed by vengeance and obsession.", "c) He is indifferent to the challenges he faces.", "d) He is motivated by a sense of adventure and exploration."],
                answer: 1
            },
            {
                passage: "In his magnum opus, 'Moby-Dick,' Herman Melville delves into the complexities of human nature through the narrative of Captain Ahab's obsessive quest to hunt the white whale. The novel explores themes of vengeance, fate, and the sublime. Melville's intricate prose and profound symbolism invite readers to ponder existential questions and the human condition.",
                question: "Synthesize the main themes of the novel and discuss their relevance to contemporary society.",
                options: ["a) Themes of vengeance and fate are outdated and irrelevant.", "b) Themes of obsession and the human condition remain highly relevant.", "c) The novel’s themes are purely fictional with no real-world application.", "d) The novel focuses more on adventure than on significant themes."],
                answer: 1
            },
            {
                passage: "In his magnum opus, 'Moby-Dick,' Herman Melville delves into the complexities of human nature through the narrative of Captain Ahab's obsessive quest to hunt the white whale. The novel explores themes of vengeance, fate, and the sublime. Melville's intricate prose and profound symbolism invite readers to ponder existential questions and the human condition.",
                question: "Evaluate Melville’s use of intricate prose and symbolism in exploring existential questions.",
                options: ["a) The prose and symbolism are overly complex and detract from the themes.", "b) The intricate prose and symbolism effectively highlight the novel’s deeper meanings.", "c) The symbolism is simplistic and fails to convey complex themes.", "d) The prose is clear and straightforward, making the themes easy to understand."],
                answer: 1
            }
        ];

        this.displayQuestion();

        this.optionA.on('pointerdown', () => this.answerQuestion(0));
        this.optionB.on('pointerdown', () => this.answerQuestion(1));
        this.optionC.on('pointerdown', () => this.answerQuestion(2));
        this.optionD.on('pointerdown', () => this.answerQuestion(3));
    }

    updateTimer() {
        this.timeRemaining--;
        let minutes = Math.floor(this.timeRemaining / 60);
        let seconds = this.timeRemaining % 60;
        this.timerText.setText('Time: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds);

        if (this.timeRemaining <= 0) {
            this.scene.start('ResultScene', { score: this.score });
        }
    }

    displayQuestion() {
        let currentQuestion = this.questions[this.currentQuestionIndex];
        this.passageText.setText(currentQuestion.passage);
        this.questionText.setText(currentQuestion.question);
        this.optionA.setText(currentQuestion.options[0]);
        this.optionB.setText(currentQuestion.options[1]);
        this.optionC.setText(currentQuestion.options[2]);
        this.optionD.setText(currentQuestion.options[3]);
    }

    answerQuestion(selectedOption) {
        if (selectedOption === this.questions[this.currentQuestionIndex].answer) {
            this.score++; // Increment score for correct answer
        }

        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.scene.start('ResultScene', { score: this.score });
        }
    }
}

// Result Scene
class ResultScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ResultScene' });
    }

    init(data) {
        this.score = data.score;
    }

    create() {
        // Determine CEFR level based on score
        let level;
        if (this.score <= 3) {
            level = 'A1';
        } else if (this.score <= 6) {
            level = 'A2';
        } else if (this.score <= 9) {
            level = 'B1';
        } else if (this.score <= 12) {
            level = 'B2';
        } else if (this.score <= 15) {
            level = 'C1';
        } else {
            level = 'C2';
        }

        this.add.text(100, 100, 'TEST COMPLETE!', { fontSize: '32px', fill: '#fff' });
        this.add.text(100, 200, 'Your Score: ' + this.score, { fontSize: '24px', fill: '#fff' });
        this.add.text(100, 250, 'Estimated CEFR Level: ' + level, { fontSize: '24px', fill: '#fff' });

        var restartButton = this.add.text(100, 400, '[ RESTART ]', { fontSize: '32px', fill: '#fff' }).setInteractive();
        restartButton.on('pointerdown', () => this.scene.start('MainMenuScene'));

        var exitButton = this.add.text(300, 400, '[ EXIT ]', { fontSize: '32px', fill: '#fff' }).setInteractive();
        exitButton.on('pointerdown', () => window.close());
    }
}

// Main Game Configuration
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: [BootScene, MainMenuScene, GameScene, ResultScene]
};

var game = new Phaser.Game(config);
