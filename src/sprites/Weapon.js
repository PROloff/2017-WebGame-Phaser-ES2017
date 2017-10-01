import Phaser from 'phaser-ce';

export default class extends Phaser.Sprite {
  constructor ( game, parent, bullet) {
    super(game, 0, 0, bullet);

    this.weapon = game.add.weapon(40, bullet);      
    this.weapon.setBulletFrames(0, 80, true);    
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletGravity = new Phaser.Point (0,-250);
    this.weapon.fireRate = 600;

    this.weapon.trackSprite(parent, 34, 40, true);

    this.laser = game.add.audio('Laser');
   
    
  }
  get bullets (){
    return this.weapon.bullets;
  }

  fire(facing) {
    if (facing == 'left')
    { 
<<<<<<< HEAD
      this.weapon.bulletSpeed = -600;
=======
      this.weapon.bulletSpeed = -500;
>>>>>>> c08145c4fc9994460b8bd0ad962699b2d8da2f9e
      this.weapon.fire();
      this.laser.play();
    }
    else
    {
<<<<<<< HEAD
      this.weapon.bulletSpeed = 600;
=======
      this.weapon.bulletSpeed = 500;
>>>>>>> c08145c4fc9994460b8bd0ad962699b2d8da2f9e
      this.weapon.fire();
      this.laser.play();
    }

  }
}