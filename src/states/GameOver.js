import Phaser from 'phaser-ce';
 

export default class extends Phaser.State {

  create () {
    this.bg = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'Blue');
   
  }


}