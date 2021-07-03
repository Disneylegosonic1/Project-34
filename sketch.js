//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happyDog.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog1 = createSprite(200,200,30,20);
  dog1.addImage(dog);
  database = firebase.database();
  console.log(database);  
  foodStock = database.ref('/Food');
  foodStock.on("value",realStock);

}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here

  textSize(30);
  textFill("Black");
  text(foodStock, displayWidth/2, 150);

}

function realStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
