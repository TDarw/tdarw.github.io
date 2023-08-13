class StartScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'StartScene'
    });
  }


  create() {
    gameState.bannerStart =  this.add.rectangle(520, 150, 720, 200, 0x000000);
    gameState.bannerStart.setStrokeStyle(1, 0xb38c03)
    gameState.bannerStartNarrativeText = this.add.text(190, 60, `IB HISTORY\nAUTHORITARIAN STATES\nMAINTENANCE OF POWER\nDECISION-MAKING SIMULATOR` , { fill: '#b39c0e', font: '400 44px Courier', align: 'center', lineSpacing: 8, wordWrap: {width: 900}});
    

    gameState.instructionStart =  this.add.rectangle(520, 450, 720, 350, 0x000000);
    gameState.instructionStart.setStrokeStyle(1, 0xb38c03)
    gameState.instructionStartText = this.add.text(190, 60, `IB HISTORY\nAUTHORITARIAN STATES\nMAINTENANCE OF POWER\nDECISION-MAKING SIMULATOR` , { fill: '#b39c0e', font: '400 44px Courier', align: 'center', lineSpacing: 8, wordWrap: {width: 900}});

    gameState.continueButtonStart = this.add.rectangle(525, 683, 310, 70);
    gameState.continueButtonStart.setStrokeStyle(1, 0xb39c0e)
    gameState.continueButtonStartText = this.add.text(465, 670, 'continue', { font: '600 24px Courier', fill: '#b39c0e'});
    gameState.continueButtonStart.setInteractive();
    gameState.continueButtonStart.on('pointerup', () => {
      this.scene.stop('StartScene');
      this.scene.start('GameScene');
    });
    gameState.continueButtonStart.setInteractive();
    gameState.continueButtonStart.on('pointerover', function() {
      gameState.continueButtonStart.setStrokeStyle(2, 0xffe014, 1);
      gameState.continueButtonStartText.setColor('#ffe014');
    })
    gameState.continueButtonStart.on('pointerout', function() {
      gameState.continueButtonStart.setStrokeStyle(1, 0xb38c03, 1);
      gameState.continueButtonStartText.setColor('#b39c0e');
    })
    

        
  }
}