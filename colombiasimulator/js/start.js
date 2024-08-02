import { gameState } from './gameState.js';
import { typeText } from './gameFunctions.js';
import { createBox } from './gameFunctions.js';

export default class StartScene extends Phaser.Scene {

  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.image( "backgroundStart", "assets/test/backgroundstart.png")
  }
  create() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    const background = this.add.image(centerX, centerY, 'backgroundStart')

    const startButton = createBox(this, centerX, centerY - 110, 350, 100, 2, centerX - 150, centerY - 135, 'START GAME', 'bold 50px', 'center', 400, true);
    startButton.box.setFillStyle(0xD6BC9E);
    startButton.box.on('pointerup', () => {
      this.scene.stop('StartScene');
      this.scene.start('GameScene');
    })
  }

}