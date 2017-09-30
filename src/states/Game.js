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

    var player1keys = game.input.keyboard.addKeys ( { 'up' : Phaser.KeyCode.W, 'left' : Phaser.KeyCode.A, 'right' : Phaser.KeyCode.D, 'fire' : Phaser.KeyCode.SPACEBAR})
    this.player = new Player2 (game, 'dude', player1keys, 'bulletR');
    this.player.position = new Phaser.Point (100, 0);
    this.add.existing (this.player);

    var player2keys = game.input.keyboard.addKeys ( { 'up' : Phaser.KeyCode.UP, 'left' : Phaser.KeyCode.LEFT, 'right' : Phaser.KeyCode.RIGHT, 'fire' : Phaser.KeyCode.ENTER})
    this.player2 = new Player2 (game, 'dude2', player2keys, 'bulletB');
    this.player2.position = new Phaser.Point (innerWidth-100, 0);
    this.add.existing (this.player2);
  }

  update() {
  }


  render() { 
    game.debug.text(game.time.suggestedFps, 32, 32);
  }
<<<<<<< HEAD
}//test
//test2
//test 3
=======
}
>>>>>>> d11b96cdfc75d07a1c338e58ef1704228e491c45

