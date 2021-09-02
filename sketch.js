var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600); 

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 4;
  
  ghost = createSprite(200, 200, 50, 50)
  ghost.addImage(ghostImg)
  ghost.scale = 0.35

}

function draw() {
  background(200);
  
  if(tower.y > 600){
      tower.y = 2
    }

    if(keyDown("left_arrow")){
      ghost.x = ghost.x -7
    }

    if(keyDown("right_arrow")){
      ghost.x = ghost.x +7
    }

    if(keyDown("space")){
      ghost.velocityY = -7
    }

    ghost.velocityY = ghost.velocityY +0.6

    spawnDoors();

    drawSprites();

}

function spawnDoors(){

  if(frameCount%100 === 0){
    
    var door = createSprite(200, -50)

    var railing = createSprite(200, 10)
    railing.addImage(climberImg)
    railing.velocityY = 4

    door.addImage(doorImg)

    door.x = Math.round(random(120, 450))
  
    door.velocityY = 4

    door.lifetime = 700
  }


}
