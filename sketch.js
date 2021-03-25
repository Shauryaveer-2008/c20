var prius,innova,altis,glanza;
var priusw,innovaw,altisw,glanzaw;

function setup() {
  createCanvas(1500,750);
  prius=createSprite(50, 150, 50, 10);
  innova=createSprite(50, 300, 50, 10);
  altis=createSprite(50, 450, 50, 10);
  glanza=createSprite(50, 600, 50, 10);
  
  priusw=createSprite(1480,150,10,50);
  innovaw=createSprite(1480,300,10,50);
  altisw=createSprite(1480,450,10,50);
  glanzaw=createSprite(1480,600,10,50);
}

function draw() {
  background(0,0,0);  
 prius.velocityX=-1;
 innova.velocityX=-1;
 altis.velocityX=-1;
 glanza.velocityX=-1;
 
 if(keyWentDown("1")){
  prius.velocityX=prius.velocityX+1
}
if(keyWentDown("2")){
  innova.velocityX=innova.velocityX+1
}
if(keyWentDown("3")){
  altis.velocityX=altis.velocityX+1
}
if(keyWentDown("4")){
  glanza.velocityX=glanza.velocityX+1
}

 if(prius.velocityX<3){
prius.shapeColour="red";
 }
 if(prius.velocityX=3){
prius.shapeColour="orange";
 }
if(prius.velocityX>3){
prius.shapeColour="green";
 }
  
 if(innova.velocityX<3){
  innova.shapeColour="red";
   }
   if(innova.velocityX=3){
  innova.shapeColour="orange";
   }
  if(innova.velocityX>3){
  innova.shapeColour="green";
   }
 
   if(altis.velocityX<3){
    altis.shapeColour="red";
     }
     if(altis.velocityX=3){
    altis.shapeColour="orange";
     }
    if(altis.velocityX>3){
    altis.shapeColour="green";
     }
 
     if(glanza.velocityX<3){
      glanza.shapeColour="red";
       }
       if(glanza.velocityX=3){
      glanza.shapeColour="orange";
       }
      if(glanza.velocityX>3){
      prius.shapeColour="green";
       }
 prius.collide(priusw);
 innova.collide(innovaw);
 altis.collide(altisw);
 glanza .collide(glanzaw);
 
 drawSprites();
}