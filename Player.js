class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene; 

        this.player.body.setCollideWorldBounds(true);
    }



    update() {

    
     this.movePlayerManager();
       
       
      } //End update area
       
       
       
         
       
       
          movePlayerManager(){
       
               if (this.cursorKeys.left.isDown)
       {
           this.body.setVelocityX(-160);
       
           this.body.anims.play('left', true);
       }
       else if (this.cursorKeys.right.isDown)
       {
           this.body.setVelocityX(160);
       
           this.body.anims.play('right', true);
       }
       else
       {
           this.body.setVelocityX(0);
       
           this.body.anims.play('turn');
       }
       
       if (this.cursorKeys.up.isDown && this.body.touching.down)
       {
           this.body.setVelocityY(-325);
       }
       
       
          } 


} // End of Player class 