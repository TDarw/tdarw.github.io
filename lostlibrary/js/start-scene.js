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
    function loadLevel(){
      const saved = localStorage.getItem('savedLevel');

      if (saved) {
        const startLevel = parseInt(saved, 10)
        if(startLevel) {
          gameState.startLevel = startLevel - 1;
          gameState.level += startLevel;
        }
      }
    }

    loadLevel();

    let typeTextDelay = 0;

    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    const background = this.add.image(centerX, centerY, 'startbackground')

    this.buttonGroup = this.add.group();

    const menubanner = this.add.image(centerX + 80, centerY - 250, 'menubanner');
    const menubook = this.add.image(centerX - 80, centerY - 100, 'menuscroll');
    const menubook1 = this.add.image(centerX + 80, centerY - 100, 'menuscroll');
    const menubook2 = this.add.image(centerX + 240, centerY - 100, 'menuscroll');
    const helpscreen = this.add.image(centerX + 80, centerY + 55, 'helpscreen');
    helpscreen.setScale(1.3, 0.8);
    helpscreen.setDepth(1);
    helpscreen.setVisible(false);

    const newGame = () => {
      if (gameState.startLevel > -1) {
        const newGame = this.add.image(centerX + 80, centerY - 100, 'helpscreen');
        newGame.setScale(1, 0.3)
        newGame.setDepth(1)
        newGame.setInteractive();
    
        const newGameText = this.add.text(centerX + 80, centerY - 120, 'A saved game has been found. Do you want to continue your previous game or start a new one?', {
          fontFamily: 'Times New Romans',
          fontSize: '25px',
          fill: '#000000',
          wordWrap: { width: 480 },
          align: 'center',
        }).setOrigin(0.5).setDepth(1);
    
        const newGameTextContinue = this.add.text(centerX - 70, centerY - 50, 'CONTINUE', {
          fontFamily: 'Times New Romans',
          fontSize: '25px',
          fill: '#000000',
        }).setOrigin(0.5).setDepth(1);

        this.buttonGroup.add(newGameTextContinue);

        newGameTextContinue.setInteractive();
        newGameTextContinue.on('pointerdown', () => {
          this.scene.stop('StartScene')
          this.scene.start('DungeonScene');
        })

        const newGameTextNew = this.add.text(centerX + 260, centerY - 50, 'NEW', {
          fontFamily: 'Times New Romans',
          fontSize: '25px',
          fill: '#000000',
        }).setOrigin(0.5).setDepth(1);

        this.buttonGroup.add(newGameTextNew);

        newGameTextNew.setInteractive();
        newGameTextNew.on('pointerdown', () => {
          gameState.level = 1;
          localStorage.clear();
          this.time.delayedCall(50, () => {
            this.scene.stop('StartScene')
            this.scene.start('DungeonScene');
          });
        })

      } else {
        this.scene.stop('StartScene');
        this.scene.start('DungeonScene');
      }
      setHoverEffect();
    }

    const title = this.add.text(centerX + 80, centerY - 250, 'The Lost Library', {
      fontFamily: 'Times New Romans',
      fontSize: 'bold 60px',
      fill: '#000000',
    }).setOrigin(0.5);

    const start = this.add.text(centerX - 77, centerY - 100, 'START', {
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#000000',
    }).setOrigin(0.5);

    this.buttonGroup.add(start);

    start.setInteractive();
    start.on('pointerdown', () => {
      newGame();
    });

    const help = this.add.text(centerX + 85, centerY - 100, 'GUIDE', {
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#000000',
    }).setOrigin(0.5);

    this.buttonGroup.add(help);

    const helpText = this.add.text(centerX + 85, centerY + 50, `While you were studying hard for your English test, you fell into a deep sleep. In your dream, you went to a magical place called the Forgotten Library. To wake up, you need to show the library's special guardians that you know a lot. This library is full of books that can help you, but they only share their secrets if you show you're smart. But you have to be careful! There are old librarians watching, and if they don't like your answers, you'll have to start over from the beginning of the library. Get ready for this fun challenge. Are you all set to go on this adventure? You move using the keyboard keys.`, {
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
      helpscreen.setVisible(true);
      helpText.setVisible(true);
      helpscreen.setInteractive();
      helpscreen.on('pointerdown', () => {
        helpscreen.setVisible(false);
        helpText.setVisible(false);
        helpscreen.disableInteractive();
      });
  
    });

    const credits = this.add.text(centerX + 245, centerY - 100, 'CREDITS', {
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#000000',
    }).setOrigin(0.5);

    this.buttonGroup.add(credits);

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

    const creditsText = this.add.text(centerX - 220, centerY - 140, content, { 
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

    const setHoverEffect = () => {
      this.buttonGroup.getChildren().forEach(button => {
        button.on('pointerover', () => {
          button.setStyle({ 
            fontSize: 'bold 26px',
        });
        });
  
        button.on('pointerout', () => {
          button.setStyle({ 
            fontSize: '25px',
        });
        });
      });
    }
    setHoverEffect();




  }
}