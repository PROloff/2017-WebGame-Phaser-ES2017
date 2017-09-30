import Phaser from 'phaser-ce';
import Piteroid from '../sprites/Piteroid';
import Player from '../sprites/Player';

export default class extends Phaser.State {
  init() { }
  preload() { }
  
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.time.desiredFps = 30;

    this.bg = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'background');

    this.game.physics.arcade.gravity.y = 250;

    this.player = new Player (game);
    this.add.existing (this.player);
    this.player2 = new Player2 (game);
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

