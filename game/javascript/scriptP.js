var config = {
    type: Phaser.CAVANAS,
    width: 1200,
    height: 500,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 500 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

new Phaser.Game(config);




var block;
var cursor;
var saut;
var iter = 3.14;




function preload() {
    this.load.spritesheet('warrior', 'assets/sprites/perso1.png', { frameWidth: 30, frameHeight: 30 });
    this.load.image('sky', 'assets/sprites/back.jpg');
    this.load.image('background', 'assets/sprites/dungeon.jpg')
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('ground', 'assets/sprites/ground.png')
    this.load.image('platforms', 'assets/sprites/platforms.png');
    this.load.image('tree', 'assets/sprites/tree.png')
}






function create() {

    //warrior.animations.add('still', [5],1,true);
    this.add.image(0, 0, 'background').setOrigin(0);
    //implatation des bords 
    this.physics.world.setBounds(0, 0, 3840, 1886);
    //this.physics.world.gravity.y = 300;


    this.anims.create({
        key: 'left',
        frame: this.anims.generateFrameNumbers('warrior', { start: 0, end: 5, }),
        frameRate: 30,
        repeat: -1
    })
    warrior = this.physics.add.sprite(100, 350, 'block');
    warrior.setBounce(0.2);
    warrior.setCollideWorldBounds(true);
    this.warrior = warrior;
    this.cursors = this.input.keyboard.createCursorKeys();
    saut = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    var platforms = this.physics.add.staticGroup();
    //platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(700, 350, 'ground');
    platforms.create(550, 450, 'ground');
    platforms.create(250, 450, 'ground');
    platforms.create(200, 350, 'platforms');

    //sol
    platforms.create(250, 1886, 'ground');
    platforms.create(750, 1886, 'ground');
    platforms.create(1250, 1886, 'ground');
    platforms.create(1750, 1886, 'ground');
    platforms.create(2250, 1886, 'ground');
    platforms.create(2750, 1886, 'ground');
    platforms.create(3250, 1886, 'ground');
    platforms.create(3550, 1886, 'ground');

    this.physics.add.collider(warrior, platforms);
    this.cameras.main.setSize(1200, 500);
    this.cameras.main.startFollow(warrior);
}

function update() {
    var cursors = this.cursors;
    var warrior = this.warrior;

    if (cursors.left.isDown) {
        warrior.setVelocityX(-200);
        //warrior.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        warrior.setVelocityX(200);
        //warrior.anims.play('right', true);
    }
    else {
        warrior.setVelocityX(0);
        //warrior.anims.play('turn');
    }

    if (cursors.up.isDown && warrior.body.touching.down) {
        warrior.setVelocityY(-330);
    }
}
















/*
  

  if (cursors.up.isDown)
    {
        warrior.body.moveUp(300)
    }

    else if (cursors.down.isDown)
    {
        warrior.body.moveDown(300);
    }


    if (cursors.left.isDown)
    {
        warrior.body.velocity.x = -300;
    }

    else if (cursors.right.isDown)
    {
        warrior.body.moveRight(300);
    }


    
}

    if (cursors.left.isDown){
        warrior.x = warrior.x - 10;
       // warrior.animations.play('left');
        
    }

   
    else if (cursors.right.isDown){
        warrior.x = warrior.x +10;
        
    }
    else if (saut.isDown) {
        warrior.y = warrior.y - 15;
    }






    */