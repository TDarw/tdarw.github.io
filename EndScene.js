class EndScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'EndScene'
    })
  }
  
  create() {
    gameState.endNarrativeText = `As your days near their end, lying on your bed, a sense of accomplishment fills you. Years flowed like a river, carrying your decisions and commands. The walls, once against you, now display your legacy, proof of your strong rule. As the sun sets, memories come alive – battles won, challenges faced. A nation shaped by you stands as your achievement. People, friends or foes, they remember you. Your power left a mark on history. Now, as you breathe softly, you're ready to accept the end, knowing your legacy will live on. Your reign will be remembered for your strength and spirit.`;

    const endNarrative = () => {
      if (gameState.popularityElite === 0) {
        gameState.endNarrativeText = `Once hailed as the Great Leader, you were awakened to the treachery woven by the elite. Today, the very symphony of their betrayal crescendos, orchestrating the fall of your governance. In the darkness, you walk through streets that used to be yours. You hurry, knowing you must leave your old power behind. The air feels different, a mix of memories of when you were in charge and the feeling of being let down. You can still hear the cheers of the successful coup behind you. But inside, you're determined to come back, to make things right and regain your power.`; 
      }
      if (gameState.popularityPeople === 0) {
        gameState.endNarrativeText = `Amid the powerful surge of the people's uprising, your once-mighty fortress of authority crumbles. You, the former Great Leader, face the storm you didn't expect. The people that used to support your rule are now calling for change. Yesterday the mob stormed the palace of parliament and ended your governance. Today in the dark, you move through these streets, where your authority used to hold sway, now filled with the flames of revolution. The future is unclear, each step heavy with past choices. You can still hear the cheers of the successful revolution behind you. But inside, you're determined to come back, to make things right and regain your power.`; 
      }
      if (gameState.popularityForeign === 0) {
        gameState.endNarrativeText = `In the aftermath of a foreign invasion, the enormity of the situation sinks in. The city that was once under your control is draped in the colors of foreign forces. Amidst the turmoil, you walk through the streets that were once your domain, now under the occupation of outsiders. Each step you take carries the weight of your defeat, a stark contrast to the authority you once wielded. With a heavy heart, you move away from the center of your fallen regime. The future is unclear, each step heavy with past choices. You can still hear the cheers of the successful invasion behind you. But inside, you're determined to come back, to make things right and regain your power.`; 
      }
    }
    
    endNarrative();

    gameState.dashboardEndNarrative =  this.add.rectangle(510, 330, 920, 550, 0x000000);

    gameState.dashboardEndNarrative.setStrokeStyle(1, 0xb38c03)
    gameState.dashboardEndNarrativeText = this.add.text(60, 70, `${gameState.endNarrativeText}` , { fill: '#b39c0e', font: '600 24px Courier', align: 'justify', lineSpacing: 8, wordWrap: {width: 900}});

    gameState.continueButtonEnd = this.add.rectangle(815, 683, 310, 70);
      gameState.continueButtonEnd.setStrokeStyle(1, 0xb39c0e)
      gameState.continueButtonTextEnd = this.add.text(745, 670, 'continue', { font: '600 24px Courier', fill: '#b39c0e'});
      gameState.continueButtonEnd.setInteractive();
      gameState.continueButtonEnd.on('pointerover', function() {
        gameState.continueButtonEnd.setStrokeStyle(2, 0xffe014, 1);
        gameState.continueButtonTextEnd.setColor('#ffe014');
      })
      gameState.continueButtonEnd.on('pointerout', function() {
        gameState.continueButtonEnd.setStrokeStyle(1, 0xb38c03, 1);
        gameState.continueButtonTextEnd.setColor('#b39c0e');
      })
      gameState.continueButtonEnd.setInteractive();
          gameState.continueButtonEnd.on('pointerup', () => {
            this.scene.stop('EndScene');
            this.scene.start('StartScene');
          });
    
    


  }

}