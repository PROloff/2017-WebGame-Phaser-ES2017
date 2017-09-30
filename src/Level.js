import Phaser from 'phaser-ce';

export default class extends Phaser.Tilemap {
  constructor ( game, size ) {
    super(game, "testmap");


    this.addTilesetImage("tileset1");
    this.layer = this.createLayer("layer");

  }
}