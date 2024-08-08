import { gameState } from './gameState.js';
import { typeText } from './gameFunctions.js';
import { createBox } from './gameFunctions.js';
import { scenarios } from './gameQuestions.js';


export default class GameScene extends Phaser.Scene {

  constructor() {
    super({ key: 'GameScene' });
    this.supportLeft = 50;
    this.supportRight = 50;
    this.leaningPolitical = 0;
    this.leaningSocioeconomic = 0;
    this.leaningCultural = 0;
    
    this.scenarioArray = scenarios[0];
    this.scenarioCounter = 0;

    this.scenarioCurrent = this.scenarioArray[this.scenarioCounter]
    this.scenarioChoices = [];
    this.scenarioChoicesScores = [];
   
    this.scenarioPrevious = false;
    this.scenarioPreviousCounter = this.scenarioCounter;

    this.gameOver = false;
    this.gameOverWentPrevious = false;

    this.optionBoxArray = [];
  }

  preload() {

    this.load.image( "background", "assets/background.png")
    this.load.image( "table", "assets/table.png")
    this.load.image( "arrowVertical", "assets/arrowvertical.png")
    this.load.image( "arrowHorizontal", "assets/arrowhorizontal.png")
    this.load.spritesheet(
      "images",
      "assets/images.png",
      {
        frameWidth: 360,
        frameHeight: 320,
      })
  }


  create() {
    this.setupGame();
  }

  setupGame() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const text = '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.';
    const textS = '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.';
    
    const background = this.add.image(centerX, centerY, 'background');

    this.questionBox = createBox(this, centerX - 350, centerY - 275, 1100, 450, 20, centerX - 875, centerY - 475, text, 'bold 30px', '', 1060, false);
    this.questionBox.box.setFillStyle(0xdddddd)

    this.responseBox = createBox(this, centerX - 350, centerY + 85, 1100, 150, 20, centerX - 875, centerY + 35, textS, 'bold 26px', '', 1060, false);
    this.responseBox.box.setFillStyle(0xdddddd)

    this.buttonBackground = this.add.rectangle(centerX - 350, centerY - 20, 1100, 50, 0x000000)
    this.previousBox = createBox(this, centerX - 830, centerY - 20, 150, 50, 10, centerX - 890, centerY - 30, 'PREVIOUS', 'bold 25px', '', 150, true);
    this.previousBox.box.setFillStyle(0x636363);
    this.nextBox = createBox(this, centerX + 130, centerY - 20, 150, 50, 10, centerX + 100, centerY - 30, 'NEXT', 'bold 25px', '', 150, true);
    this.nextBox.box.setFillStyle(0x636363);
    this.exitBox = createBox(this, centerX - 350, centerY - 20, 200, 80, 4, centerX - 400, centerY - 40, 'EXIT', 'bold 40px', 'center', 1060, true);
    this.exitBox.box.setFillStyle(0x636363);
    this.exitBox.box.visible = false;
    
    // pointer events are set here to prevent creation of multiple pointers.  
    this.previousBox.box.on('pointerup', () => {
      this.activatePreviousButton();
    })
    
    this.nextBox.box.on('pointerup', () => {
      if (this.optionBoxArray) {
        this.optionBoxArray.forEach(item => {
          item.optionBox.box.destroy();
          item.optionBox.text.destroy();
        })
        this.optionBoxArray.length = 0;
      }

      this.activateNextButton()
    })

    this.exitBox.box.on('pointerup', () => {
      this.supportLeft = 50;
      this.supportRight = 50;
      this.leaningPolitical = 0;
      this.leaningSocioeconomic = 0;
      this.leaningCultural = 0;
      
      this.scenarioArray = scenarios[0];
      this.scenarioCounter = 0;
  
      this.scenarioCurrent = this.scenarioArray[this.scenarioCounter]
      this.scenarioChoices = [];
      this.scenarioChoicesScores = [];
     
      this.scenarioPrevious = false;
      this.scenarioPreviousCounter = this.scenarioCounter;
  
      this.gameOver = false;
      this.gameOverWentPrevious = false;
  
      this.optionBoxArray = [];

      gameState.firstGame = false; 

      this.scene.stop('GameScene');
      this.scene.start('EndScene');
    })


    this.imageBox = this.add.rectangle(centerX + 600, centerY - 260, 550, 450, 0x808080).setStrokeStyle(60, 0x000000);
    this.images = this.add.sprite(centerX + 600, centerY - 260, 'images', 0).setScale(1.4, 1.4);
    
