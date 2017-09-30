import Phaser from 'phaser-ce';
import Weapon from './Weapon';

export default class extends Phaser.Sprite {
  constructor ( game, spritekey, cursors, bullet) {
    super(game, 100, 0);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    

    this.body.bounce.y = 0.1;
    this.body.collideWorldBounds = true;
    this.body.setSize(20, 32, 5, 16);

    this.playersprite = new Phaser.Sprite(game, 0, 0, spritekey);
    this.playersprite.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
    this.playersprite.animations.add('turn', [6], 20, true);
    this.playersprite.animations.add('right', [8, 9, 10, 11, 12], 10, true);
    this.cursors = cursors;

    this.weaponsprite = new Phaser.Sprite(game, -30, 5, 'weapon2');
    this.weaponsprite.animations.add('left', [1], 1, true);
    this.weaponsprite.animations.add('right', [0], 1, true);
    this.weaponsprite.animations.play('left');
    this.addChild(this.weaponsprite);

    this.addChild(this.playersprite);

    
    this.weapon = new Weapon(this.game, this, bullet);
  }
  
  get bullets (){
    return this.weapon.bullets;
  }

  update() {
    this.body.velocity.x = 0;
    this.jumpTimer = 0;
    if (this.cursors.left.isDown) {
      this.body.velocity.x = -150;

      if (this.facing != 'left') {
        this.playersprite.animations.play('left');
        this.facing = 'left';
        this.weaponsprite.animations.play('left');
        this.weaponsprite.position.x = -30;
       
      }
    }
    else if (this.cursors.right.isDown) {
      this.body.velocity.x = 150;

      if (this.facing != 'right') {
        this.playersprite.animations.play('right');
        this.facing = 'right';
        this.weaponsprite.animations.play('right');
        this.weaponsprite.position.x = 0;
      }
    }
    else {
      if (this.facing != 'idle') {
        this.playersprite.animations.stop();

        if (this.facing == 'left') {
          this.frame = 0;
        }
        else {
          this.frame = 5;
        }
      }
    }

    if (this.cursors.up.isDown && this.body.onFloor() && game.time.now > this.jumpTimer) {
      this.body.velocity.y = -350;
      this.jumpTimer = game.time.now + 750;
    }

    if (this.cursors.fire.isDown)
    {
      this.weapon.fire(this.facing);
    }
  }
}