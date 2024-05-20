import { gameState } from './gameState.js';
import Player from "./player.js";
import Enemy from "./enemy.js";
import { questionsChestsPages, questionChestFunction } from "./questionsChests.js";
import { questionsEnemiesPages, questionEnemyFunction } from "./questionsEnemies.js";
import TILES from "./tile-mapping.js";
import TilemapVisibility from "./tilemap-visibility.js";



/**
 * Scene that generates a new dungeon
 */
export default class DungeonScene extends Phaser.Scene {
  constructor() {
    super({ key: 'DungeonScene' });
    this.level = 0;
    this.enemies = [];
    this.enemiesDead = [];
    this.doorLocations = [];
    this.restartScene = false; 
  }



  preload() {
    this.load.image("questionbackground", "assets/backgrounds/questionbackground.jpg",);
    this.load.image("tiles", "assets/tilesets/lostlibrarytiles.png");
    this.load.image("collider", "assets/spritesheets/collider.png");
    this.load.image("chestopen", "assets/spritesheets/chestopen.png");
    this.load.image("stairslocked", "assets/spritesheets/stairslocked.png");
    this.load.spritesheet(
      "characters",
      "assets/spritesheets/buch-characters-64px-extruded.png",
      {
        frameWidth: 64,
        frameHeight: 64,
        margin: 1,
        spacing: 2,
      }
    );
    this.load.spritesheet(
      "enemy",
      "assets/spritesheets/enemy.png",
      {
        frameWidth: 64,
        frameHeight: 64,
        margin: 0,
        spacing: 0,
      }
    );
  }

