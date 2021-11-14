var spookyRoom, mazeBackground
var security
var system
var gameState = 1
var score = 0
var mainPlayer
var mainPlrImg

const accessCode1 = "DIAMOND"
const accessCode2 = "PYTHON"
const accessCode3 = "GLOVE"
const accessCode4 = "AGE"

function preload(){
  spookyRoom = loadImage("images/Spooky room.jpeg")
  mazeBackground = loadImage("images/Maze Background.jpeg");
  mainPlrImg = loadImage("images/Clipart_boy.png");
}

function setup(){
createCanvas(1450, 700)
security = new Security()
system = new System()
}

function draw(){
background(spookyRoom);

clues();
//security.display();



if(score === 4) {
 gameState = 1
}

if(gameState === 1){
  clear()
  background(mazeBackground);
  var wall1 = createSprite(400,350,10,500)
  var wall2 = createSprite(505,100,220,10)
  var wall3 = createSprite(525,600,260,10) 
  var wall4 = createSprite(1000,350,10,500) 
  var wall5 = createSprite(850,100,310,10)
  var wall6 = createSprite(870,600,270,10)
  var wall7 = createSprite(430,225,70,10) 
  var wall8 = createSprite(520,150,70,10) 
  var wall9 = createSprite(555,180,10,70) 
  var wall10 = createSprite(690,210,270,10); 
  var wall11 = createSprite(600,215,10,140);
  var wall12 = createSprite(880,275,10,140);
  var wall13 = createSprite(900,200,50,10);
  var wall12 = createSprite(930,180,10,50);
  var wall13 = createSprite(900,300,50,10);
  var wall14 = createSprite(920,420,10,240);
  var wall15 = createSprite(900,540,50,10);
  var wall16 = createSprite(820,550,10,100);
  var wall17 = createSprite(730,580,10,50);
  var wall18 = createSprite(710,560,50,10);
  var wall19 = createSprite(680,540,10,50);
  var wall20 = createSprite(700,520,50,10);
  var wall21 = createSprite(730,475,10,100);
  var wall22 = createSprite(650,230,10,50);
  var wall23 = createSprite(790,430,120,10);
  var wall24 = createSprite(850,450,10,50);
  var wall25 = createSprite(670,250,50,10);
  var wall26 = createSprite(690,330,10,170);
  var wall27 = createSprite(660,410,50,10);
  var wall28 = createSprite(630,500,10,190);
  var wall29 = createSprite(980,250,50,10);
  var wall30 = createSprite(730,350,80,10);
  var wall31 = createSprite(500,550,10,100);
  var wall32 = createSprite(500,300,100,10)  
  var wall33 = createSprite(450,345,10,100)
  var wall34 = createSprite(520,400,150,10)
  var wall35 = createSprite(480,350,50,10)
  var wall36 = createSprite(600,355,10,100);
  var wall37 = createSprite(600,500,50,10);
  var wall38 = createSprite(720,310,60,10);
  var wall39 = createSprite(745,280,10,50);
  var wall40 = createSprite(765,250,50,10);
  var wall41 = createSprite(700,190,10,40);
  var wall42 = createSprite(720,175,50,10);
  var wall43 = createSprite(820,180,10,50);

  mainPlayer = createSprite(650,100,50,27)
  mainPlayer.addImage(mainPlrImg)
  mainPlayer.scale = 0.12

 


  drawSprites();
}

}

function clues(){
  fill("white")
  textSize(15);
  text("What is very shiny and very costly?",100,50);
  fill("cyan")
  text("Hint : This is required to beat the game, or to save your family...", 100, 70)

  fill("white")
  textSize(15);
  text("Which is the coding platform that is also the name of an animal?",750,50);
  fill("cyan")
  text("Hint : T H P O Y N", 750,70)

  fill("white")
  textSize(15);
  text("What has 5 fingers but is a Non-living object?",750,500);
  fill("cyan")
  text("Hint :  E O G V L", 750,520)

  fill("white")
  textSize(15);
  text("What goes up, but never comes down?",100,500);
  fill("cyan")
  text("Hint : G A E", 100,520)
}
