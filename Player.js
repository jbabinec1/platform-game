class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key);
        this.scene = scene; 

        this.scene.physics.world.enable(this);
        this.setImmovable(false);


        this.setCollideWorldBounds(true);

        //Add player to existing scene
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this)


    }



    update(cursorKeys, player) {

        

        if (cursorKeys.left.isDown)
        {
            player.setVelocityX(-160);
        
            player.anims.play('left', true);
        }
        else if (cursorKeys.right.isDown)
        {
            player.setVelocityX(160);
        
            player.anims.play('right', true);
        }
      
        else
        {
            player.setVelocityX(0);
        
            player.anims.play('turn');
        } 
        
        if (cursorKeys.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-325);
        }


    
     //this.movePlayerManager(cursorKeys);
       
       
      } //End update area
       
       
       
         
       
       
         


} // End of Player class 