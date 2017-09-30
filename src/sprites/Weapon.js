import Phaser from 'phaser-ce';

export default class extends Phaser.Sprite {
  constructor ( game, parent) {
    super(game, 0, 0, 'bullet1');
    
    this.weapon = game.add.weapon(40, 'bullet1');      
    this.weapon.setBulletFrames(0, 80, true);    
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletGravity = new Phaser.Point (0,-250);
    this.weapon.fireRate = 200;
    this.weapon.trackSprite(parent, 0, 0, true);

    
   
    
  }
  get bullets (){
    return this.weapon.bullets;
  }

  fire(facing) {
    if (facing == 'left')
    { 
      this.weapon.bulletSpeed = -500;
      this.weapon.fire();
    }
    else
    {
      this.weapon.bulletSpeed = 500;
      this.weapon.fire();
    }
    this.weapon.fire ();
    
   
    
    
  }
}