class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }
  
    create() {
      
      this.add.image(400, 300, 'sky');
      
      this.platforms = this.physics.add.staticGroup();
      this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
      this.platforms.create(400, 400, 'ground');
      this.platforms.create(50, 250, 'ground');
      this.platforms.create(650, 220, 'ground'); // top platform shown on screen
     
      this.physics.world.setBoundsCollision();

      this.player = new Player(this, 100, 150, 'player');
      this.player.setBounce(0.2);
      
      this.physics.add.collider(this.player, this.platforms); // Add physics for player on platform

      this.cursorKeys = this.input.keyboard.createCursorKeys(); 
      


      // bomb stuff
      this.bombs = this.physics.add.group();
      this.physics.add.collider(this.bombs, this.platforms);
      this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);


    } // End of create function


  



   update() {

    
 //this.movePlayerManager();
   this.player.update(this.cursorKeys, this.player, this.anims, this.play);

   } //End update area



  


   




    hitBomb (player, bomb)
   {
       this.physics.pause();
       this.player.setTint(0xff0000);
       this.player.anims.play('turn');
       this.gameOver = true;
   }







  }