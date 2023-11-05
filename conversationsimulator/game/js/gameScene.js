// Import necessary modules and components.
import questions from "./questions.js";
import { gameState } from './gameState.js';

// Define a class GameScene which extends from Phaser.Scene.
export default class GameScene extends Phaser.Scene {
  // Constructor for the class to initialize the scene with a specific key.
  constructor() {
    super({ key: 'GameScene' });
  }

  // The preload method is called before the scene is created and is used to load assets.
  preload() {
    // Load images that will be used across all scenarios.
    this.load.image('speechbubble', 'assets/speechbubble.png');
    this.load.image("arrow1", "assets/arrow1.png");
    this.load.image("arrow2", "assets/arrow2.png");

    // Determine which set of assets to load based on the scenario in the game state.
    const backgroundKey = `backgroundScene-${gameState.scenario}`;
    const image1Key = `image1-${gameState.scenario}`;
    const image2Key = `image2-${gameState.scenario}`;

    // Load assets for the British slang scenario.
    if (gameState.scenario === 'britishSlang' || gameState.scenario === 'britishSlangQuiz') {
      this.load.image(backgroundKey, 'assets/britishSlang/backgroundScene.png');
      this.load.image(image1Key, 'assets/britishSlang/image1.png');
      this.load.image(image2Key, 'assets/britishSlang/image2.png');
    }
    // Load assets for the Australian slang scenario.
    if (gameState.scenario === 'australianSlang' || gameState.scenario === 'australianSlangQuiz') {
      this.load.image(backgroundKey, 'assets/australianSlang/backgroundScene.png');
      this.load.image(image1Key, 'assets/australianSlang/image1.png');
      this.load.image(image2Key, 'assets/australianSlang/image2.png');
    }
  }

