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
      const saved = gameState.level

      if (saved > 1) {
          gameState.savedLevel = saved;
          gameState.startLevel = saved - 1;
      }
    }

    loadLevel();

    let typeTextDelay = 0;

    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    const background = this.add.image(centerX, centerY, 'startbackground').setScale(1, 1.2)

    this.buttonGroup = this.add.group();

    const menubanner = this.add.image(centerX + 80, centerY - 250, 'menubanner').setScale(1.2, 1);
    const menubook = this.add.image(centerX - 160, centerY - 100, 'menuscroll');
    const menubook1 = this.add.image(centerX, centerY - 100, 'menuscroll');
    const menubook2 = this.add.image(centerX + 160, centerY - 100, 'menuscroll');
    const menubook3 = this.add.image(centerX + 320, centerY - 100, 'menuscroll');

    const helpscreen = this.add.image(centerX + 80, centerY + 55, 'helpscreen');
    helpscreen.setScale(1.3, 0.8);
    helpscreen.setDepth(1);
    helpscreen.setVisible(false);

    const newGame = () => {
      if (gameState.savedLevel > 0) {
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
          gameState.level = 1;
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

    const start = this.add.text(centerX - 155, centerY - 100, 'START', {
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#000000',
    }).setOrigin(0.5);

    this.buttonGroup.add(start);

    start.setInteractive();
    start.on('pointerdown', () => {
      newGame();
    });

    const help = this.add.text(centerX + 165, centerY - 100, 'GUIDE', {
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#000000',
    }).setOrigin(0.5);

    this.buttonGroup.add(help);

    let contentHelp = [
      'The Lost Library is an immersive educational game designed to help you review and master the material covered in class.',
      '',
      '',
      'OBJECITVE: Your goal is to escape from the mysterious Lost Library by collecting valuable books. Each level contains 12 books, but you only need to gather 6 to progress.',
      '',
      '',
      '',
      "CHALLENGES: Beware of the Ancient Librarians who guard the library's secrets. They will test your knowledge. If you answer incorrectly, they will take one of your hard-earned books.",
      '',
      '',
      '',
      "LEVELS: The game consists of 6 levels, each focusing on a different topic discussed in class. Your progress is automatically saved at the beginning of each level, allowing you to pick up right where you left off.",
    ];

    const helpText = this.add.text(centerX + 85, centerY + 50, contentHelp, {
      fontFamily: 'Arial',
      fontSize: '19px',
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

    const credits = this.add.text(centerX + 325, centerY - 100, 'CREDITS', {
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
        

    let contentCredits = [
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

    const creditsText = this.add.text(centerX - 220, centerY - 140, contentCredits, { 
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

    const scoreText = this.add.text(centerX + 5, centerY - 100, 'SCORES', { 
      fontFamily: 'Times New Romans',
      fontSize: '25px',
      fill: '#000000',
    }).setOrigin(0.5);

    scoreText.setInteractive()

    scoreText.on('pointerup', () => {
      this.scene.stop('StartScene')
      this.scene.start('ScoreScene')
    })

    this.buttonGroup.add(scoreText);


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