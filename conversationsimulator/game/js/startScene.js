// Import the gameState object from another module to maintain game state across scenes.
import { gameState } from './gameState.js';

// Define and export the StartScene class, which extends Phaser.Scene, the base class for all scenes.
export default class StartScene extends Phaser.Scene {
  // The constructor for the StartScene, setting up the scene with a unique key.
  constructor() {
    super({ key: 'StartScene' });
  }

  // preload() is called before create() and is used to load assets.
  preload() {
    // Load an image asset to be used as the start background.
    this.load.image("startbackground", "assets/startbackground.png");
  }

  // create() is called after preload() and is used to set up game objects, variables, and settings.
  create() {
    let typeTextDelay = 0; // Initialize a delay variable for text typing animation.

    // Calculate the center x and y positions of the game screen.
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    // Add the background image to the scene at the calculated center position.
    const background = this.add.image(centerX, centerY, 'startbackground');

    // typeText is a function to animate typing text on the screen.
    const typeText = (scene, textObject, targetText, speed = 50, startDelay = 0) => {
      let currentText = '';
      let index = 0;
      typeTextDelay += targetText.length * speed; // Accumulate delay for sequential text animations.

      // Starting x position is calculated to align text based on its width.
      const startingX = textObject.x - (textObject.displayWidth / 2);
    
      // Start a delayed call that will animate the text one character at a time.
      scene.time.delayedCall(startDelay, () => {
        const interval = scene.time.addEvent({
          delay: speed, // The delay between each character's animation.
          repeat: targetText.length - 1, // Number of times to repeat, based on the text length.
          callback: function () {
            // Append the next character to the current text.
            currentText += targetText[index];
            // Update the text object with the current text.
            textObject.setText(currentText);
    
            // Recalculate the x position to keep the text centered.
            const updatedX = startingX + (textObject.displayWidth / 2);
            textObject.setX(updatedX);
    
            index++; // Increment the character index.
          },
        });
      });
    };

    // Create title text, start button, and instructions text with empty strings to be animated with typeText.
    const title = this.add.text(centerX, centerY - 300, '', {
      fontSize: '70px',
      fill: '#000000',
    }).setOrigin(0.5);
    typeText(this, title, 'Conversation Simulator');
    
    const start = this.add.text(centerX, centerY - 135, '', {
      fontSize: '24px',
      fill: '#000000',
      align: 'center'
    }).setOrigin(0.5);
    typeText(this, start, `Let's start`, 50, typeTextDelay);

    const instructions = this.add.text(centerX, centerY - 130, '', {
      fontSize: '24px',
      fill: '#000000',
    }).setOrigin(0.5);
    typeText(this, instructions, 'Alright!', 50, typeTextDelay);

    // Credit text is added without animation.
    const made = this.add.text(centerX, centerY + 365, 'Made by Tim Darwinkel', {
      fontSize: '14px',
      fill: '#000000',
    });

    // Make the start text interactive and set up pointer event handlers for visual feedback.
    start.setInteractive();
    start.on('pointerover', () => start.setStyle({ fontStyle: 'bold' }));
    start.on('pointerout', () => start.setStyle({ fontStyle: 'normal' }));

    // Transition to the MenuScene when the start text is clicked and reset relevant gameState properties.
    start.on('pointerdown', () => {
      // Reset gameState properties for a fresh start.
      gameState.reset(); // Assuming this is a method that resets gameState properties.

      // Restart the necessary scenes and transition to the MenuScene.
      this.scene.restart('MenuScene');
      this.scene.restart('GameScene');
      this.scene.restart('EndScene');
      this.scene.stop('StartScene');
      this.scene.start('MenuScene');
    });

    // Make the instructions text interactive and set up pointer event handlers for visual feedback.
    instructions.setInteractive();
    instructions.on('pointerover', () => instructions.setStyle({ fontStyle: 'bold' }));
    instructions.on('pointerout', () => instructions.setStyle({ fontStyle: 'normal' }));
  }
}