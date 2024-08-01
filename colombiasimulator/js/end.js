import { gameState } from './gameState.js';

export default class EndScene extends Phaser.Scene {

  constructor() {
    super({ key: 'EndScene' });
  }

  preload() {
    this.load.image( "backgroundwon", "assets/test/backgroundendwon.png")
    this.load.image( "backgroundlost", "assets/test/backgroundendlost.png")
  }

  create() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    if (gameState.gameOver === 'won') {
      const background = this.add.image(centerX, centerY, 'backgroundwon');
    } else {
      const background = this.add.image(centerX, centerY, 'backgroundlost');
    }

    const startButton = createBox(this, centerX, centerY - 110, 350, 100, 2, centerX - 150, centerY - 135, 'RESTART GAME', 'bold 50px', 'center', 400, true);
    startButton.box.setFillStyle(0xD6BC9E);
    startButton.box.on('pointerup', () => {
      this.scene.stop('EndScene');
      this.scene.start('StartScene');
    })

  }

}