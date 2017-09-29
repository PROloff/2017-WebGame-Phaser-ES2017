import Phaser from 'phaser-ce';
import Piteroid from '../sprites/Piteroid';
import Ship from '../sprites/Ship';

export default class extends Phaser.State {
  init() { }
  preload() { }
  
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.time.desiredFps = 30;

    this.bg = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'background');

    this.game.physics.arcade.gravity.y = 250;

    this.player = game.add.sprite(32, 32, 'dude');
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

    this.player.body.bounce.y = 0.2;
    this.player.body.collideWorldBounds = true;
    this.player.body.setSize(20, 32, 5, 16);

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('turn', [4], 20, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.cursors = game.input.keyboard.createCursorKeys();
    this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  }

  update() {
    this.player.body.velocity.x = 0;
    this.jumpTimer = 0;
    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -150;

      if (this.facing != 'left') {
        this.player.animations.play('left');
        this.facing = 'left';
      }
    }
    else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = 150;

      if (this.facing != 'right') {
        this.player.animations.play('right');
        this.facing = 'right';
      }
    }
    else {
      if (this.facing != 'idle') {
        this.player.animations.stop();

        if (this.facing == 'left') {
          this.player.frame = 0;
        }
        else {
          this.player.frame = 5;
        }

        this.facing = 'idle';
      }
    }

    if (this.jumpButton.isDown && this.player.body.onFloor() && game.time.now > this.jumpTimer) {
      this.player.body.velocity.y = -250;
      this.jumpTimer = game.time.now + 750;
    }

  }


  render() { 
    game.debug.text(game.time.suggestedFps, 32, 32);
  }
}//test
