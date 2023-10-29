import { gameState } from './gameState.js';
import questions from "./questions.js";

export default class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' });
  }

  preload() {
    this.load.image("arrow1", "../assets/arrow1.png",);
    this.load.image("arrow2", "../assets/arrow2.png",);
  }

  create() {
    const scenarioDialog = questions[gameState.scenario];

    let totalCharactersDialog = 0;

    scenarioDialog.forEach(item => {
      // Add the length of the question text
      totalCharactersDialog += item.question.length;

      // Iterate over the options and add the length of each option text
      item.options.forEach(option => {
        totalCharactersDialog += option.option.length;
      });
    });

    let typeTextDelay = 0;

    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    const arrow1r = this.add.image(centerX + 470, centerY - 340, 'arrow1');
    arrow1r.setScale(0.5)
    arrow1r.visible = false; 

    arrow1r.setInteractive();
    arrow1r.on('pointerup', () => {
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

      



    })

    const typeText = (scene, textObject, targetText, speed = gameState.textSpeed, startDelay = 0) => {
      return new Promise((resolve) => {
          let currentText = '';
          let index = 0;
  
          const startingX = textObject.x - (textObject.displayWidth / 2);
      
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
                      if(index === targetText.length) resolve(); // Resolve the promise when typing is complete
                  },
              });
          });
      });
    };

const createDialog = async () => {  // Note the async keyword here
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

        await typeText(this, questionText, question, gameState.textSpeed, 0);  // Note the await keyword here

        yOffset += questionText.displayHeight + 5; // Adjust yOffset based on the height of the questionText + padding
  
        for (let j = 0; j < responses.length; j++) {
            if (responses[j].answer === 1 || responses[j].answer === 2) {
                let optionText = responses[j].option;
                const optionY = centerY - 350 + yOffset;

                const optionDisplay = this.add.text(questionX, optionY, '', {
                    fontSize: '14px',
                    fill: '#555555',
                    wordWrap: { width: 1000, useAdvancedWrap: true }
                }).setOrigin(0.5);

                await typeText(this, optionDisplay, optionText, gameState.textSpeed, 0);  // Note the await keyword here
                yOffset += optionDisplay.displayHeight + 30; // Adjust yOffset based on the height of the optionDisplay + padding
            }
        }
    }
  }

    createDialog();

    const continueButton = () => {
      arrow1r.visible = true; 
    };

    const continueButtonSpeed = gameState.textSpeed;
    console.log(continueButtonSpeed)

    
    this.time.delayedCall(totalCharactersDialog * continueButtonSpeed, continueButton, [], this);
    


  }
}