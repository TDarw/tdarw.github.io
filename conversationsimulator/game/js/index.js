import StartScene from "./startScene.js";
import MenuScene from "./menuScene.js";
import GameScene from "./gameScene.js";
import EndScene from "./endScene.js";

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#f3fafd',
  scale: {
    mode: Phaser.Scale.FIT, // Scale mode
    autoCenter: Phaser.Scale.CENTER_BOTH, // Center the game in the viewport
  },
  scene: [StartScene, MenuScene, GameScene, EndScene]
};

const game = new Phaser.Game(config);