import Phaser from 'phaser-ce';

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');

    this.load.setPreloadSprite(this.loaderBar);
    //
    // load your assets
    //
    this.load.image('bullet1', 'assets/images/bullet (1).png');
    this.load.spritesheet('dude','assets/images/dude.png', 32, 48);
    this.load.image('background', 'assets/images/background.jpg');
    this.load.spritesheet('dude2', 'assets/images/dude2.png', 32, 48);
    this.load.image('weapon', 'assets/images/waffe1.png');
    this.load.spritesheet('weapon2', 'assets/images/waffe2.png', 64, 64);
  }

  create () {
    this.state.start('Game');
  }
}

