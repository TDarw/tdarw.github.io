import questions from "./questions.js";
import { gameState } from './gameState.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  

  
  
  preload() {
    this.load.image('line', '/SilvanasGameTest/assets/line.png');
    this.load.image('speechbubble', '/SilvanasGameTest/assets/speechbubble.png');

    const backgroundKey = `backgroundScene-${gameState.scenario}`;
    const image1Key = `image1-${gameState.scenario}`;
    const image2Key = `image2-${gameState.scenario}`;

    if (gameState.scenario === 'britishSlang' || gameState.scenario === 'britishSlangQuiz') {
      this.load.image(backgroundKey, '/SilvanasGameTest/assets/britishSlang/backgroundScene.png');
      this.load.image(image1Key, '/SilvanasGameTest/assets/britishSlang/image1.png');
      this.load.image(image2Key, '/SilvanasGameTest/assets/britishSlang/image2.png');
    }
    if (gameState.scenario === 'australianSlang' || gameState.scenario === 'australianSlangQuiz') {
      this.load.image(backgroundKey, '/SilvanasGameTest/assets/australianSlang/backgroundScene.png');
      this.load.image(image1Key, '/SilvanasGameTest/assets/australianSlang/image1.png');
      this.load.image(image2Key, '/SilvanasGameTest/assets/australianSlang/image2.png');
    }

  }
  
  create() {

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const scenario = gameState.scenario; 
    
    let currentQuestionNumber = 0;
    let speech1 = '';
    let speech2 = '';
    let speechbubble1Text = '';
    let speechbubble2Text = '';
    let speech1temp = '';
    let typeTextDelay = 0;
    let typingInProgress = false;

    const destroyArray = [];
    const optionBoxesArray = [];

    // Place the background's origin at the top-left corner (default behavior)
    // and position it at (0,0) to cover the entire game area.
    //gameState.backgroundTemp = this.add.image(0, 0, 'background').setOrigin(0, 0);

    const typeText = (scene, textObject, targetText, speed = gameState.textSpeed, startDelay = 0) => {
      let currentText = '';
      let index = 0;
      typeTextDelay = targetText.length * gameState.textSpeed;
      typingInProgress = true;
      let maxRepeats = targetText.length;
      
      scene.time.delayedCall(startDelay, () => {
          const interval = scene.time.addEvent({
              delay: speed,
              repeat: targetText.length - 1,
              callback: () => {
                  currentText += targetText[index];
                  textObject.setText(currentText);
                  index++;
                  if (index >= maxRepeats) {
                    interval.remove();  // Remove the event manually
                    typingInProgress = false;
                }
            },
            callbackScope: scene
          });
      });
    }

    const updateSpeech = () => {
      if (speechbubble1Text) {
        speechbubble1Text.destroy();
      }
      if (speechbubble2Text) {
        speechbubble2Text.destroy();
      }
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
    }

    const backgroundKey = `backgroundScene-${gameState.scenario}`;
    const image1Key = `image1-${gameState.scenario}`;
    const image2Key = `image2-${gameState.scenario}`;

    gameState.backgroundScene = this.add.image(centerX, centerY - 200, backgroundKey);
    gameState.image1 = this.add.image(centerX - 280, centerY - 35, image1Key);
    gameState.image2 = this.add.image(centerX + 280, centerY - 35, image2Key);

    const speechbubble1 = this.add.image(centerX - 280, centerY - 270, 'speechbubble')
    const speechbubble2 = this.add.image(centerX + 280, centerY - 270, 'speechbubble')
    const rectangle = this.add.rectangle(centerX, centerY + 105, 1024, 30, 0x000000)

    for (let i = 0; i < 3; i++) {
      const optionBoxX = centerX;
      const optionBoxY = centerY + 180 + i * 80; 
      const optionBox = this.add.rectangle(optionBoxX, optionBoxY, 820, 70, 0xffffff);
      optionBox.setStrokeStyle(1, 0x000000, 1);
    }

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

    const endGame = function(totalDelay) {
      this.time.delayedCall(totalDelay, () => {
        this.scene.stop('GameScene');
        this.scene.start('EndScene');
      }, [], this);  // Passing the current context as the last argument
    }.bind(this);

    const questionresponseGenerator = () => {
      const currentQuestion = questions[scenario][currentQuestionNumber];

      updateSpeech();

      speechbubble1Text.setText(speech1temp)

      typeText(this, speechbubble2Text, currentQuestion.question);

      if (speech1temp) {
        optionGenerator();
      }
    }

    questionresponseGenerator();

    const optionGenerator = () => {
      if (currentQuestionNumber >= questions.length) {
        return; // Stop the recursion if we've processed all questions
      }

      const currentQuestion = questions[scenario][currentQuestionNumber];
      
      typeTextDelay = 0;

      let optionsActive = []; 

      let accumulatedDelay = 1000 + typeTextDelay + currentQuestion.question.length * gameState.textSpeed;

      for (let i = 0; i < 3; i++) {
        let option = currentQuestion.options[i];
        let feedback = currentQuestion.options[i].feedback;
        let answer = currentQuestion.options[i].answer; 

         // Create the options
         const optionBoxX = centerX;
         const optionBoxY = centerY + 180 + i * 80; 
         const optionBox = this.add.rectangle(optionBoxX, optionBoxY, 820, 70, 0xffffff);
         optionBox.setStrokeStyle(1, 0x000000, 1);
         optionBoxesArray.push(optionBox);
     
         const optionText = this.add.text(optionBoxX - 390  , optionBoxY - 20, '', {
           fontSize: '20px',
           fill: '#000000',
           wordWrap: { width: 800, useAdvancedWrap: true }
         });

         typeText(this, optionText, option.option, gameState.textSpeed, accumulatedDelay);
         accumulatedDelay += option.option.length * gameState.textSpeed;


         destroyArray.push({optionText, optionBox}); 

         optionBox.on('pointerover', () => {
          if (!optionsActive.includes(optionBox)) {
            optionBox.setStrokeStyle(8, 0x000000, 1);
            optionText.setStyle({ fontStyle: 'bold' });
            }

          });
    
        optionBox.on('pointerout', () => {
          if (!optionsActive.includes(optionBox)) {
            optionBox.setStrokeStyle(1, 0x000000, 1);
            optionText.setStyle({ fontStyle: 'normal' });
            optionText.setColor('#000000');
            }
          });

          optionBox.on('pointerup', () => {
            if (answer === 0) {
              optionBox.setStrokeStyle(8, 0xff0000, 1);
              optionText.setStyle({ fontStyle: 'bold' });
              optionsActive.push(optionBox);
              setInteractivity(false, 0);
              updateSpeech();
              typeText(this, speechbubble1Text, option.option);
              typeText(this, speechbubble2Text, feedback, gameState.textSpeed, typeTextDelay)
              let tempDelay = option.option.length * gameState.textSpeed + feedback.length * gameState.textSpeed;
              setInteractivity(true, tempDelay);
            } else if (answer === 1) {
              optionBox.setStrokeStyle(8, 0x228B22, 1);
              optionText.setStyle({ fontStyle: 'bold' });
              optionsActive.push(optionBox);
              updateSpeech();
              typeText(this, speechbubble1Text, option.option);
              speech1temp = option.option;
              currentQuestionNumber += 1;
              destroyArray.forEach(item => {
                item.optionText.destroy();
                item.optionBox.destroy();
              });
              destroyArray.length = 0;
              optionBoxesArray.length = 0;
              this.time.delayedCall(typeTextDelay + 1000, questionresponseGenerator, [], this);
            } else { 
              optionBox.setStrokeStyle(8, 0x228B22, 1);
              optionText.setStyle({ fontStyle: 'bold' });
              optionsActive.push(optionBox);
              updateSpeech();
              typeText(this, speechbubble1Text, option.option);
            
              endGame(2000 + option.option.length * gameState.textSpeed)
            }
          });

      }
      
      setInteractivity(true, accumulatedDelay);
    }

    optionGenerator();  
    
 }


} 