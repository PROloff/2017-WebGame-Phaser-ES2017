import Phaser from 'phaser-ce';


export default class extends Phaser.State {

 create () {
   this.bg = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'Red');
   var currentTime = new Date().getTime();
   
   while(currentTime + 1500 >= new Date().getTime()) {
       }
   this.end = game.add.audio('End');
   this.end.play();
 }
 
}