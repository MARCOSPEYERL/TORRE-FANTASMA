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
  tower.velocityY = 1;
  ghost = createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3;
  doorsGroup = new Group();
  invisibleBlockGroup = new Group();
  climbersGroup = new Group();
}




function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
  grupo();
  
  ghost.velocityY = ghost.velocityY + 0.8;


  if(keyDown("space")){
    ghost.velocityY = -10;
  }
  
  if(keyDown("left_arrow")){
    ghost.x = ghost.x + -2
  }

  if(keyDown("right_arrow")){
    ghost.x = ghost.x + 2
  }
if(invisibleBlockGroup.isTouching(ghost)){
ghost.destroy()
gameState = "end"
  
}


  drawSprites();
}

function grupo(){
  if(frameCount % 200 === 0){
    door = createSprite(100,-50);
    door.addImage("door",doorImg);
    door.velocityY = 1;
    doorsGroup.add(doors)

    climber = createSprite(100,5);
    climber.addImage("climber",climberImg);
    climber.velocityY = 1;
    climbersGroup.add(climber);

    invisibleBlock = createSprite(100,10,100,10);
    invisibleBlock.velocityY = 1;
    invisibleBlockGroup.add(invisibleBlock);

    door.x = Math.round(random(110,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;

    ghost.depth = door.depth;
    ghost.depth += 1;
    
  }
  

}