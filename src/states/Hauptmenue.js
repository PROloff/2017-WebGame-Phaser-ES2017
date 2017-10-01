import Phaser from 'phaser-ce';


export default class extends Phaser.State {

 create () {
    this.Hauptmenue=this.add.sprite(0,0, 'hauptmenue');
    this.Hauptmenue.anchor.set(0.5,0.5);
    var hauptmenuekeys = game.input.keyboard.addKeys ( { 'lvl1' : Phaser.KeyCode.One,'lvl2':Phaser.KeyCode.Two});

   this.resize();
 }

 resize() {
   this.Hauptmenue.x = this.world.centerX;
   this.Hauptmenue.y = this.world.centerY;

 }
 update(){

   if(this.hauptmenuekeys.lvl1.isDown)
  {
    this.state.start('Level1');
  }
   if(this.hauptmenuekeys.lvl2.isDown)
  {
    this.state.start('Level2');
  }
 }
}