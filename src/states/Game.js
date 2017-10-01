import Phaser from 'phaser-ce';
import Weapon from '../sprites/Weapon';
import Player2 from '../sprites/Player2';

export default class extends Phaser.State {
  init() { }
  preload() { }
  
  create() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.time.desiredFps = 30;

    this.bg = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'background');

    this.game.physics.arcade.gravity.y = 250;

    var player1keys = game.input.keyboard.addKeys ( { 'up' : Phaser.KeyCode.W, 'left' : Phaser.KeyCode.A, 'right' : Phaser.KeyCode.D, 'fire' : Phaser.KeyCode.SPACEBAR })
    this.player = new Player2 (game, 'dude', player1keys, 'bulletR');
    this.player.position = new Phaser.Point (100, 0);
    this.add.existing (this.player);

    var player2keys = game.input.keyboard.addKeys ( { 'up' : Phaser.KeyCode.UP, 'left' : Phaser.KeyCode.LEFT, 'right' : Phaser.KeyCode.RIGHT, 'fire' : Phaser.KeyCode.ENTER})
    this.player2 = new Player2 (game, 'dude2', player2keys, 'bulletB');
    this.player2.position = new Phaser.Point (innerWidth-100, 0);
    this.add.existing (this.player2);
    this.map = game.add.tilemap("map");
    this.map.addTilesetImage("Tileset1");
    this.map.setCollisionByExclusion([0]);
    this.layer = this.map.createLayer("Kachelebene 1");
    //this.level = new Level(game);
    //this.add.existing(this.level);

    this.fight = game.add.audio('Fight');
    this.fight.play();
  }

  update() {
    game.physics.arcade.collide(this.player, this.layer);
    game.physics.arcade.collide(this.player2, this.layer);

    game.physics.arcade.collide(this.player,this.player2.bullets,this.collisionHandeler1, null, this);
    game.physics.arcade.collide(this.player2,this.player.bullets,this.collisionHandeler2, null, this);

    game.physics.arcade.collide(this.player.bullets,this.layer,this.bullet, null, this);
    game.physics.arcade.collide(this.player2.bullets,this.layer,this.bullet, null, this);
  }

  bullet(bullet) {
    bullet.kill();
  }

  collisionHandeler1 (obj1, obj2)
  {
    this.fatality = game.add.audio('Fatality');
    this.fatality.play();
    this.state.start('GameOver');
  }

  collisionHandeler2 (obj1, obj2)
  {
    this.fatality = game.add.audio('Fatality');
    this.fatality.play();
      this.state.start('GameOverB');
  }

  render() { 
    game.debug.text(game.time.suggestedFps, 32, 32);
    //game.debug.body(this.player);
  }
}