    const table = this.add.image(centerX + 600, centerY + 260, 'table');

    this.barSupportColor = [0xff0000, 0xff0000, 0xff0000, 0xff4d00, 0xff7400 ,0xFFFF00, 0x00FF00, 0x00FF00, 0x00D100, 0x00A300, 0x007500];
    
    this.barSupportLeft = createBox(this, centerX + 542, centerY + 123, 2.35 * this.supportLeft, 108, 0, centerX + 522, centerY + 110, this.supportLeft, 'bold 30px', '', '', false);
    this.barSupportLeft.box.setFillStyle(0xFFFF00);
    this.barSupportLeftArrowUp = this.add.image(centerX + 540, centerY + 90, 'arrowVertical').setDepth(1);
    this.barSupportLeftArrowDown = this.add.image(centerX + 540, centerY + 160, 'arrowVertical').setDepth(1).setScale(1, -1);

    this.barSupportRight = createBox(this, centerX + 778, centerY + 123, 2.35 * this.supportRight, 108, 0, centerX + 762, centerY + 110, this.supportRight, 'bold 30px', '', '', false);
    this.barSupportRight.box.setFillStyle(0xFFFF00);
    this.barSupportRightArrowUp = this.add.image(centerX + 780, centerY + 90, 'arrowVertical').setDepth(1);
    this.barSupportRightArrowDown = this.add.image(centerX + 780, centerY + 160, 'arrowVertical').setDepth(1).setScale(1, -1);


    this.barPolitical = this.add.rectangle(centerX + 660, centerY + 289, 4.7 * this.leaningPolitical, 108, 0xFFFFFF).setOrigin(1, 1);
    this.barPoliticalArrowRight = this.add.image(centerX + 860, centerY + 240, 'arrowHorizontal').setDepth(1);
    this.barPoliticalArrowLeft = this.add.image(centerX + 460, centerY + 240, 'arrowHorizontal').setDepth(1).setScale(-1, 1);

    this.barSocioeconomic = this.add.rectangle(centerX + 660, centerY + 402, 4.7 * this.leaningSocioeconomic, 108, 0xFFFFFF).setOrigin(1, 1);
    this.barSocioeconomicArrowRight = this.add.image(centerX + 860, centerY + 350, 'arrowHorizontal').setDepth(1);
    this.barSocioeconomicArrowLeft = this.add.image(centerX + 460, centerY + 350, 'arrowHorizontal').setDepth(1).setScale(-1, 1);
   
    this.barCultural = this.add.rectangle(centerX + 660, centerY + 514, 4.7 * this.leaningCultural, 108, 0xFFFFFF).setOrigin(1, 1);
    this.barCulturalArrowRight = this.add.image(centerX + 860, centerY + 460, 'arrowHorizontal').setDepth(1);
    this.barCulturalArrowLeft = this.add.image(centerX + 460, centerY + 460, 'arrowHorizontal').setDepth(1).setScale(-1, 1);

