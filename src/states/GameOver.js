import Phaser from 'phaser-ce';
 

export default class extends Phaser.State {

  create () {
    this.bg = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'background');

    this.resize();
  }

  resize() {
    this.gameOver.x = this.world.centerX;
    this.gameOver.y = this.world.centerY;
  }
}