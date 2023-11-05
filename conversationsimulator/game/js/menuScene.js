// Import the gameState object to maintain and manipulate the game state across different scenes.
import { gameState } from './gameState.js';

// Define and export the MenuScene class, which extends Phaser.Scene for scene functionality.
export default class MenuScene extends Phaser.Scene {
  // The constructor initializes the scene with a unique key.
  constructor() {
    super({ key: 'MenuScene' });
  }

  // preload() is called once per scene and is used to load assets before the scene is created.
  preload() {
    // Load images for the scene's background and arrows from an external URL.
    this.load.image("startbackground", "https://tdarw.github.io/conversationsimulator/assets/startbackground.png");
    this.load.image("arrow1", "https://tdarw.github.io/conversationsimulator/assets/arrow1.png");
    this.load.image("arrow2", "https://tdarw.github.io/conversationsimulator/assets/arrow2.png");
  }

  // create() is called once preload() is completed and is used to set up game objects, variables, and settings.
  create() {
    // Calculate the center x and y positions based on the game configuration.
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    // Initialize a delay variable for the text typing effect.
    let typeTextDelay = 0;
    
    // Keep track of the current option selected in the menu.
    let currentOption = 0;
    
    // Define the menu options with a title and two pieces of slang for each language option.
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
    ];

    // Add background image to the scene at the center position.
    const background = this.add.image(centerX, centerY, 'startbackground');

    // Add right arrows to the scene and make the second one initially invisible.
    const arrow1r = this.add.image(centerX + 400, centerY, 'arrow1');
    const arrow2r = this.add.image(centerX + 400, centerY, 'arrow2');
    arrow2r.visible = false;

    // Add left arrows to the scene, flip them horizontally, and make the second one initially invisible.
    const arrow1l = this.add.image(centerX - 400, centerY, 'arrow1').setScale(-1, 1);
    const arrow2l = this.add.image(centerX - 400, centerY, 'arrow2').setScale(-1, 1);
    arrow2l.visible = false;

    // The typeText function is used to create a typing animation for text objects.
    // It's similar to the one in StartScene, with minor adjustments omitted for brevity.

    // Function to update the displayed text based on the currentOption.
    const updateText = () => {
      console.log(currentOption); // Log the current option for debugging.
      let textUpdate = options[currentOption]; // Retrieve the current menu option data.
      title.setText(textUpdate.title); // Update the title text.
      start.setText(textUpdate.text1); // Update the first line of text.
      text2.setText(textUpdate.text2); // Update the second line of text.
    };

    // Create text objects for the title and options with empty strings, to be filled by updateText.
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

    // Make the start text interactive and set up pointer event handlers for visual feedback and functionality.
    start.setInteractive();
    start.on('pointerover', () => start.setStyle({ fontStyle: 'bold' }));
    start.on('pointerout', () => start.setStyle({ fontStyle: 'normal' }));
    start.on('pointerdown', () => {
      // Update gameState with the selected scenario.
      gameState.scenario = currentOption === 0 ? 'britishSlang' : 'australianSlang';
      // Transition from the MenuScene to the GameScene.
      this.scene.stop('MenuScene');
      this.scene.start('GameScene');
    });

    // Make the right arrow interactive and set up pointer event handlers for navigation and visual feedback.
    arrow1r.setInteractive();
    arrow1r.on('pointerup', () => {
      if (currentOption < options.length - 1) currentOption++;
      updateText();
    });
    arrow1r.on('pointerover', () => arrow2r.visible = true);
    arrow1r.on('pointerout', () => arrow2r.visible = false);

    // Make the left arrow interactive and set up pointer event handlers for navigation and visual feedback.
    arrow1l.setInteractive();
    arrow1l.on('pointerup', () => {
      if (currentOption > 0) currentOption--;
      updateText();
    });
    arrow1l.on('pointerover', () => arrow2l.visible = true);
    arrow1l.on('pointerout', () => arrow2l.visible = false);

    // Call updateText initially to set the text for the first menu option.
    updateText();
  }
}