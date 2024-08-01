import StartScene from "./start.js";
import GameScene from "./game.js";
import EndScene from "./end.js";

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: '#FFFFFF',
  scale: {
    mode: Phaser.Scale.FIT, // Scale mode
    autoCenter: Phaser.Scale.CENTER_BOTH, // Center the game in the viewport
  },
  scene: [StartScene, GameScene, EndScene, ]
};

const game = new Phaser.Game(config);