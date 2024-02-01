/**
 * Author: Michael Hadley, mikewesthad.com
 * Asset Credits:
 *  - Tileset, Michele "Buch" Bucelli (tileset artist) & Abram Connelly (tileset sponsor):
 *     https://opengameart.org/content/top-down-dungeon-tileset
 *  - Character, Michele "Buch" Bucelli:
 *      https://opengameart.org/content/a-platformer-in-the-forest
 */

import StartScene from "./start-scene.js";
import DungeonScene from "./dungeon-scene.js";
import EndScene from "./end-scene.js";


const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  backgroundColor: "#000",
  pixelArt: true,
  scene: [StartScene, DungeonScene, EndScene],
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