  // The create method is used to add objects to the scene once assets are loaded.
  create() {
    // Central points of the screen for object placement.
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    // Variables related to the scenario, questions, and speech bubble text.
    const scenario = gameState.scenario;
    let currentQuestionNumber = 0;
    let speech1 = '';
    let speech2 = '';
    let speechbubble1Text = null;
    let speechbubble2Text = null;
    let speech1temp = '';
    let typeTextDelay = 0;
    let typingInProgress = false;

    // Arrays to manage interactive elements and their destruction.
    const destroyArray = [];
    const optionBoxesArray = [];

    // A function to type text out character by character with a delay.
    const typeText = (scene, textObject, targetText, speed = gameState.textSpeed, startDelay = 0) => {
      let currentText = '';
      let index = 0;
      typeTextDelay = targetText.length * gameState.textSpeed;
      typingInProgress = true;
      scene.time.delayedCall(startDelay, () => {
        const interval = scene.time.addEvent({
          delay: speed,
          repeat: targetText.length - 1,
          callback: () => {
            currentText += targetText[index];
            textObject.setText(currentText);
            index++;
            if (index === targetText.length) {
              interval.remove(); // End typing effect once the full text is displayed.
              typingInProgress = false;
            }
          },
          callbackScope: scene
        });
      });
    };

    // Function to update speech bubble text by destroying the old text and creating new text.
    const updateSpeech = () => {
      if (speechbubble1Text) {
        speechbubble1Text.destroy();
      }
      if (speechbubble2Text) {
        speechbubble2Text.destroy();
      }
      // Create new text objects for each speech bubble with word wrapping.
      speechbubble1Text = this.add.text(centerX - 470, centerY - 350, speech1, {
        fontSize: '24px',
        fill: '#000000',
        wordWrap: { width: 400, useAdvancedWrap: true }
      });
      speechbubble2Text = this.add.text(centerX + 90, centerY - 350, speech2, {
        fontSize: '24px',
        fill: '#000000',
        wordWrap: { width: 400, useAdvancedWrap: true },
      });
    };

    // Variables related to images and visuals
    const backgroundKey = `backgroundScene-${gameState.scenario}`;
    const image1Key = `image1-${gameState.scenario}`;
    const image2Key = `image2-${gameState.scenario}`;

    gameState.backgroundScene = this.add.image(centerX, centerY - 200, backgroundKey);
    gameState.image1 = this.add.image(centerX - 280, centerY - 35, image1Key);
    gameState.image2 = this.add.image(centerX + 280, centerY - 35, image2Key);

    const speechbubble1 = this.add.image(centerX - 280, centerY - 270, 'speechbubble')
    const speechbubble2 = this.add.image(centerX + 280, centerY - 270, 'speechbubble')
    const rectangle = this.add.rectangle(centerX, centerY + 105, 1024, 30, 0x000000)

    const arrow1r = this.add.image(centerX + 300, centerY - 270, 'arrow1');
    arrow1r.visible = false; 
    
    // Arrow appears after the final question and initiates next scene
    arrow1r.setInteractive();
    arrow1r.on('pointerup', () => {
      this.scene.stop('GameScene');
      this.scene.start('EndScene');
    });
    arrow1r.on('pointerover', () => {
      arrow2r.visible = true; 
    })
    arrow1r.on('pointerout', () => {
      arrow2r.visible = false; 
    })

    const arrow2r = this.add.image(centerX + 300, centerY - 270, 'arrow2');
    arrow2r.visible = false; 

    for (let i = 0; i < 3; i++) {
      const optionBoxX = centerX;
      const optionBoxY = centerY + 180 + i * 80; 
      const optionBox = this.add.rectangle(optionBoxX, optionBoxY, 820, 70, 0xffffff);
      optionBox.setStrokeStyle(1, 0x000000, 1);
    }

    // Function to pause the interactivity of the optionBoxes when typing is in process 
    const setInteractivity = function(enable, totalDelay) {
      console.log(this);
      this.time.delayedCall(totalDelay, () => {
        optionBoxesArray.forEach(optionBox => {
          if (enable) {
            optionBox.setInteractive();
          } else {
            optionBox.disableInteractive();
          }
        });
      }, [], this);  // Passing the current context as the last argument
    }.bind(this);

    // Function to activate the arrow that initiates the next scene. 
    const endGame = function(totalDelay) {

      this.time.delayedCall(totalDelay, () => {
        arrow1r.visible = true; 
      }, [], this);  // Passing the current context as the last argument
    }.bind(this);

    /**
     * Generates a response based on the current question and handles UI updates for speech bubbles.
     */
    const questionresponseGenerator = () => {
      // Access the current question based on the scenario and question number.
      const currentQuestion = questions[scenario][currentQuestionNumber];

      // Update the speech bubble text for the dialogue.
      updateSpeech();

      // Set the text for the first speech bubble.
      speechbubble1Text.setText(speech1temp);

      // Animate typing text for the second speech bubble with the current question.
      typeText(this, speechbubble2Text, currentQuestion.question);

      // If there is temporary speech, generate the corresponding options.
      if (speech1temp) {
        optionGenerator();
      }
    };

    // Invoke the question-response generator function.
    questionresponseGenerator();

    /**
     * Generates interactive option boxes for each possible response to the current question.
     */
    const optionGenerator = () => {
      // Check if we have processed all questions, if so, return to stop.
      if (currentQuestionNumber >= questions.length) {
        return;
      }

      // Access the current question again to generate options for it.
      const currentQuestion = questions[scenario][currentQuestionNumber];
      
      // Initialize typeText delay to zero.
      typeTextDelay = 0;

      // Keep track of active option boxes to manage their state.
      let optionsActive = [];

      // Calculate the accumulated delay for the appearance of option boxes based on text speed.
      let accumulatedDelay = 1000 + typeTextDelay + currentQuestion.question.length * gameState.textSpeed;

      // Loop to create each option box.
      for (let i = 0; i < 3; i++) {
        let option = currentQuestion.options[i];
        let feedback = currentQuestion.options[i].feedback;
        let answer = currentQuestion.options[i].answer;

        // Position for the option box.
        const optionBoxX = centerX;
        const optionBoxY = centerY + 180 + i * 80;

        // Create the option box and set its style.
        const optionBox = this.add.rectangle(optionBoxX, optionBoxY, 820, 70, 0xffffff);
        optionBox.setStrokeStyle(1, 0x000000, 1);
        optionBoxesArray.push(optionBox);

        // Create the text for the option and set its style.
        const optionText = this.add.text(optionBoxX - 390, optionBoxY - 20, '', {
          fontSize: '20px',
          fill: '#000000',
          wordWrap: { width: 800, useAdvancedWrap: true }
        });

        // Animate the typing of option text.
        typeText(this, optionText, option.option, gameState.textSpeed, accumulatedDelay);
        accumulatedDelay += option.option.length * gameState.textSpeed;

        // Add the option box and text to the array for future destruction.
        destroyArray.push({optionText, optionBox});

        // Interactivity setup for the option box: highlight on hover.
        optionBox.on('pointerover', () => {
          if (!optionsActive.includes(optionBox)) {
            optionBox.setStrokeStyle(8, 0x000000, 1);
            optionText.setStyle({ fontStyle: 'bold' });
          }
        });

        // Revert style when the pointer is no longer over the option box.
        optionBox.on('pointerout', () => {
          if (!optionsActive.includes(optionBox)) {
            optionBox.setStrokeStyle(1, 0x000000, 1);
            optionText.setStyle({ fontStyle: 'normal' });
            optionText.setColor('#000000');
          }
        });
        }

          /**
           * Handles the 'pointerup' event on an option box. It determines the game state changes based on the selected answer.
           */
          optionBox.on('pointerup', () => {
            // If the answer is incorrect (indicated by `answer` being 0).
            if (answer === 0) {
              // Change the option box's border to red to indicate incorrect choice.
              optionBox.setStrokeStyle(8, 0xff0000, 1);
              // Bold the option text for emphasis.
              optionText.setStyle({ fontStyle: 'bold' });
              // Add the option box to the array of active options.
              optionsActive.push(optionBox);
              // Disable further interactions temporarily.
              setInteractivity(false, 0);
              // Update the speech bubble with the selected option text.
              updateSpeech();
              // Display the selected option text in the first speech bubble.
              typeText(this, speechbubble1Text, option.option);
              // Display the feedback for the incorrect answer in the second speech bubble.
              typeText(this, speechbubble2Text, feedback, gameState.textSpeed, typeTextDelay)
              // Calculate the delay for showing feedback based on the text length and speed.
              let tempDelay = option.option.length * gameState.textSpeed + feedback.length * gameState.textSpeed;
              // Re-enable interactions after the delay.
              setInteractivity(true, tempDelay);
            }
            // If the answer is correct (indicated by `answer` being 1).
            else if (answer === 1) {
              // Change the option box's border to green to indicate correct choice.
              optionBox.setStrokeStyle(8, 0x228B22, 1);
              // Bold the option text for emphasis.
              optionText.setStyle({ fontStyle: 'bold' });
              // Add the option box to the array of active options.
              optionsActive.push(optionBox);
              // Update the speech bubbles for the next part of the conversation.
              updateSpeech();
              // Display the selected option text in the first speech bubble.
              typeText(this, speechbubble1Text, option.option);
              // Save the selected option text for future reference.
              speech1temp = option.option;
              // Move on to the next question.
              currentQuestionNumber += 1;
              // Destroy the current option boxes and texts to clean up the UI.
              destroyArray.forEach(item => {
                item.optionText.destroy();
                item.optionBox.destroy();
              });
              // Reset the destroy and option boxes arrays for the next question.
              destroyArray.length = 0;
              optionBoxesArray.length = 0;
              // Call the question-response generator after a delay, allowing for text animation.
              this.time.delayedCall(typeTextDelay + 1000, questionresponseGenerator, [], this);
            } 
            // If the answer is neither 0 nor 1, it is considered a special case (e.g., ending the game).
            else { 
              // Change the option box's border to green to indicate selection.
              optionBox.setStrokeStyle(8, 0x228B22, 1);
              // Bold the option text for emphasis.
              optionText.setStyle({ fontStyle: 'bold' });
              // Add the option box to the array of active options.
              optionsActive.push(optionBox);
              // Update the speech bubble with the selected option text.
              updateSpeech();
              // Display the selected option text in the first speech bubble.
              typeText(this, speechbubble1Text, option.option);
              // End the game after a set delay, allowing for the text to show.
              endGame(2000 + option.option.length * gameState.textSpeed);
            }
          });

          // After setting up the 'pointerup' event, enable interactivity for the new options.
          setInteractivity(true, accumulatedDelay);

          // Generate the initial options.
          optionGenerator();  
            
          }
      }
} 