import { gameState } from './gameState.js';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' });
  }

  preload() {
    this.load.image("endbackground", "assets/backgrounds/endbackground.png",);
    this.load.image("menuscroll","assets/backgrounds/menuscroll.png")
    this.load.image("menubanner","assets/backgrounds/menubanner.png")
  }

  create() {
    let typeTextDelay = 0;

    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    const background = this.add.image(centerX, centerY, 'endbackground')

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

    const menubanner = this.add.image(centerX, centerY - 250, 'menubanner')

    const title = this.add.text(centerX, centerY - 250, 'The Lost Library', {
      fontFamily: 'Times New Romans',
      fontSize: 'bold 60px',
      fill: '#000000',
    }).setOrigin(0.5);

  }
}