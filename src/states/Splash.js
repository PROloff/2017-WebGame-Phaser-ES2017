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
   
    this.load.image('background2','../../assets/images/background2.jpg');
    this.load.audio('Menue', '../../assets/sounds1/MENU.mp3');
    this.load.audio('End', '../../assets/sounds1/END.mp3');
  }

  create () {
    
    this.state.start('Hauptmenue');
  }
}

