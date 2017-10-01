import Phaser from 'phaser-ce';



export default class extends Phaser.State {
  

 create () {
    this.Hauptmenue=this.add.sprite(0,0, 'background2');
    this.Hauptmenue.anchor.set(0.5,0.5);
    
    this.menue = game.add.audio('Menue');
    this.menue.play();

   this.resize();
 }

 resize() {
   this.Hauptmenue.x = this.world.centerX;
   this.Hauptmenue.y = this.world.centerY;

 }
 update(){

   if(game.input.keyboard.isDown(Phaser.Keyboard.ONE))
  {
    this.state.start('Level1');
    this.menue.destroy();
  }
   if(game.input.keyboard.isDown(Phaser.Keyboard.TWO))
  {
    this.state.start('Level2');
    this.menue.destroy();
  }
 }
}