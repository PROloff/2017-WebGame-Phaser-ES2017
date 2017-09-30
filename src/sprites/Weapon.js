import Phaser from 'phaser-ce';

export default class extends Phaser.Sprite {
  constructor ( game ) {
    super(game, 0, 0, 'bullet1');
    

    
    this.body.collideWorldBounds = true;

    this.cursors = game.input.keyboard.createCursorKeys();


    this.weapon = game.add.weapon(40, 'bullet1');      
    this.weapon.setBulletFrames(0, 80, true);    
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 200;

    this.weapon.trackSprite(this, 0, 0, true);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    
    
  }
  get bullets (){
    return this.weapon.bullets;
  }

  update() {
   
    this.weapon.fire();

  }
}