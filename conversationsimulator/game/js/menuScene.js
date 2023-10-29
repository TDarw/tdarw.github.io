import { gameState } from './gameState.js';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    this.load.image("startbackground", "https://tdarw.github.io/conversationsimulator/assets/startbackground.png",);
    this.load.image("arrow1", "https://tdarw.github.io/conversationsimulator/assets/arrow1.png",);
    this.load.image("arrow2", "https://tdarw.github.io/conversationsimulator/assets/arrow2.png",);
  }

  create() {
    let typeTextDelay = 0;

    let currentOption = 0; 

    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    const options = [
      {
        title: "British Slang",
        text1: "Oi mate",
        text2: "Cheerio!"
      },
      {
        title: "Australian Slang",
        text1: "G'day mate",
        text2: "Crikey!"
      }
    ]

    const background = this.add.image(centerX, centerY, 'startbackground')
    const arrow1r = this.add.image(centerX + 400, centerY, 'arrow1');
    const arrow2r = this.add.image(centerX + 400, centerY, 'arrow2');
    arrow2r.visible = false; 

    const arrow1l = this.add.image(centerX - 400, centerY, 'arrow1');
    arrow1l.scaleX = -1;  
    const arrow2l = this.add.image(centerX - 400, centerY, 'arrow2');
    arrow2l.scaleX = -1;  
    arrow2l.visible = false;
    



    const typeText = (scene, textObject, targetText, speed = 50, startDelay = 0) => {
      let currentText = '';
      let index = 0;
      typeTextDelay += targetText.length * 50;

    
      // Calculate the starting x position based on the final text width
      //const startingX = textObject.x - (textObject.displayWidth / 2);
    
      scene.time.delayedCall(startDelay, () => {
        const interval = scene.time.addEvent({
          delay: speed,
          repeat: targetText.length - 1,
          callback: function () {
            currentText += targetText[index];
            textObject.setText(currentText);
    
            // Calculate the new x position based on the updated text width
            //const updatedX = startingX + (textObject.displayWidth / 2);
            //textObject.setX(updatedX);
    
            index++;
          },
        });
      });
    };

    const updateText = () => {
      console.log(currentOption)
      let textUpdate = options[currentOption]
      title.setText(textUpdate.title)
      start.setText(textUpdate.text1)
      text2.setText(textUpdate.text2)
    }

    const title = this.add.text(centerX, centerY - 300, '', {
      fontSize: '70px',
      fill: '#000000',
    }).setOrigin(0.5);

   
    
    const start = this.add.text(centerX - 25, centerY - 135, '', {
      fontSize: '22px',
      fill: '#000000',
      align: 'center',
      wordWrap: { width: 80, useAdvancedWrap: true }
    }).setOrigin(0.5);

    const text2 = this.add.text(centerX + 100, centerY - 135, '', {
      fontSize: '24px',
      fill: '#000000',
      align: 'center',
      wordWrap: { width: 120, useAdvancedWrap: true }
    }).setOrigin(0.5);







    start.setInteractive();

    start.on('pointerover', () => {
      start.setStyle({ fontStyle: 'bold' })
    })
    start.on('pointerout', () => {
      start.setStyle({ fontStyle: 'normal' })
    })

    start.on('pointerdown', () => {
      if (currentOption === 0) {
        gameState.scenario = 'britishSlang';
      } else if (currentOption === 1) {
        gameState.scenario = 'australianSlang';
      }

      this.scene.stop('MenuScene');
      this.scene.start('GameScene');
    });

    arrow1r.setInteractive();
    arrow1r.on('pointerup', () => {
      if (currentOption < options.length - 1) {
        currentOption += 1;
      }
      updateText();
    })
    arrow1r.on('pointerover', () => {
      arrow2r.visible = true; 
    })
    arrow1r.on('pointerout', () => {
      arrow2r.visible = false; 
    })

    arrow1l.setInteractive();
    arrow1l.on('pointerup', () => {
      if (currentOption > 0) {
        currentOption += -1; 
      }
      updateText();
    })
    arrow1l.on('pointerover', () => {
      arrow2l.visible = true; 
    })
    arrow1l.on('pointerout', () => {
      arrow2l.visible = false; 
    })


    updateText();


  }
}