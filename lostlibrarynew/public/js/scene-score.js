import { gameState } from './gameState.js';

export default class ScoreScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ScoreScene' });
  }

  preload() {
    this.load.image("endbackground", "assets/backgrounds/endbackground.png",);
    this.load.image("menuscroll","assets/backgrounds/menuscroll.png")
    this.load.image("menubanner","assets/backgrounds/menubanner.png")
    this.load.image("helpscreen","assets/backgrounds/helpscreen.png")
  }

  create() {
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;

    const background = this.add.image(centerX, centerY, 'endbackground').setScale(1, 1.1)

    const menubanner = this.add.image(centerX, centerY - 325, 'menubanner')

    const title = this.add.text(centerX, centerY - 325, 'Highscores', {
      fontFamily: 'Times New Romans',
      fontSize: 'bold 60px',
      fill: '#000000',
    }).setOrigin(0.5);

    const returnbook = this.add.image(centerX - 450, centerY - 340, 'helpscreen').setScale(0.2, 0.1);
    const menubook = this.add.image(centerX - 200, centerY - 225, 'menuscroll').setScale(1, 0.5);
    const menubook1 = this.add.image(centerX, centerY - 225, 'menuscroll').setScale(1, 0.5);;
    const menubook2 = this.add.image(centerX + 200, centerY - 225, 'menuscroll').setScale(1, 0.5);;

    const returnButton = this.add.text(centerX - 450, centerY - 340, 'Return', {
      fontFamily: 'Times New Romans',
      fontSize: 'bold 25px',
      fill: '#000000',
    }).setOrigin(0.5);

    const level = this.add.text(centerX - 200, centerY - 225, 'Level', {
      fontFamily: 'Times New Romans',
      fontSize: 'bold 25px',
      fill: '#000000',
    }).setOrigin(0.5);

    const books = this.add.text(centerX + 5, centerY - 225, 'Books', {
      fontFamily: 'Times New Romans',
      fontSize: 'bold 25px',
      fill: '#000000',
    }).setOrigin(0.5);

    const enemies = this.add.text(centerX + 205, centerY - 225, 'Enemies', {
      fontFamily: 'Times New Romans',
      fontSize: 'bold 25px',
      fill: '#000000',
    }).setOrigin(0.5);

    returnButton.setInteractive()
    returnButton.on('pointerup', () => {
      this.scene.stop('ScoreScene');
      this.scene.start('StartScene')
    })

    level.setInteractive()
    level.on('pointerup', () => {
      fetchHighscores('level');
    })

    books.setInteractive()
    books.on('pointerup', () => {
      fetchHighscores('books');
    })

    enemies.setInteractive()
    enemies.on('pointerup', () => {
      fetchHighscores('enemies');
    })



    function fetchHighscores(filter) {
      fetch('/api/players')
        .then(response => response.json())
        .then(data => {
          console.log('Highscores:', data);
          // Process and display the highscore data in your game

          const filterInput = filter; 
          
          displayHighscores(data, filterInput);
        })
        .catch(error => {
          console.error('Error fetching highscores:', error);
        });
    }
    
    const displayHighscores = (players, filterInput) => {
      // Implement logic to display highscore data in your game
      // For example, you could create a list or table in your game UI
      const firstY = centerY - 150;
    
      players.forEach((player, index) => {
        if (index < 10) {
          let counterY = firstY + index * 50;

          const scoreBanner = this.add.image(centerX, counterY, 'menubanner').setScale(1.2, 0.3)
          if (filterInput === 'level') {
            const level = this.add.text(centerX, counterY, `${index + 1}. ${player.username} - Level: ${player.level}`, {
              fontFamily: 'Times New Romans',
              fontSize: 'bold 25px',
              fill: '#000000',
            }).setOrigin(0.5);        
          } else if (filterInput === 'books') {
            const level = this.add.text(centerX, counterY, `${index + 1}. ${player.username} - Books: ${player.totalKeys}`, {
              fontFamily: 'Times New Romans',
              fontSize: 'bold 25px',
              fill: '#000000',
            }).setOrigin(0.5);     
          } else {
            const level = this.add.text(centerX, counterY, `${index + 1}. ${player.username} - Enemies: ${player.totalEnemies}`, {
              fontFamily: 'Times New Romans',
              fontSize: 'bold 25px',
              fill: '#000000',
            }).setOrigin(0.5);     
          }

        }
      });
    }
  }
}