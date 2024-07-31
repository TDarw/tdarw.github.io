import LoginScene from "./scene-login.js";
import StartScene from "./scene-start.js";
import DungeonScene from "./scene-game.js";
import ScoreScene from "./scene-score.js";


const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: "#000",
  pixelArt: true,
  scene: [LoginScene, StartScene, DungeonScene, ScoreScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      //debug: true, 
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);