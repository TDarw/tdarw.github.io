import { gameState } from './gameState.js';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.image("startbackground", "assets/backgrounds/startbackground.png",);
    this.load.image("menuscroll","assets/backgrounds/menuscroll.png")
    this.load.image("menubanner","assets/backgrounds/menubanner.png")
    this.load.image("helpscreen","assets/backgrounds/helpscreen.png")
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

    const helpscreen = this.add.image(centerX, centerY, 'helpscreen');
    helpscreen.setScale(1.3, 0.8);
    helpscreen.setDepth(1);
    helpscreen.setVisible(false);

    const title = this.add.text(centerX, centerY - 330  , 'A Long Way Gone', {
      fontFamily: 'Times New Romans',
      fontSize: 'bold 60px',
      fill: '#FFFFFF',
    }).setOrigin(0.5);

    const start = this.add.text(centerX - 177, centerY + 330, 'START', {
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#FFFFFF',
    }).setOrigin(0.5);

    start.setInteractive();
    start.on('pointerdown', () => {
      this.scene.stop('StartScene')
      this.scene.start('DungeonScene');
    });

    // Interactivity for option box: highlight on hover
    start.on('pointerover', () => {
      start.setStyle({ 
        fontSize: 'bold 26px',
    });
    });

    // Revert style when the pointer is no longer over the option box
    start.on('pointerout', () => {
      start.setStyle({ 
        fontSize: '25px',
    });
    });

    const help = this.add.text(centerX - 15, centerY + 330, 'GUIDE', {
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#FFFFFF',
    }).setOrigin(0.5);



    const helpText = this.add.text(centerX, centerY, `While you were studying hard for your English test, you fell into a deep sleep. In your dream, you went to a magical place called the Forgotten Library. To wake up, you need to show the library's special guardians that you know a lot. This library is full of books that can help you, but they only share their secrets if you show you're smart. But you have to be careful! There are old librarians watching, and if they don't like your answers, you'll have to start over from the front of the library. Get ready for this fun challenge. Are you all set to go on this adventure? You move using the keyboard keys and can pause the game by pressing the escape key.`, {
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#000000',
      wordWrap: { width: 600, useAdvancedWrap: true },
      lineSpacing: 5,
      align: 'justify'
    }).setOrigin(0.5);
    helpText.setDepth(2);
    helpText.setVisible(false);


    help.setInteractive();
    help.on('pointerdown', () => {
      creditsText.setVisible(false);
      helpscreen.setVisible(true);
      helpText.setVisible(true);
      helpscreen.setInteractive();
      helpscreen.on('pointerdown', () => {
        helpscreen.setVisible(false);
        helpText.setVisible(false);
        helpscreen.disableInteractive();
      });
  
    });

    // Interactivity for option box: highlight on hover
    help.on('pointerover', () => {
      help.setStyle({ 
        fontSize: 'bold 26px',
    });
    });

    // Revert style when the pointer is no longer over the option box
    help.on('pointerout', () => {
      help.setStyle({ 
        fontSize: '25px',
    });
    });
    

    const credits = this.add.text(centerX + 145, centerY + 330, 'CREDITS', {
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#FFFFFF',
    }).setOrigin(0.5);

    // Interactivity for option box: highlight on hover
    credits.on('pointerover', () => {
      credits.setStyle({ 
        fontSize: 'bold 26px',
    });
    });

    // Revert style when the pointer is no longer over the option box
    credits.on('pointerout', () => {
      credits.setStyle({ 
        fontSize: '25px',
    });
    });
        

    let content = [
      'Copyright © 2024 Tim Darwinkel',
      'This game is open source and is licensed under the MIT License.',
      'You are free to use, modify, and distribute this game in accordance with the terms of the MIT License.',
      '',
      '',
      'Acknowledgments',
      'This game makes use of the following open-source libraries:',
      '- Phaser: https://github.com/phaserjs/phaser',
      '- Dungeon Generator: https://github.com/mikewesthad/dungeon',
      '',
      'Special Thanks:',
      'This game was inspired by and based upon the tutorial "Modular Game Worlds in Phaser 3 (Tilemaps #3): Procedural Dungeon" by Michael Hadley.',
      'His insightful and detailed guide was instrumental in the development of this game.',
    ];

    const creditsText = this.add.text(centerX - 300, centerY - 200, content, { 
      font: '19px Arial', 
      fill: '#000000', 
      wordWrap: { width: 600, useAdvancedWrap: true },
      lineSpacing: 5,
    }
    );
    creditsText.setDepth(2);
    creditsText.setVisible(false);

    credits.setInteractive();
    credits.on('pointerdown', () => {
      helpText.setVisible(false);
      helpscreen.setVisible(true);
      creditsText.setVisible(true);
      helpscreen.setInteractive();
      helpscreen.on('pointerdown', () => {
        helpscreen.setVisible(false);
        creditsText.setVisible(false);
        helpscreen.disableInteractive();
      });
  
    });

    // Interactivity for option box: highlight on hover
    help.on('pointerover', () => {
      help.setStyle({ 
        fontSize: 'bold 26px',
    });
    });

    // Revert style when the pointer is no longer over the option box
    help.on('pointerout', () => {
      help.setStyle({ 
        fontSize: '25px',
    });
    });

  



  }
}