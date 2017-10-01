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

    //this.laser = game.add.audio('Laser');
   
    
  }
  get bullets (){
    return this.weapon.bullets;
  }

  fire(facing) {
    if (facing == 'left')
    { 
      this.weapon.bulletSpeed = -1000;
      this.weapon.fire();
      //this.laser.play();
    }
    else
    {
      this.weapon.bulletSpeed = 1000;
      this.weapon.fire();
      //this.laser.play();
    }

  }
}