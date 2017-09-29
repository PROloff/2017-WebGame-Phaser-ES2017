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
    this.load.image('pit', 'assets/images/pit.png');
    this.load.image('bullet', 'assets/images/bullet.png');
    this.load.image('ship', 'assets/images/ship.png');
    this.load.image('smoke', 'assets/images/smoke.png');
    this.load.image('dude','assets/images/dude.png' );
    this.load.image('background', 'assets/images/background.jpg');
    this.load.image('bullet1', 'assets/images/bullet(1)');
  }

  create () {
    this.state.start('Game');
  }
}
