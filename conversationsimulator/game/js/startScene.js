import { gameState } from './gameState.js';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.image("startbackground", "https://tdarw.github.io/conversationsimulator/assets/startbackground.png",);
  }

  create() {
    let typeTextDelay = 0;

    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    const background = this.add.image(centerX, centerY, 'startbackground')

    const typeText = (scene, textObject, targetText, speed = 50, startDelay = 0) => {
      let currentText = '';
      let index = 0;
      typeTextDelay += targetText.length * 50;

    
      // Calculate the starting x position based on the final text width
      const startingX = textObject.x - (textObject.displayWidth / 2);
    
      scene.time.delayedCall(startDelay, () => {
        const interval = scene.time.addEvent({
          delay: speed,
          repeat: targetText.length - 1,
          callback: function () {
            currentText += targetText[index];
            textObject.setText(currentText);
    
            // Calculate the new x position based on the updated text width
            const updatedX = startingX + (textObject.displayWidth / 2);
            textObject.setX(updatedX);
    
            index++;
          },
        });
      });
    };

    const title = this.add.text(centerX - 470, centerY - 300, '', {
      fontSize: '70px',
      fill: '#000000',
    }).setOrigin(0.5);
    typeText(this, title, 'Conversation Simulator')
    
    const start = this.add.text(centerX - 60, centerY - 135, '', {
      fontSize: '24px',
      fill: '#000000',
      align: 'center',
      wordWrap: { width: 80, useAdvancedWrap: true }
    }).setOrigin(0.5);
    typeText(this, start, `Let's start`, 50, typeTextDelay)

    const instructions = this.add.text(centerX + 45, centerY - 130, '', {
      fontSize: '24px',
      fill: '#000000',
    }).setOrigin(0.5);
    typeText(this, instructions, 'Alright!', 50, typeTextDelay)

    const made = this.add.text(centerX + 310  , centerY + 365, 'Made by Tim Darwinkel', {
      fontSize: '14px',
      fill: '#000000',
    })







    start.setInteractive();

    start.on('pointerover', () => {
      start.setStyle({ fontStyle: 'bold' })
    })
    start.on('pointerout', () => {
      start.setStyle({ fontStyle: 'normal' })
    })

    start.on('pointerdown', () => {
      gameState.scenario = '';
      gameState.active = '';
      gameState.backgroundScene = '';
      gameState.image1 = '';
      gameState.image2 = '';

      this.scene.restart('MenuScene');
      this.scene.restart('GameScene');
      this.scene.restart('EndScene');

      this.scene.stop('StartScene');
      this.scene.start('MenuScene');
    });

    //instructions.setInteractive();

    instructions.on('pointerover', () => {
      instructions.setStyle({ fontStyle: 'bold' })
    })
    instructions.on('pointerout', () => {
      instructions.setStyle({ fontStyle: 'normal' })
    })


  }
}