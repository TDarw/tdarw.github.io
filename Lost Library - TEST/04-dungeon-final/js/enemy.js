import { gameState } from './gameState.js';

export default class Enemy {
  constructor(scene, x, y) {
    this.scene = scene;

    const anims = scene.anims;
    anims.create({
      key: "enemy-walk-down",
      frames: anims.generateFrameNumbers("enemy", { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    });
    anims.create({
      key: "enemy-walk-left",
      frames: anims.generateFrameNumbers("enemy", { start: 4, end: 7 }),
      frameRate: 8,
      repeat: -1
    });
    anims.create({
      key: "enemy-walk-right",
      frames: anims.generateFrameNumbers("enemy", { start: 8, end: 11 }),
      frameRate: 8,
      repeat: -1
    });
    anims.create({
      key: "enemy-walk-up",
      frames: anims.generateFrameNumbers("enemy", { start: 12, end: 15 }),
      frameRate: 8,
      repeat: -1
    });

    this.sprite = scene.physics.add.sprite(x, y, "enemy", 0).setSize(22, 33).setOffset(23, 27);

    this.directions = ['up', 'down', 'left', 'right']; // Possible movement directions
    this.randomizeDirection();
  }

  randomizeDirection() {
    this.currentDirection = Phaser.Utils.Array.GetRandom(this.directions);
  }

  freeze() {
    this.sprite.body.moves = false;
  }

  update() {
    let speed = 350 // Adjust the speed of the enemy

    const changeDirection = () => {
      this.currentDirection = Phaser.Utils.Array.GetRandom(this.directions);
    };
  
    const isBlocked = this.sprite.body.blocked.left || this.sprite.body.blocked.right ||
      this.sprite.body.blocked.up || this.sprite.body.blocked.down;

    if (this.scene.physics.world.isPaused) {
      this.sprite.anims.stop();
      speed = 0;
    } else if (isBlocked) {
        this.sprite.anims.stop();
        changeDirection(); // Immediately change direction on collision
      } else {
      // Move the enemy in the current direction
      if (this.currentDirection === 'up') {
        this.sprite.setVelocity(0, -speed);
        this.sprite.anims.play("enemy-walk-up", true);
      } else if (this.currentDirection === 'down') {
        this.sprite.setVelocity(0, speed);
        this.sprite.anims.play("enemy-walk-down", true);
      } else if (this.currentDirection === 'left') {
        this.sprite.setVelocity(-speed, 0);
        this.sprite.anims.play("enemy-walk-left", true);
      } else if (this.currentDirection === 'right') {
        this.sprite.setVelocity(speed, 0);
        this.sprite.anims.play("enemy-walk-right", true);
      }
      
      // Randomly change direction every 5 seconds
      if (this.scene.time.now % 1000 < 10) {
        changeDirection();
      }
    } // This closing brace was missing
  }

  destroy() {
    this.sprite.destroy();
  }
}
