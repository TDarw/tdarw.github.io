// Create your global variables here
let gameState = {}

class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
  }
  
  preload() {
    this.load.image('background', 'https://static.wixstatic.com/media/53c05e_ecea1a6567004e8ea419f8320e3bfe50~mv2.png/v1/fill/w_750,h_563,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/background.png');
  }
  

  create() {
    // set variables
    gameState.popularityElite = 50;
    gameState.popularityPeople = 50;
    gameState.popularityForeign = 50;
    gameState.multiplierPositive = [1, 1, 1];
    gameState.multiplierNegative = [1, 1, 1];

    gameState.topic = '';
    gameState.event = '';
    gameState.problem = '';

    gameState.responseElite = '';
    gameState.responsePeople = '';
    gameState.responseForeign = '';
    gameState.responseResultElite = '';
    gameState.responseResultPeople = '';
    gameState.responseResultForeign = '';


    gameState.optionCurrent = '';
    gameState.optionsDestroy = [];
    gameState.traitsDestroy = [];
    
    gameState.traits = [];

    gameState.next = false; 

    // pages info
    gameState.pages = [
      {
        page: 1,
        topic: 'opposition',
        event: 'In these recent weeks, you have delivered a decisive blow to our foes, paving the path to victory. Yesterday, you triumphantly entered the capital, reclaiming it for the people. After years of unwavering struggle, you have emerged triumphant, overthrowing the grip of a corrupt regime and imprisoning its leadership.',
        problem: 'How to deal with the remnants of the former regime?',
        options: [
          { option: 'Public executions without trials', result: [-10, -10, -10], response: ['tyrant', 'tyrant', 'tyrant'], trait: ''},
          { option: 'Public trials with punishments ranging from executions to imprisonment', result: [10, 10, 10], response: ['justice', 'justice', 'justice'], trait: ''},
          { option: 'General pardon', result: [-10, -10, 10], response: ['corrupt', 'corrupt', 'justice'], trait: ''},
        ],
      },
      {
        page: 2,
        topic: 'government',
        event: `You have dealt with the remains of the old regime, fulfilling the people's demand for change by removing the oppressors. Before bringing forth a new era of prosperity, it is crucial to take control of the government.`,
        problem: 'How to establish a new government?',
        options: [
          { option: 'Claim absolute power and install yourself as dictator for life', result: [-10, -10, -10], response: ['tyrant', 'tyrant', 'tyrant'], trait: ''},
          { option: 'Claim temporary dictatorial powers in order to protect the revolution', result: [10, 10, -10], response: ['liberator', 'liberator', 'tyrant'], trait: ''},
          { option: 'Install a provisional government with you as president and call for elections', result: [10, 10, 10], response: ['liberator', 'liberator', 'liberator'], trait: ''},
        ],
      },
      {
        page: 3,
        topic: 'government',
        event: `Esteemed leader, you're ready to lead society onto its path of prosperity. Remember, just like a body needs its head, a nation needs leadership to succeed. Who will you choose to help lead us towards a brighter future?` ,
        problem: `Who do you appoint for important government positions?`,
        options: [
          { option: 'Party members', result: [10, 0, 0], response: ['beneficial', 'no comment', 'no comment'], trait: 'Vanguardism'},
          { option: 'Friends and family', result: [-10, -10, -10], response: ['corrupt', 'corrupt', 'corrupt'], trait: 'Nepotism'},
          { option: 'The best candidates possible', result: [0, 10, 10], response: ['no comment', 'beneficial', 'liberator'], trait: 'Meritocracy'},
        ],
      },
      {
        page: 4,
        topic: 'opposition',
        event: `Every day, people fill the streets chanting your name, praising the revolution. But beware, our enemies try to deceive. Doubtful voices in the media question your decisions.` ,
        problem: `How to deal with dissident voices in the media?`,
        options: [
          { option: 'Complete freedom of press', result: [-10, -10, 10], response: ['weakling', 'liberator', 'liberator'], trait: 'Freedom of press'},
          { option: 'Limited censorship', result: [10, 10, -10], response: ['justice', 'justice', 'tyrant'], trait: ''},
          { option: 'Strict censorship and government control of media', result: [10, -10, -10], response: ['beneficial', 'tyrant', 'tyrant'], trait: 'Strict censorship'},
        ],
      },
      {
        page: 5,
        topic: 'propaganda',
        event: `We have swiftly addressed the baseless attacks on your character. Nevertheless, the party believes our enemies will persist. To counter their future attempts at smearing your good name, we must improve your image as our esteemed leader.` ,
        problem: `What public image do you want to promote?`,
        options: [
          { option: 'Almighty godlike figure', result: [-10, 10, -10], response: ['tyrant', 'liberator', 'tyrant'], trait: 'Leadership cult'},
          { option: 'Enlightened liberator', result: [-10, -10, 10], response: ['weakling', 'traitor', 'liberator'], trait: 'Cosmopolitan'},
          { option: 'Public servant', result: [10, 10, 10], response: ['liberator', 'liberator', 'liberator'], trait: 'Technocracy'},
        ],
      },
      {
        page: 6,
        topic: 'opposition',
        event: `The people adore you, acknowledging your greatness as our leader. Yet, our tireless enemies persist. They whisper doubts and spread mistruths about your legitimacy, even swaying some misguided revolutionary comrades within the government.` ,
        problem: `How to deal with dissident voices in the government?`,
        options: [
          { option: 'Publicly purge every government official suspect of holding dissident opinions', result: [-10, 10, -10], response: ['tyrant', 'justice', 'tyrant'], trait: ''},
          { option: 'Use your secret police to spy on your government officials all dissidents', result: [-10, 0, 0], response: ['tyrant', '', ''], trait: ''},
          { option: 'Publicly announce your acceptance of constructive criticism', result: -[-10, -10, 10], response: ['weakling', 'weakling', 'liberator'], trait: ''},
        ],
      },
      {
        page: 7,
        topic: 'propaganda',
        event: `The party thrives under your magnificent leadership, and the people flourish guided by its principles. To fortify the bond among our fellow brothers and sisters, your advisors propose emphasizing our unity as a nation.` ,
        problem: `What national image do you want to promote?`,
        options: [
          { option: 'Totalitarian', result: [10, 0, 0], response: ['liberator', '', ''], trait: ''},
          { option: 'Liberal', result: [0, 0, 10], response: ['', '', 'liberator'], trait: ''},
          { option: 'Socialist', result: [0, 10, 0], response: ['', 'liberator', ''], trait: ''},
        ],
      },
      {
        page: 8,
        topic: 'domestic policies',
        event: `Leader, party, and people are now united as one collective entity. It is your duty to lead this unified whole towards prosperity. The people wholeheartedly endorse your mandate for change. Which path shall guide our nation to a prosperous future?` ,
        problem: `How do you want to improve the economic welfare of your people?`,
        options: [
          { option: 'Capitalism', result: [0, -10, 10], response: ['ambivalent', 'corrupt', 'beneficial'], trait: ''},
          { option: 'Corporatism', result: [10, 0, -10], response: ['beneficial', 'ambivalent', 'corrupt'], trait: ''},
          { option: 'Communism', result: [0, 10, -10], response: ['ambivalent', 'beneficial', 'tyrant'], trait: ''},
        ],
      },
      {
        page: 9,
        topic: 'Propaganda',
        event: `You held onto power till the end, a steadfast leader. But your body weakens as days pass. This country transformed under your guidance. The end seems near, and thoughts of legacy arise. Remember the changes you brought, even as your time fades. Your impact will last, shaping the future you built.` ,
        problem: `How do you want to be remembered?`,
        options: [
          { option: 'Visionary revolutionary', result: [0, 0, 0], response: ['', '', ''], trait: 'Legacy'},
          { option: 'Enlightened liberator', result: [0, 0, 0], response: ['', '', ''], trait: 'Legacy'},
          { option: 'Man of the people', result: [0, 0, 0], response: ['', '', ''], trait: 'Legacy'},
        ],
      },
    ];

    gameState.currentPage = 1;

    gameState.traitsInfo = [
      {
        name: 'Vanguardism',
        info: 'Vanguardism: the party places itself at the centre of the revolution. The elites will love this.',
        effectPositive: [1.5, 1, 1],
        effectNegative: [1, 1, 1],
      },
      {
        name: 'Nepotism',
        info: 'Nepotism: you surround yourself with friends and family and become less dependent on the elites.',
        effectPositive: [1, 1, 1],
        effectNegative: [0.5, 1, 1],
      },
      {
        name: 'Meritocracy',
        info: 'Meritocracy: society is governed by the most able. The people will love this.',
        effectPositive: [1, 1.5, 1],
        effectNegative: [1, 1, 1],
      },
      {
        name: 'Freedom of press',
        info: 'Freedom of press: every citizen has the right to publish and disseminate information without restraint or censorship. All effects are doubled.',
        effectPositive: [2, 2, 2],
        effectNegative: [2, 2, 2],
      },
      {
        name: 'Strict censorship',
        info: 'Strict censorship: the government has full control over the dissemination of information and speech is restricted. All effects are halved.',
        effectPositive: [0.5, 0.5, 0.5],
        effectNegative: [0.5, 0.5, 0.5],
      },
      {
        name: 'Leadership cult',
        info: 'Leadership cult: you are made into a living god. The people will love you, but it will be more difficult to convince the cynical elites and foreigners',
        effectPositive: [0.5, 2, 0.5],
        effectNegative: [1.5, 0.5, 1.5],
      },
      {
        name: 'Cosmopolitan',
        info: 'Cosmpolitan: you present yourself as a worldy person. Foreigners will love you, but the elites and people might feel betrayed ',
        effectPositive: [0.5, 0.5, 2],
        effectNegative: [1.5, 1.5, 0.5],
      },
      {
        name: 'Technocracy',
        info: 'Technocracy: you surround yourself with experts. The elites will love you, but the people and foreigners might feel abandoned',
        effectPositive: [2, 0.5, 0.5],
        effectNegative: [0.5, 1.5, 1.5],
      },
      {
        name: 'Legacy',
        info: 'Legacy',
        effectPositive: [1, 1, 1],
        effectNegative: [1, 1, 1],
      },
      // ... more traits ...
    ];


    const scoreCalculator = (holder) => {
      let holderE = holder[0];
      let holderP = holder[1];
      let holderF = holder[2];

      if (holderE >= 0) {
        let addScore = Math.floor(holderE * gameState.multiplierPositive[0]);
        gameState.responseResultElite = addScore;
          if (addScore + gameState.popularityElite > 100) {
            gameState.popularityElite = 100} else {
              gameState.popularityElite += addScore;
              
            }; 
      }
      if (holderE <= 0) {
        let addScore = Math.floor(holderE * gameState.multiplierNegative[0]);
        gameState.responseResultElite = addScore;
        if (addScore + gameState.popularityElite < 0) {
          gameState.popularityElite = 0} else {
            gameState.popularityElite += addScore;
          }; 
      }

      if (holderP >= 0) {
        let addScore = Math.floor(holderP * gameState.multiplierPositive[1]);
        gameState.responseResultPeople = addScore;
          if (addScore + gameState.popularityPeople > 100) {
            gameState.popularityPeople = 100} else {
              gameState.popularityPeople += addScore;
              
            }; 
      }
      if (holderP <= 0) {
        let addScore = Math.floor(holderP * gameState.multiplierNegative[1]);
        gameState.responseResultPeople = addScore;
        if (addScore + gameState.popularityPeople < 0) {
          gameState.popularityPeople = 0} else {
            gameState.popularityPeople += addScore;
          }; 
      }

      if (holderF >= 0) {
        let addScore = Math.floor(holderF * gameState.multiplierPositive[2]);
        gameState.responseResultForeign = addScore;
          if (addScore + gameState.popularityForeign > 100) {
            gameState.popularityForeign = 100} else {
              gameState.popularityForeign += addScore;
              
            }; 
      }
      if (holderF <= 0) {
        let addScore = Math.floor(holderF * gameState.multiplierNegative[2]);
        gameState.responseResultForeign = addScore;
        if (addScore + gameState.popularityForeign < 0) {
          gameState.popularityForeign = 0} else {
            gameState.popularityForeign += addScore;
          }; 
      }
    };

    
    const popUp = (trait) => {
      let popUpTrait = gameState.traitsInfo.find(t => t.name === trait);
      gameState.popUpRectangle = this.add.rectangle(815, 150, 310, 220, 0x000000);
      gameState.popUpRectangle.setStrokeStyle(2, 0xb38c03)
      gameState.popUpDisplay = this.add.text(670, 50, popUpTrait.info, { fill: '#b39c0e', font: '600 20px Courier', align: 'justify', lineSpacing: 8, wordWrap: {width: 300}})
      };

    const MultiplierCalculator = (trait) => {
      let traitEffect = gameState.traitsInfo.find(t => t.name === trait);

      if (traitEffect.effectPositive) {
        gameState.multiplierPositive[0] *= traitEffect.effectPositive[0];
        gameState.multiplierPositive[1] *= traitEffect.effectPositive[1];
        gameState.multiplierPositive[2] *= traitEffect.effectPositive[2];
      }
      if (traitEffect.effectNegative) {
        gameState.multiplierNegative[0] *= traitEffect.effectNegative[0];
        gameState.multiplierNegative[1] *= traitEffect.effectNegative[1];
        gameState.multiplierNegative[2] *= traitEffect.effectNegative[2];
      }
    };
    
    // display 
    const narrativeStyle = { fill: '#b39c0e', font: '600 24px Courier', align: 'left', lineSpacing: 8, wordWrap: {width: 600}};
    gameState.dashboardNarrative =  this.add.rectangle(340, 200, 590, 320, 0x000000);
    gameState.dashboardNarrative.setStrokeStyle(1, 0xb38c03)
    gameState.dashboardInfo =  this.add.rectangle(815, 332, 310, 585, 0x000000);
    gameState.dashboardInfo.setStrokeStyle(1, 0xb38c03)

    gameState.topicDisplay = this.add.text(60, 50, `Topic: ${gameState.topic}` , narrativeStyle);
    gameState.eventDisplay = this.add.text(60, 90, `${gameState.event}` , { fill: '#b39c0e', font: '20px Courier', align: 'justify', lineSpacing: 8, wordWrap: {width: 570}});
    gameState.problemDisplay = this.add.text(60, 290, `${gameState.problem}` , narrativeStyle);
    gameState.scoreDisplay = this.add.text(670, 50, `POPULARITY\nelite: ${gameState.popularityElite}    ${gameState.responseResultElite}\n \npeople: ${gameState.popularityPeople}    ${gameState.responseResultPeople}\n \nforeign: ${gameState.popularityForeign}   ${gameState.responseResultForeign}\n ` , 
      { fill: '#b39c0e', font: '600 24px Courier', lineSpacing: 6, lineHeight: '3em',  align: 'left',});
    gameState.responseDisplay = this.add.text(670, 50, `\n \n${gameState.responseElite}\n \n${gameState.responsePeople}\n \n${gameState.responseForeign}` , 
      { fill: '#b39c0e', font: '20px Courier', lineSpacing: 12, lineHeight: '3em',  align: 'left',});
    
    // option box function
    const optionsandtraits = () => {
      for (let i=0; i<3; i++) {
        let option = gameState.pages[gameState.currentPage].options[i];
    
        // color in the option box
        const optionBox = this.add.rectangle(45, 385 + i * 120, 590, 100, 0xb39c0e, 0)
        optionBox.setOrigin(0, 0)
        if (i === gameState.optionCurrent) {
          optionBox.setStrokeStyle(2, 0xffe014, 1);
        } else {
          optionBox.setStrokeStyle(1, 0xb38c03);
        }
        
        
    
        // add in the option text
        const baseY = 390 + i * 120;
        const optionText = this.add.text(55, baseY, option.option, { font: '600 24px Courier', fill: '#b39c0e', align: 'left', lineSpacing: 8, wordWrap: {width: 590}});
        if (i === gameState.optionCurrent) {
          optionText.setColor('#ffe014');
        }
        
        // hover over effect
        if (gameState.next === false) {
          optionBox.setInteractive();
          optionBox.on('pointerover', function() {
            this.optionBox.setStrokeStyle(2, 0xffe014, 1);
            this.optionText.setColor('#ffe014');
          }, { optionBox, optionText});
      
          optionBox.on('pointerout', function() {
            this.optionBox.setStrokeStyle(1, 0xb38c03, 1);
            this.optionText.setColor('#b39c0e');
          }, { optionBox, optionText});

          // calculate results on click 
          optionBox.on('pointerup', () => {
            scoreCalculator(option.result)
            let responseArray = option.response;
            gameState.responseElite = responseArray[0];
            gameState.responsePeople = responseArray[1];
            gameState.responseForeign = option.response[2];
            if (option.trait) {
              gameState.traits.push(option.trait);
              MultiplierCalculator(option.trait);
            } 
            gameState.next = true;
            gameState.optionCurrent = i; 
            updatePage(gameState.pages[gameState.currentPage])
            gameState.currentPage += 1;
          })
        }
        gameState.optionsDestroy.push({
          optionBox,
          optionText
        });
      }

      for (let i=0; i<gameState.traits.length; i++) {
        // color in the option box
        const traitBox = this.add.rectangle(662, 300 + i * 40, 305, 30, 0xb39c0e, 0)
        traitBox.strokeColor = 0xb39c0e;
        traitBox.strokeWeight = 2;
        traitBox.strokeAlpha = 1;
        traitBox.isStroked = true;
        traitBox.setOrigin(0, 0)
    
        // add in the option text
        const baseY = 305 + i * 40;
        const traitText = this.add.text(755, baseY, gameState.traits[i], { font: '600 20px Courier', fill: '#b39c0e', align: 'center', wordWrap: {width: 305}});
        const traitTextBounds = traitText.getBounds()
    
        // centering each option text
        traitText.setX(traitTextBounds.x + 55 - (traitTextBounds.width / 2));
        traitText.setY(traitTextBounds.y + 10 - (traitTextBounds.height / 2));

        traitBox.setInteractive();
        traitBox.on('pointerover', function() {
          this.traitBox.setStrokeStyle(2, 0xffe014, 1);
          this.traitText.setColor('#ffe014');
          popUp(gameState.traits[i])
        }, { traitBox, traitText});
        traitBox.on('pointerout', function() {
          this.traitBox.setStrokeStyle(1, 0xb38c03, 1);
          this.traitText.setColor('#b39c0e');
          gameState.popUpDisplay.destroy();
          gameState.popUpRectangle.destroy();
        }, { traitBox, traitText});
        gameState.traitsDestroy.push({traitBox, traitText});
        }    
    }

   

    const optionsandtraitsDestroy = () => {
      for (let option of gameState.optionsDestroy) {
        // destroy options if they exist
        option.optionBox.destroy();
        option.optionText.destroy();
        }
      for (let trait of gameState.traitsDestroy) {
        // destroy options if they exist
        trait.traitBox.destroy();
        trait.traitText.destroy();
      }
    }
 
    const updatePage = (page) => {
      gameState.topic = page.topic;
      gameState.event = page.event;
      gameState.problem = page.problem;
      gameState.topicDisplay.setText(`Topic: ${gameState.topic}`);
      gameState.eventDisplay.setText(`${gameState.event}`);
      gameState.problemDisplay.setText(`${gameState.problem}`);
      gameState.scoreDisplay.setText(`POPULARITY\nelite: ${gameState.popularityElite}    ${gameState.responseResultElite}\n \npeople: ${gameState.popularityPeople}    ${gameState.responseResultPeople}\n \nforeign: ${gameState.popularityForeign}   ${gameState.responseResultForeign}\n `)
      gameState.responseDisplay.setText(`\n \n${gameState.responseElite}\n \n${gameState.responsePeople}\n \n${gameState.responseForeign}`);
      optionsandtraitsDestroy();
      optionsandtraits();  
      continueButton();
    }
    
    const continueButton = () => {
      if (gameState.next) {
        gameState.continueButton = this.add.rectangle(815, 683, 310, 70);
        gameState.continueButton.setStrokeStyle(1, 0xb39c0e)
        gameState.continueButtonText = this.add.text(745, 670, 'continue', { font: '600 24px Courier', fill: '#b39c0e'});
        gameState.continueButton.setInteractive();
        gameState.continueButton.on('pointerover', function() {
          gameState.continueButton.setStrokeStyle(2, 0xffe014, 1);
          gameState.continueButtonText.setColor('#ffe014');
        })
        gameState.continueButton.on('pointerout', function() {
          gameState.continueButton.setStrokeStyle(1, 0xb38c03, 1);
          gameState.continueButtonText.setColor('#b39c0e');
        })

        if (gameState.popularityElite === 0 || gameState.popularityPeople === 0 || gameState.popularityForeign === 0 || gameState.traits.includes('Legacy')) {
          gameState.continueButton.on('pointerup', () => {
            this.scene.stop('GameScene');
            this.scene.start('EndScene');
          });
        } else {
          gameState.continueButton.on('pointerup', () => {
            gameState.responseElite = '';
            gameState.responsePeople = '';
            gameState.responseForeign = '';
            gameState.responseResultElite = '';
            gameState.responseResultPeople = '';
            gameState.responseResultForeign = '';
            gameState.continueButton.destroy();
            gameState.continueButtonText.destroy();
            gameState.next = false;
            gameState.optionCurrent = '';
            updatePage(gameState.pages[gameState.currentPage]);
          });
        }

      } 
    }


    updatePage(gameState.pages[gameState.currentPage]);
    




  } // end create


} // End GameScene