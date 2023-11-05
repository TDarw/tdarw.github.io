import { gameState } from './gameState.js';

/**
 * Class representing the start scene of the game.
 * @extends Phaser.Scene
 */
export default class StartScene extends Phaser.Scene {
  /**
   * Construct the StartScene with a Phaser scene key.
   */
  constructor() {
    super({ key: 'StartScene' });
  }

  /**
   * Preload the required assets for the StartScene.
   */
  preload() {
    // Load the background image for the start scene.
    this.load.image("startbackground", "https://tdarw.github.io/conversationsimulator/assets/startbackground.png");
  }

  /**
   * Create the StartScene with text and interactive elements.
   */
  create() {
    let typeTextDelay = 0; // Initialize delay for typing text.

    // Center coordinates for placing elements.
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    // Add background image to the scene.
    const background = this.add.image(centerX, centerY, 'startbackground');

    // Function to type text onto the scene.
    const typeText = (scene, textObject, targetText, speed = 50, startDelay = 0) => {
      let currentText = '';
      let index = 0;
      typeTextDelay += targetText.length * speed; // Increment delay based on text length.

      // Calculate the starting x position based on the final text width.
      const startingX = textObject.x - (textObject.displayWidth / 2);

      // Start typing text after a delay.
      scene.time.delayedCall(startDelay, () => {
        const interval = scene.time.addEvent({
          delay: speed,
          repeat: targetText.length - 1,
          callback: function () {
            currentText += targetText[index];
            textObject.setText(currentText);

            // Recalculate the x position as the text grows.
            const updatedX = startingX + (textObject.displayWidth / 2);
            textObject.setX(updatedX);

            index++;
          },
        });
      });
    };

    // Title text setup and typing effect.
    const title = this.add.text(centerX - 470, centerY - 300, '', {
      fontSize: '70px',
      fill: '#000000',
    }).setOrigin(0.5);
    typeText(this, title, 'Conversation Simulator');

    // Start button text setup and typing effect.
    const start = this.add.text(centerX - 60, centerY - 135, '', {
      fontSize: '24px',
      fill: '#000000',
      align: 'center',
      wordWrap: { width: 80, useAdvancedWrap: true }
    }).setOrigin(0.5);
    typeText(this, start, `Let's start`, 50, typeTextDelay);

    // Instructions button text setup and typing effect.
    const instructions = this.add.text(centerX + 45, centerY - 130, '', {
      fontSize: '24px',
      fill: '#000000',
    }).setOrigin(0.5);
    typeText(this, instructions, 'Alright!', 50, typeTextDelay);

    // Credit text directly added without typing effect.
    const made = this.add.text(centerX, centerY + 365, 'Made by Tim Darwinkel', {
      fontSize: '14px',
      fill: '#000000',
    }).setOrigin(0.5);

    // Make the start text interactive and style it on hover.
    start.setInteractive();
    start.on('pointerover', () => start.setStyle({ fontStyle: 'bold' }));
    start.on('pointerout', () => start.setStyle({ fontStyle: 'normal' }));

    // Handle the start text click to transition to the MenuScene.
    start.on('pointerdown', () => {
      // Reset gameState properties.
      gameState.scenario = '';
      gameState.active = '';
      gameState.backgroundScene = '';
      gameState.image1 = '';
      gameState.image2 = '';

      // Restart other scenes and switch to MenuScene.
      this.scene.restart('MenuScene');
      this.scene.restart('GameScene');
      this.scene.restart('EndScene');

      this.scene.stop('StartScene');
      this.scene.start('MenuScene');
    });

    // Make the instructions text interactive and style it on hover.
    instructions.setInteractive();
    instructions.on('pointerover', () => instructions.setStyle({ fontStyle: 'bold' }));
    instructions.on('pointerout', () => instructions.setStyle({ fontStyle: 'normal' }));

    // No click handler for instructions is included, assuming it may be added later.
  }
}