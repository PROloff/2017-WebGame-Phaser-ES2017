import Phaser from 'phaser-ce';

export default class extends Phaser.Sprite {
  constructor ( game ) {
    super(game, window.innerWidth-100, 0, 'dude2');
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.bounce.y = 0.2;
    this.body.collideWorldBounds = true;
    this.body.setSize(20, 32, 5, 16);

    this.animations.add('left', [0, 1, 2, 3], 10, true);
    this.animations.add('turn', [4], 20, true);
    this.animations.add('right', [5, 6, 7, 8], 10, true);

    this.cursors = game.input.keyboard.createCursorKeys();
    this.weaponsprite = new Phaser.Sprite(game, 0, 5, 'weapon');
    this.addChild(this.weaponsprite);
  }

  update() {
    this.body.velocity.x = 0;
    this.jumpTimer = 0;
    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
      this.body.velocity.x = -150;

      if (this.facing != 'left') {
        this.animations.play('left');
        this.facing = 'left';
      }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
      this.body.velocity.x = 150;

      if (this.facing != 'right') {
        this.animations.play('right');
        this.facing = 'right';
      }
    }
    else {
      if (this.facing != 'idle') {
        this.animations.stop();

        if (this.facing == 'left') {
          this.frame = 0;
        }
        else {
          this.frame = 5;
        }

        this.facing = 'idle';
      }
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.W) && this.body.onFloor() && game.time.now > this.jumpTimer) {
      this.body.velocity.y = -250;
      this.jumpTimer = game.time.now + 750;
    }

  }
}