// Import the gameState to track and manipulate the current game status.
import { gameState } from './gameState.js';
// Import the questions to be used in the EndScene for displaying scenario dialogues.
import questions from "./questions.js";

/**
 * Class representing the end scene of the game.
 * @extends Phaser.Scene
 */
export default class EndScene extends Phaser.Scene {
  /**
   * Create an instance of the EndScene.
   */
  constructor() {
    super({ key: 'EndScene' });
  }

  /**
   * Preload is responsible for loading the assets before creating the scene.
   */
  preload() {
    // Load arrow images used for the continue button.
    this.load.image("arrow1", "https://tdarw.github.io/conversationsimulator/assets/arrow1.png");
    this.load.image("arrow2", "https://tdarw.github.io/conversationsimulator/assets/arrow2.png");
  }

  /**
   * Create is called once preload is complete and is responsible for setting up the scene.
   */
  create() {
    // Retrieve the scenario dialog from the questions array based on the current gameState.
    const scenarioDialog = questions[gameState.scenario];

    let totalCharactersDialog = 0;

    // Calculate the total number of characters in the dialog for timing purposes.
    scenarioDialog.forEach(item => {
      totalCharactersDialog += item.question.length;
      item.options.forEach(option => {
        totalCharactersDialog += option.option.length;
      });
    });

    // Center coordinates for placing elements on the screen.
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    // Add and setup the continue arrow image.
    const arrow1r = this.add.image(centerX + 470, centerY - 340, 'arrow1');
    arrow1r.setScale(0.5);
    arrow1r.visible = false; // Initially hidden until dialog has completed typing out.
    arrow1r.setInteractive();

    // Define behavior for when the continue arrow is clicked.
    arrow1r.on('pointerup', () => {
      // Logic to determine the next scene based on the current scenario.
      if (gameState.scenario === 'britishSlangQuiz' || gameState.scenario === 'australianSlangQuiz') {
        this.scene.stop('EndScene');
        this.scene.start('StartScene');
      }

      if (gameState.scenario === 'britishSlang') {
        gameState.scenario = 'britishSlangQuiz';
        this.scene.stop('EndScene');
        this.scene.start('GameScene');
      }

      if (gameState.scenario === 'australianSlang') {
        gameState.scenario = 'australianSlangQuiz';
        this.scene.stop('EndScene');
        this.scene.start('GameScene');
      }
    });

    // Function for typing out text character by character.
    const typeText = (scene, textObject, targetText, speed = gameState.textSpeed, startDelay = 0) => {
      return new Promise((resolve) => {
        let currentText = '';
        let index = 0;
  
        // Adjust text position to start from the beginning.
        const startingX = textObject.x - (textObject.displayWidth / 2);
  
        // Start typing text after an optional delay.
        scene.time.delayedCall(startDelay, () => {
          const interval = scene.time.addEvent({
            delay: speed,
            repeat: targetText.length - 1,
            callback: function () {
              currentText += targetText[index];
              textObject.setText(currentText);
              const updatedX = startingX + (textObject.displayWidth / 2);
              textObject.setX(updatedX);
              index++;
              if(index === targetText.length) resolve(); // Complete the promise when typing is done.
            },
          });
        });
      });
    };

    // Async function to create dialog for the end scene.
    const createDialog = async () => {
      let yOffset = 0;

      for (let i = 0; i < scenarioDialog.length; i++) {
        let scenario = scenarioDialog[i];
        let question = scenario.question;
        let responses = scenario.options;

        const questionX = centerX - 500;
        const questionY = centerY - 350 + yOffset;

        const questionText = this.add.text(questionX, questionY, '', {
          fontSize: '16px',
          fill: '#000000',
          fontStyle: 'bold',
          wordWrap: { width: 1000, useAdvancedWrap: true }
        }).setOrigin(0.5);

        // Use await to type out the question text before proceeding.
        await typeText(this, questionText, question, gameState.textSpeed, 0);

        yOffset += questionText.displayHeight + 5;

        // Type out the options for the question.
        for (let j = 0; j < responses.length; j++) {
          if (responses[j].answer === 1 || responses[j].answer === 2) {
            let optionText = responses[j].option;
            const optionY = centerY - 350 + yOffset;

            const optionDisplay = this.add.text(questionX, optionY, '', {
              fontSize: '14px',
              fill: '#555555',
              wordWrap: { width: 1000, useAdvancedWrap: true }
            }).setOrigin(0.5);

            // Use await to type out each option text before proceeding.
            await typeText(this, optionDisplay, optionText, gameState.textSpeed, 0);
            yOffset += optionDisplay.displayHeight + 30;
          }
        }
      }
    };

    // Begin the dialog creation process.
    createDialog();

    // Function to make the continue arrow visible.
    const continueButton = () => {
      arrow1r.visible = true; 
    };

    // Calculate delay for the continue button based on dialog length.
    this.time.delayedCall(totalCharactersDialog, continueButton, [], this);
  }
}