   this.updateScenario();
  }

  updateScenario() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    this.previousBox.box.setInteractive();
    
    if (!this.scenarioPrevious) {
      this.nextBox.box.disableInteractive();
      this.images.setFrame(this.scenarioCounter)
    } else {
      this.nextBox.box.setInteractive()
      this.images.setFrame(this.scenarioPreviousCounter)
    }

    this.questionBox.text.setText('')
    this.responseBox.text.setText('')

    this.barSupportLeftArrowUp.visible = false; 
    this.barSupportLeftArrowDown.visible = false; 
    this.barSupportRightArrowUp.visible = false; 
    this.barSupportRightArrowDown.visible = false; 
    this.barPoliticalArrowRight.visible = false;
    this.barPoliticalArrowLeft.visible = false;
    this.barSocioeconomicArrowRight.visible = false;
    this.barSocioeconomicArrowLeft.visible = false;
    this.barCulturalArrowRight.visible = false;
    this.barCulturalArrowLeft.visible = false;

    const optionBoxes = () => {
      // enables interactivity
      this.input.enabled = true;
      
      for (let i = 0; i < 3; i++) {
        let option;

        if (this.scenarioPrevious === false) {
          option = this.scenarioCurrent.options[i];
        } else {
          option = this.scenarioChoices[this.scenarioPreviousCounter].scenario.options[i]
        }

        const optionBoxX = centerX + 50;
        const optionBoxY = centerY + 230 + i * 120; // Adjust the Y position for each option
        const optionBox = createBox(this, optionBoxX - 400, optionBoxY, 1100, 120, 6, optionBoxX - 925, optionBoxY - 45, option.option, 'bold 30px', '', 1060);
        this.optionBoxArray.push({optionBox});

        optionBox.box.on('pointerup', () => {
          this.updateAfterPlayerResponse(option)

          this.scenarioChoices.push({scenario: this.scenarioCurrent, response: option})
          optionBox.box.setFillStyle(0x808080)
        })
      };
  
    }

    

    if (!gameState.firstGame && this.scenarioPrevious === false) {
      this.questionBox.text.setText(this.scenarioCurrent.scenario);
      optionBoxes();
    } else if (this.scenarioPrevious === false) {
      typeText(this, this.questionBox.text, this.scenarioCurrent.scenario, 0, 0, () => {optionBoxes()}, 1000);
    } else {
      this.questionBox.text.setText(this.scenarioChoices[this.scenarioPreviousCounter].scenario.scenario);
      optionBoxes();

      if (this.optionBoxArray) {
        this.optionBoxArray.forEach(item => {
          item.optionBox.box.disableInteractive();
          item.optionBox.text.disableInteractive();

          if (item.optionBox.text.text === this.scenarioChoices[this.scenarioPreviousCounter].response.option) {
            item.optionBox.box.setFillStyle(0x808080);
          }
        })
      }
      this.updateAfterPlayerResponse(this.scenarioChoices[this.scenarioPreviousCounter].response);
    }
  }

  updateAfterPlayerResponse(response) {
    if (this.scenarioPrevious === false) {
      
      if (this.supportLeft + response.left <= 100) {
        if (this.supportLeft + response.left > 100) {
          this.supportLeft = 100;
        } else if (this.supportLeft + response.left <= 0) {
          this.gameOver = true;
          this.supportLeft += response.left;
        } else {
          this.supportLeft += response.left;
        }
      } 
  
      if (this.supportRight + response.right <= 100) {
        if (this.supportRight + response.right > 100) {
          this.supportRight = 100;
        } else if (this.supportRight + response.right <= 0) {
          this.gameOver = true;
          this.supportRight += response.right;
        } else {
          this.supportRight += response.right;
        }
      } 
  
      if (response.political) {
        if (this.leaningPolitical + response.political <= 50 && this.leaningPolitical + response.political >= -50) {
          if (this.leaningPolitical + response.political >= 50) {
            this.leaningPolitical = 50;
          } else if (this.leaningPolitical + response.political <= -50 ) {
            this.leaningPolitical = -50;
          } else {
            this.leaningPolitical += response.political;
          }
        }
      } 
  
      if (response.socioeconomic) {
        if (this.leaningSocioeconomic + response.socioeconomic <= 50 && this.leaningSocioeconomic + response.socioeconomic >= -50) {
          if (this.leaningSocioeconomic + response.socioeconomic >= 50) {
            this.leaningSocioeconomic = 50;
          } else if (this.leaningSocioeconomic + response.socioeconomic <= -50 ) {
            this.leaningSocioeconomic = -50;
          } else {
            this.leaningSocioeconomic += response.socioeconomic;
          }
        }
      } 
  
      if (response.cultural) {
        if (this.leaningCultural + response.cultural <= 50 && this.leaningCultural + response.cultural >= -50) {
          if (this.leaningCultural + response.cultural >= 50) {
            this.leaningCultural = 50;
          } else if (this.leaningCultural + response.cultural <= -50 ) {
            this.leaningCultural = -50;
          } else {
            this.leaningCultural += response.cultural;
          }
        }
      } 

      this.scenarioChoicesScores.push({left: this.supportLeft, right: this.supportRight, political: this.leaningPolitical, socioeconomic: this.leaningSocioeconomic, cultural: this.leaningCultural});

      typeText(this, this.responseBox.text, response.result, 0, 0, () => {this.updateBars(response)});
    } else {
      this.responseBox.text.setText(response.result);

      this.supportLeft = this.scenarioChoicesScores[this.scenarioPreviousCounter].left;
      this.supportRight = this.scenarioChoicesScores[this.scenarioPreviousCounter].right;
      this.leaningPolitical = this.scenarioChoicesScores[this.scenarioPreviousCounter].political;
      this.leaningSocioeconomic = this.scenarioChoicesScores[this.scenarioPreviousCounter].socioeconomic;
      this.leaningCultural = this.scenarioChoicesScores[this.scenarioPreviousCounter].cultural;

      this.updateBars(response);
    }


  }

  updateBars(results) {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const barSupportColor = [0x750000, 0x750000, 0x750000, 0x750000, 0xff0000, 0xff0000, 0xff4d00, 0xff4d00, 0xff7400, 0xff7400, 0xFFFF00, 0xFFFF00, 0x00FF00, 0x00FF00, 0x00FF00, 0x00D100, 0x00D100, 0x00A300, 0x00A300, 0x007500, 0x007500, 0x007500];

    this.barSupportLeft.box.destroy();
    this.barSupportLeft.text.destroy();
    this.barSupportLeft = createBox(this, centerX + 542, centerY + 123, 2.35 * this.supportLeft, 108, 0, centerX + 522, centerY + 110, this.supportLeft, 'bold 30px', '', '', false);
    this.barSupportLeft.box.setFillStyle(barSupportColor[this.supportLeft / 5]);

    if (results.left > 0) {
      this.barSupportLeftArrowUp.visible = true; 
    } else if (results.left < 0) {
      this.barSupportLeftArrowDown.visible = true; 
    }

    this.barSupportRight.box.destroy();
    this.barSupportRight.text.destroy();
    this.barSupportRight = createBox(this, centerX + 778, centerY + 123, 2.35 * this.supportRight, 108, 0, centerX + 762, centerY + 110, this.supportRight, 'bold 30px', '', '', false);
    this.barSupportRight.box.setFillStyle(barSupportColor[this.supportRight / 5]);

    if (results.right > 0) {
      this.barSupportRightArrowUp.visible = true; 
    } else if (results.right < 0) {
      this.barSupportRightArrowDown.visible = true; 
    }

    this.barPolitical.destroy();
    this.barPolitical = this.add.rectangle(centerX + 660, centerY + 289, 4.7 * this.leaningPolitical, 108, 0xFFFFFF).setOrigin(1, 1);
    if (this.leaningPolitical > 0) {
      this.barPolitical.setFillStyle(0xFF0000);
    } else if (this.leaningPolitical < 0) {
      this.barPolitical.setFillStyle(0x00000FF)
    }
    if (results.political) {
      if (results.political > 0) {
        this.barPoliticalArrowLeft.visible = true;
      } else if (results.political < 0) {
        this.barPoliticalArrowRight.visible = true;
      }
    }

    this.barSocioeconomic.destroy();
    this.barSocioeconomic = this.add.rectangle(centerX + 660, centerY + 402, 4.7 * this.leaningSocioeconomic, 108, 0xFFFFFF).setOrigin(1, 1);
    if (this.leaningSocioeconomic > 0) {
      this.barSocioeconomic.setFillStyle(0xFF0000);
    } else if (this.leaningSocioeconomic < 0) {
      this.barSocioeconomic.setFillStyle(0x00000FF)
    }
    if (results.socioeconomic) {
      if (results.socioeconomic > 0) {
        this.barSocioeconomicArrowLeft.visible = true;
      } else if (results.socioeconomic < 0) {
        this.barSocioeconomicArrowRight.visible = true;
      }
    }

    this.barCultural.destroy();
    this.barCultural = this.add.rectangle(centerX + 660, centerY + 514, 4.7 * this.leaningCultural, 108, 0xFFFFFF).setOrigin(1, 1);
    if (this.leaningCultural > 0) {
      this.barCultural.setFillStyle(0xFF0000);
    } else if (this.leaningCultural < 0) {
      this.barCultural.setFillStyle(0x00000FF)
    }
    if (results.cultural) {
      if (results.cultural > 0) {
        this.barCulturalArrowLeft.visible = true;
      } else if (results.cultural < 0) {
        this.barCulturalArrowRight.visible = true;
      }
    }

    this.input.enabled = true;
    this.nextBox.box.setInteractive();

    if (!this.scenarioPrevious) {
      this.previousBox.box.disableInteractive();
    } else if (this.scenarioPreviousCounter === 0) {
      this.previousBox.box.disableInteractive();
    } else {
      this.previousBox.box.setInteractive(); 
    }


    if (this.optionBoxArray) {
      this.optionBoxArray.forEach(item => {
        item.optionBox.box.disableInteractive();
        item.optionBox.text.disableInteractive();
      })
    }
  }

  activateNextButton() {
    console.log(this.scenarioCounter)
    console.log(this.scenarioPreviousCounter)
    if (this.scenarioCounter === this.scenarioArray.length - 1 && !this.scenarioPrevious) {
      this.gameOver = true;
      this.gameOverFunction();
    } else if (!this.scenarioPrevious && this.scenarioCounter === this.scenarioPreviousCounter) { 
      this.scenarioCounter += 1;
      this.scenarioPreviousCounter = this.scenarioCounter;
      this.scenarioCurrent = this.scenarioArray[this.scenarioCounter]

      if (!this.gameOver) {
        this.updateScenario();
      } else if (this.scenarioPrevious) {
        this.updateScenario();
      } else {
        this.gameOverFunction();
      }
    } else {
      if (this.scenarioPreviousCounter < this.scenarioCounter) {
        this.scenarioPreviousCounter +=1;
      } else {
        this.nextBox.box.disableInteractive();
      }
      this.scenarioCurrent = this.scenarioArray[this.scenarioPreviousCounter]

      if (this.scenarioCounter === this.scenarioPreviousCounter) {
        this.scenarioPrevious = false;
        this.scenarioCurrent = this.scenarioArray[this.scenarioCounter]
        this.scenarioPreviousCounter = this.scenarioCounter;
      }

      if (!this.gameOver) {
        this.updateScenario();
      } else if (this.scenarioPrevious && this.scenarioPreviousCounter <= this.scenarioArray.length - 1) {
        this.updateScenario();
      } else {
        this.gameOverFunction();
      }
    }
  }

  activatePreviousButton() {
    if (this.scenarioPreviousCounter) {
      this.scenarioPrevious = true;
      this.scenarioPreviousCounter -= 1;

      if (this.optionBoxArray) {
        this.optionBoxArray.forEach(item => {
          item.optionBox.box.destroy();
          item.optionBox.text.destroy();
        })
        this.optionBoxArray.length = 0;

        this.updateScenario();
      }

      if (this.gameOver) {
        this.gameOverWentPrevious = true;
      }

    }
  }

  gameOverFunction() {
    this.scenarioPrevious = true; 

    this.nextBox.box.disableInteractive();

    let gameOverText = '';
    let gameOverImage = '';

    if (this.supportLeft <= 0) {
      gameOverText = 'After months of unrest, your presidency faces a major crisis. Despite your efforts, the radical left has grown stronger, viewing your government as failing to solve key issues. The guerilla movement has gained enough support to overthrow your administration. Chaos fills the streets as the government falls, ending your term in turmoil. This is a clear sign of how fragile democracy can be when facing extreme political pressures. Can you learn from this and find ways to prevent such a collapse in the future?'
      gameState.gameOver = 'lost';
    } else if (this.supportRight <= 0) {
      gameOverText = 'After months of growing tension, your presidency faces a dire situation. Despite your efforts to unite the country, the radical right within the military has gained strength, viewing your leadership as weak and ineffective. The military coup has successfully deposed you from power. The streets are now under military control, and hopes for a united Colombia under your guidance have been crushed. Your presidency ends abruptly, highlighting the fragility of democracy in the face of extreme political forces. Can you learn from this experience and find ways to prevent such a takeover in the future?'
      gameState.gameOver = 'lost';
    } else {
      gameOverText = 'Congratulations! You have successfully navigated the complex challenges of your presidency and brought lasting peace and prosperity to Colombia. Through your balanced decisions and strategic actions, you have united the country, improved the economy, and strengthened democratic values. Your leadership has prevented political radicalization and ensured stability, earning you a place in history as a peacemaker and visionary leader. The people of Colombia now look to the future with hope and confidence, thanks to your efforts. Well done!'
      gameState.gameOver = 'won';
    }

    const loadExit = () => {
      this.input.enabled = true;
      this.previousBox.box.setInteractive();
      this.responseBox.text.setText('Analyze your previous decisions before you exit the game.')
      this.exitBox.box.visible = true;
    }

    this.responseBox.text.setText('')
    
    if (!this.gameOverWentPrevious) {
      typeText(this, this.questionBox.text, gameOverText, 0, 0, () => {loadExit()}, 1000);
    } else {
      this.questionBox.text.setText(gameOverText)
      loadExit();
    }



  }


}