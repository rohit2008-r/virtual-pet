var dog,dogimg,foods,foodStock, database,happydog;
var position;

function preload()
{
  //load images here
  dogimg=loadImage("dogImg.png")
  happydog=loadImage("dogimg1.png")
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  createCanvas(500,500);
  dog=createSprite(250,300)
  dog.addImage(dogimg);
  dog.scale=0.2


  foodstock = database.ref('food');
foodstock.on("value", readStock);
}

function draw(){
  background(0);
  fill("yellow")
  text("press up_arrow",100,100)
  
   if(keyWentDown(UP_ARROW)){
     writeStock(foods)
     dog.addImage(happydog)
    }
    
    
    drawSprites();
  
}

function readStock(data){
  foods = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}