  create() {
    gameState.isPaused = false; 

    gameState.speed = 100;
    
    gameState.keys = 0;

    const destroyArray = [];

    const stairsBoxGroup = this.physics.add.group({
      immovable: true,
      allowGravity: false
    });;
    
    const chestBoxGroup = this.physics.add.group();
    let chestBoxGroupSum = 0;
    gameState.chestBoxActive = 0;
    const chestopen = "chestopen";

    const bookColliderGroup = this.physics.add.group({
      immovable: true,
      allowGravity: false
    });

    const enemyGroup = this.physics.add.group();

    gameState.enemyGroup = enemyGroup;

    this.level++;
    gameState.level = this.level - 1;


    gameState.keysNeeded = 6;

    const dungeonWidth = 65;
    const dungeonHeight = 65;


    // Generate a random world with a few extra options:
    //  - Rooms should only have odd number dimensions so that they have a center tile.
    //  - Doors should be at least 2 tiles away from corners, so that we can place a corner tile on
    //    either side of the door location
    this.dungeon = new Dungeon({
      width: dungeonWidth,
      height: dungeonHeight,
      doorPadding: 2,
      rooms: {
        width: { min: 7, max: 15, onlyOdd: true },
        height: { min: 7, max: 15, onlyOdd: true },
      },
    });

    this.dungeon.drawToConsole();

    // Creating a blank tilemap with dimensions matching the dungeon
    const map = this.make.tilemap({
      tileWidth: 64,
      tileHeight: 64,
      width: this.dungeon.width,
      height: this.dungeon.height,
    });
    const tileset = map.addTilesetImage("tiles", null, 64, 64, 0, 0); // 1px margin, 2px spacing
    this.groundLayer = map.createBlankLayer("Ground", tileset).fill(TILES.FLOOR);
    this.stuffLayer = map.createBlankLayer("Stuff", tileset);
    this.bookLayer = map.createBlankLayer("Book", tileset);
    this.bookBottomLayer = map.createBlankLayer("BookBottom", tileset);
    const shadowLayer = map.createBlankLayer("Shadow", tileset).fill(TILES.BLANK);

    this.tilemapVisibility = new TilemapVisibility(shadowLayer);

    // Use the array of rooms generated to place tiles in the map
    // Note: using an arrow function here so that "this" still refers to our scene
    this.dungeon.rooms.forEach((room) => {
      const { x, y, width, height, left, right, top, bottom } = room;

      // Fill the floor with mostly clean tiles
      this.groundLayer.putTileAt(TILES.FLOOR);

      // Place the room corners tiles
      this.groundLayer.putTileAt(TILES.WALL.TOP_LEFT, left, top);
      this.groundLayer.putTileAt(TILES.WALL.TOP_RIGHT, right, top);
      this.groundLayer.putTileAt(TILES.WALL.BOTTOM_RIGHT, right, bottom);
      this.groundLayer.putTileAt(TILES.WALL.BOTTOM_LEFT, left, bottom);
      

      // Fill the walls
      for (let i = 0; i < width - 2; i++) {
        this.groundLayer.putTileAt(TILES.WALL.TOP, left + 1 + i, top);
        const isCorner = (i === 0) || (i === width - 3);
        if (!isCorner) {
          // Randomize a single book row below the top wall
          this.bookLayer.weightedRandomize(TILES.BOOK.TOP, left + 1 + i, top + 1, 1, 1);
        } else {
          this.stuffLayer.weightedRandomize(TILES.DECORATION.CORNERS, left + 1 + i, top + 1, 1, 1);
        };
      };

      // Assuming this is within the context of your DungeonScene class
      for (let i = 0; i < width - 2; i++) {
        this.groundLayer.putTileAt(TILES.WALL.BOTTOM, left + 1 + i, bottom);

        const isCorner = (i === 0) || (i === width - 3);
        if (!isCorner) {
          const tileX = (left + 1 + i) * 64; // Convert tile position to world position
          const tileY = (bottom - 1) * 64;
          this.bookBottomLayer.putTileAt(TILES.BOOK.BOTTOM, left + 1 + i, bottom - 1);
        } else {
          this.stuffLayer.weightedRandomize(TILES.DECORATION.CORNERS, left + 1 + i, bottom - 1, 1, 1);
        };
      };



      for (let i = 0; i < height - 2; i++) {
        this.groundLayer.putTileAt(TILES.WALL.LEFT, left, top + 1 + i);
      };
      for (let i = 0; i < height - 2; i++) {
        this.groundLayer.putTileAt(TILES.WALL.RIGHT, right, top + 1 + i);
      };

      // Dungeons have rooms that are connected with doors. Each door has an x & y relative to the
      // room's location. Each direction has a different door to tile mapping.
      const doors = room.getDoorLocations(); // → Returns an array of {x, y} objects
      for (let i = 0; i < doors.length; i++) {
        const doorX = x + doors[i].x;
        const doorY = y + doors[i].y;
        
        if (doors[i].y === 0) {
          this.groundLayer.putTilesAt(TILES.DOOR.TOP, x + doors[i].x - 1, y + doors[i].y);
          this.bookLayer.removeTileAt(doorX, doorY); // Remove tile above the door
          this.bookLayer.removeTileAt(doorX, doorY + 1); // Remove tile above the door
          this.doorLocations.push({ x: doorX, y: doorY + 2});
          this.stuffLayer.removeTileAt(doorX, doorY); // Remove tile above the door
          this.stuffLayer.removeTileAt(doorX, doorY + 1); // Remove tile above the door
        } else if (doors[i].y === room.height - 1) {
          this.groundLayer.putTilesAt(TILES.DOOR.BOTTOM, x + doors[i].x - 1, y + doors[i].y);
          this.bookBottomLayer.removeTileAt(doorX, doorY); // Remove tile above the door
          this.bookBottomLayer.removeTileAt(doorX, doorY - 1); // Remove tile above the door
          this.doorLocations.push({ x: doorX, y: doorY - 1});
          this.stuffLayer.removeTileAt(doorX, doorY); // Remove tile above the door
          this.stuffLayer.removeTileAt(doorX, doorY - 1); // Remove tile above the door
        } else if (doors[i].x === 0) {
          this.groundLayer.putTilesAt(TILES.DOOR.LEFT, x + doors[i].x, y + doors[i].y - 1);
          this.doorLocations.push({ x: doorX + 1, y: doorY});
        } else if (doors[i].x === room.width - 1) {
          this.groundLayer.putTilesAt(TILES.DOOR.RIGHT, x + doors[i].x, y + doors[i].y - 1);
          this.doorLocations.push({ x: doorX + - 1, y: doorY});
        }
      }
    });

    this.bookBottomLayer.forEachTile(tile => {
      // Check if a tile exists at this position
      if (tile.index !== -1) { // -1 typically means no tile
        // Convert the tile's X and Y coordinates to world coordinates
        const worldX = map.tileToWorldX(tile.x) + tile.width * 0.5;
        const worldY = map.tileToWorldY(tile.y) + tile.height;

        // Create the collider object at the world coordinates
        let collider = this.physics.add.sprite(worldX, worldY, null);
        collider.setSize(tile.width, tile.height - 12); // Assuming collider size matches tile size
        collider.setImmovable(true);
        collider.body.allowGravity = false;
        collider.setVisible(false); 
        bookColliderGroup.add(collider);
      }
    });


    // Separate out the rooms into:
    //  - The starting room (index = 0)
    //  - A random room to be designated as the end room (with stairs and nothing else)
    //  - An array of 90% of the remaining rooms, for placing random stuff (leaving 10% empty)
    const rooms = this.dungeon.rooms.slice();
    const startRoom = rooms.shift();  
    const endRoom = Phaser.Utils.Array.RemoveRandomElement(rooms);
    gameState.endRoom = endRoom;
    const otherRooms = Phaser.Utils.Array.Shuffle(rooms).slice(0, rooms.length * 0.9);

    // Place the stairs
    this.stuffLayer.putTileAt(TILES.STAIRS, endRoom.centerX, endRoom.centerY);
    gameState.stairsLocked = this.add.image(endRoom.centerX * 64 + 32, endRoom.centerY * 64 + 32, 'stairslocked');
    const stairsBox = this.add.rectangle(endRoom.centerX * 64 + 32, endRoom.centerY * 64 + 32, 66, 66, 0x000000);
    stairsBox.setVisible(false);
    stairsBoxGroup.add(stairsBox);
    
    const chestBoxCounter = 12;

    // Place stuff in the "otherRooms"
    otherRooms.forEach((room) => {
      if (chestBoxGroupSum < chestBoxCounter) {
        this.stuffLayer.putTileAt(TILES.CHEST, room.centerX, room.centerY);
        const chestX = room.centerX;
        const chestY = room.centerY;
        
        const surroundingTiles = [
          { x: chestX - 2, y: chestY },     // Tile to the left of the chest
          { x: chestX + 2, y: chestY },     // Tile to the right of the chest
          { x: chestX, y: chestY - 2 },     // Tile above the chest
          { x: chestX, y: chestY + 2 },     // Tile below the chest
          // ... add more tiles as needed
        ];
        
        // Randomize decoration at each surrounding tile
        surroundingTiles.forEach(tile => {
          // Check if the tile is a door location
          const isDoor = this.doorLocations.some(door => door.x === tile.x && door.y === tile.y);
          if (!isDoor) {
            // It's not a door, safe to place decoration
            this.stuffLayer.weightedRandomize(TILES.DECORATION.CENTER, tile.x, tile.y, 1, 1);
          }
        });
  
        // Check if there's a chest tile at this position
        const tile = this.stuffLayer.getTileAt(chestX, chestY);
        if (tile && tile.index === TILES.CHEST) {
          // Make the chest tile interactive
          const chestBox = this.add.rectangle(chestX * 64 + 32, chestY * 64 + 32, 68, 68, 0x000000);
          chestBox.setVisible(false); 
          chestBox.setOrigin(0.5);

          // Make the rectangle interactive
          chestBox.setInteractive();

          // Add the rectangle to the physics group
          chestBoxGroup.add(chestBox);
          chestBoxGroupSum += 1;
          gameState.chestBoxActive += 1;
        }
      } else {
        const enemyX = room.centerX * 64 + 32;
        const enemyY = room.centerY * 64 + 32;
        const enemyCounter = 2;

        for (let i = 0; i < enemyCounter; i++) {
          // Create an enemy at the specified position
          const enemy = new Enemy(this, enemyX, enemyY);
          enemyGroup.add(enemy.sprite);
          this.physics.add.collider(enemy.sprite, this.groundLayer);
          this.physics.add.collider(enemy.sprite, this.stuffLayer);
          this.physics.add.collider(enemy.sprite, this.bookLayer);
          this.physics.add.collider(enemy.sprite, bookColliderGroup);
          this.enemies.push(enemy);
        }

        const surroundingTiles = [
          { x: room.centerX - 2, y: room.centerY },     // Tile to the left of the chest
          { x: room.centerX + 2, y: room.centerY },     // Tile to the right of the chest
          { x: room.centerX, y: room.centerY - 2 },     // Tile above the chest
          { x: room.centerX, y: room.centerY + 2 },     // Tile below the chest
          // ... add more tiles as needed
        ];
        
        // Randomize decoration at each surrounding tile
        surroundingTiles.forEach(tile => {
          // Check if the tile is a door location
          const isDoor = this.doorLocations.some(door => door.x === tile.x && door.y === tile.y);
          if (!isDoor) {
            // It's not a door, safe to place decoration
            this.stuffLayer.weightedRandomize(TILES.DECORATION.CENTER, tile.x, tile.y, 1, 1);
          }
        });
      }
    });

    // Not exactly correct for the tileset since there are more possible floor tiles, but this will
    // do for the example.
    this.groundLayer.setCollisionByExclusion([9, 11]);
    this.stuffLayer.setCollisionBetween(0, 28);
    this.bookLayer.setCollisionBetween(3, 6);

    // Place the player in the first room
    const playerRoom = startRoom;
    const x = map.tileToWorldX(playerRoom.centerX);
    const y = map.tileToWorldY(playerRoom.centerY);
    this.player = new Player(this, x, y);

    
    /*const enemy = new Enemy(this, x, y);
    enemyGroup.add(enemy.sprite);
    this.physics.add.collider(enemy.sprite, this.groundLayer);
    this.physics.add.collider(enemy.sprite, this.stuffLayer);
    this.enemies.push(enemy);*/

    // Watch the player and tilemap layers for collisions, for the duration of the scene:
    this.physics.add.collider(this.player.sprite, this.groundLayer);
    this.physics.add.collider(this.player.sprite, this.bookLayer);
    this.physics.add.collider(this.player.sprite, bookColliderGroup);
    this.physics.add.collider(this.player.sprite, this.stuffLayer);
    this.physics.add.collider(this.player.sprite, chestBoxGroup, (player, chestBox) => {
      questionChestFunction(this, chestBox, gameState, destroyArray, this.player, TILES, this.dungeonLayer, chestopen, this.level);
    });
    this.physics.add.collider(this.player.sprite, enemyGroup, (player, enemy) => {
      questionEnemyFunction(this, this.player, enemy, gameState, destroyArray, this.enemies, this.enemiesDead);
    });

    this.physics.add.collider(this.player.sprite, stairsBoxGroup, (player, stairsBox) => {
      if (gameState.keys >= gameState.keysNeeded) {
        this.enemies.forEach(enemy => {
          enemy.sprite.destroy();
        });

        this.enemies = []; 
        this.player.destroy();
        stairsBox.destroy();

        if (this.level === 6) {
          this.scene.stop('DungeonScene')
          this.scene.start('EndScene');
        } else {
          this.time.delayedCall(50, () => {
            this.restartScene = true;
          });
        }
      }
   });



    // Phaser supports multiple cameras, but you can access the default camera like this:
    const camera = this.cameras.main;

    // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.startFollow(this.player.sprite);

    // Help text that has a "fixed" position on the screen
    gameState.displayKeys = this.add
      .text(16, 16, `You need 6 books to continue. You have: ${gameState.keys} .\nCurrent level: ${this.level}`, {
        font: "18px monospace",
        fill: "#000000",
        padding: { x: 20, y: 10 },
        backgroundColor: "#ffffff",
      })
      .setScrollFactor(0)
    gameState.displayKeys.setDepth(1)


    const togglePause = () => {
      gameState.isPaused = !gameState.isPaused 
      if (gameState.isPaused) {
        this.physics.world.pause();
      } else {
        this.physics.world.resume();
      }
    };

    this.escapeKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    // Add an event listener for the 'down' event
    this.escapeKey.on('down', () => {
      togglePause();
    });

    
    

    
    }
    

