const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  scene: [StartScene, GameScene, EndScene, ]
};

const game = new Phaser.Game(config);