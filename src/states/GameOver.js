import Phaser from 'phaser-ce';
import Piteroid from '../sprites/Piteroid';
import Ship from '../sprites/Ship';

export default class extends Phaser.State {

  create () {
<<<<<<< HEAD
    this.gameOver = this.add.text(0, 40, 'Winner');
=======
    this.gameOver = this.add.text(0, 40, 'ok');
>>>>>>> f1b1818a9fa7bb5b5b1f6868075a84d26bf1af62
    this.gameOver.font = 'Bangers';
    this.gameOver.padding.set(10, 16);
    this.gameOver.fontSize = 100;
    this.gameOver.fill = '#DF1D28';
    this.gameOver.smoothed = false;
    this.gameOver.anchor.setTo(0.5);

    this.resize();
  }

  resize() {
    this.gameOver.x = this.world.centerX;
    this.gameOver.y = this.world.centerY;
  }
}
//testkommentar