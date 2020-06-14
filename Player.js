class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene; 

        this.scene.physics.world.enable(this);
        this.setImmovable(false);


        this.body.setCollideWorldBounds(true);

        //Add player to existing scene
        this.scene.add.existing(this);


    }



    update(cursorKeys) {

    
     this.movePlayerManager(cursorKeys);
       
       
      } //End update area
       
       
       
         
       
       
          movePlayerManager(cursorKeys){
       
               if (cursorKeys.left.isDown)
       {
           this.body.setVelocityX(-160);
       
           this.body.anims.play('left', true);
       }
       else if (cursorKeys.right.isDown)
       {
           this.body.setVelocityX(160);
       
           this.body.anims.play('right', true);
       }
       else
       {
           this.body.setVelocityX(0);
       
           this.body.anims.play('turn');
       }
       
       if (cursorKeys.up.isDown && this.body.touching.down)
       {
           this.body.setVelocityY(-325);
       }
       
       
          } 


} // End of Player class 