  update(time, delta) {
    if (this.restartScene) {
      this.restartScene = false; // Reset the flag
      this.scene.restart();
    }
    
    if (this.hasPlayerReachedStairs) return;

    if (this.player && this.player.sprite && this.player.sprite.body) {
      this.player.update();
    }

    if (gameState.chestBoxActive < gameState.keysNeeded || gameState.keys + gameState.chestBoxActive < gameState.keysNeeded) {
      // Fade the camera to black to indicate a significant change (like game over or level restart).
      const cam = this.cameras.main;
      cam.fade(250, 0, 0, 0);
      // Once the fade completes, perform a series of actions to reset the game.
      cam.once("camerafadeoutcomplete", () => {
        // Destroy all enemies and reset game-related parameters.
        this.enemies.forEach(enemy => {
          enemy.sprite.destroy();
        });
        this.level = gameState.level;
        gameState.keys = 0;
        this.enemies = [];
        this.enemiesDead = [];
        // Destroy the player and transition to the start or another scene.
        this.player.destroy();
        this.restartScene = true;
      });
    }

    // Find the player's room using another helper method from the dungeon that converts from
    // dungeon XY (in grid units) to the corresponding room object
    const playerTileX = this.groundLayer.worldToTileX(this.player.sprite.x);
    const playerTileY = this.groundLayer.worldToTileY(this.player.sprite.y);
    const playerRoom = this.dungeon.getRoomAt(playerTileX, playerTileY);

    this.tilemapVisibility.setActiveRoom(playerRoom);


    if (gameState.endRoom === playerRoom) {
      gameState.stairsLocked.setVisible(true);
    } else {
      gameState.stairsLocked.setVisible(false);
    }

    if (gameState.keys >= 6) {
      gameState.stairsLocked.setVisible(false);
    }

    this.enemies.forEach((enemy) => {
      enemy.update(time, delta);

    // Check if the enemy is in the same room as the player
    const enemyTileX = this.groundLayer.worldToTileX(enemy.sprite.x);
    const enemyTileY = this.groundLayer.worldToTileY(enemy.sprite.y);
    const enemyRoom = this.dungeon.getRoomAt(enemyTileX, enemyTileY);

    // Set enemy sprite visibility based on the player's room
    enemy.sprite.visible = enemyRoom === playerRoom;
    });
  }
}
