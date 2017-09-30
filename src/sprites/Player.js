import Phaser from 'phaser-ce';

export default class extends Phaser.Sprite {
  constructor ( game ) {
    super(game, 0, 0, 'dude');
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.bounce.y = 0.2;
    this.body.collideWorldBounds = true;
    this.body.setSize(20, 32, 5, 16);

    this.animations.add('left', [0, 1, 2, 3], 10, true);
    this.animations.add('turn', [4], 20, true);
    this.animations.add('right', [5, 6, 7, 8], 10, true);

    this.cursors = game.input.keyboard.createCursorKeys();
    this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.weapon = game.add.weapon(40, 'bullet');      
    this.weapon.setBulletFrames(0, 80, true);    
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 200;

    this.weapon.trackSprite(this, 0, 0, true);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    
        this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  }

  update() {
    this.body.velocity.x = 0;
    this.jumpTimer = 0;
    if (this.cursors.left.isDown) {
      this.body.velocity.x = -150;

      if (this.facing != 'left') {
        this.animations.play('left');
        this.facing = 'left';
      }
    }
    else if (this.cursors.right.isDown) {
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

    if (this.jumpButton.isDown && this.body.onFloor() && game.time.now > this.jumpTimer) {
      this.body.velocity.y = -250;
      this.jumpTimer = game.time.now + 750;
    }

  }
}