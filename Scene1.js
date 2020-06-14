class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){


      this.load.image("sky", "assets/sky.png");
      
      this.load.spritesheet('player', 'assets/dude.png',
      { frameWidth: 32, frameHeight: 48 });


      //this.load.image("ground", "assets/platform.png", { frameWidth: 16, frameHeight: 16  }); 

      this.load.image('ground', 'assets/platform.png');

      this.load.image("star", "assets/star.png", { frameWidth: 16, frameHeight: 16  }); 

      this.load.image("bomb", "assets/bomb.png", { frameWidth: 16, frameHeight: 24  }); 


    }



  
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");

    
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'player', frame: 4 } ],
        frameRate: 20
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    



    }
  }