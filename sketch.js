var  background_image
var bow,bow_image
var arrow,arrow_image
var balloon,balloon_image1,balloon_image2,balloon_image3,balloon_image4
var balloon2,balloon5



function preload(){
 //load your images here 
  background_image=loadImage("background0.png")
  bow_image=loadImage("bow0.png")
  arrow_image=loadImage("arrow0.png")
  balloon_image1=loadImage("blue_balloon0.png")
  balloon_image2=loadImage("red_balloon0.png")
  balloon_image3=loadImage("pink_balloon0.png")
  balloon_image4=loadImage("green_balloon0.png")
 
 
  
}

function setup() {
  createCanvas(600, 600);
  background=createSprite(0,0,600,600)
  background.addImage(background_image)
  background.scale=2.5
   bow=createSprite(460,50,10,10)
  bow.addImage(bow_image)
  arrow=createSprite(460,0,10,10)
  arrow.addImage(arrow_image)
  arrow.scale=0.2
  //add code here
  
  
  
}

function draw() {
  bow.y=World.mouseY
  
  
if(keyDown("space")) {
  arrow=createSprite(460,0,10,10)      
  arrow.visible=true
  arrow.velocityX=-5
    arrow.y=mouseY
   arrow.addImage(arrow_image)
  arrow.scale=0.3
           }
  
 // if(frameCount%60===0){
    
    
   // var rand = Math.round(random(1,4));
    //switch(rand){
    //case 1:balloon.addImage(balloon_image1)
      //     break;
    //case 2:balloon.addImage(balloon_image2)
      //     break;
    //case 3:balloon.addImage(balloon_image3)
          
     // case 4:balloon.addImage(balloon_image4)
       //      break;
    // default:break
   
  for(var i = 60;i<390;i=i+60){
    balloon=createSprite(50,i,10,10)
    balloon.addImage( balloon_image2)
    balloon.scale=0.1
  }
  
  for(var ii = 120;ii<330;ii=ii+60){
  balloon1=createSprite(100,ii,10,10)
  balloon1.addImage( balloon_image1 )
  balloon1.scale=0.1
  }
  
  for(var iii = 180;iii<270;iii=iii+60){
    balloon2=createSprite(150,iii,10,10)
    balloon2.addImage( balloon_image3)
    balloon2.scale=1.2
    
  }
   balloon5=createSprite(200,220,10,10)
  balloon5.addImage(balloon_image4)
  balloon5.scale=0.09
                    
  arrow.lifetime=150
  background.velocityX=-3
  
  if(background.x<0){
    background.x=600
    
  }
  
  drawSprites();
  
  
    
  
}

