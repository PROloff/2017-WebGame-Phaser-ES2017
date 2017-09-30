import Phaser from 'phaser-ce';


export default class extends Phaser.State {

 create () {
    this.Hauptmenue=this.add.sprite(0,0, 'hauptmenue');
    this.Hauptmenue.anchor.set(0.5,0.5);

   this.resize();
 }

 resize() {
   this.Hauptmenue.x = this.world.centerX;
   this.Hauptmenue.y = this.world.centerY;

 }

 if(this.cursors.2.isDown)
 {
   
 }
}