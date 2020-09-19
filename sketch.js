function setup() {
  createCanvas(700,300);
  lane1=createSprite(350, 100, 700, 5);
  lane1=createSprite(350, 200, 700, 5);
  car1=createSprite(10, 50, 30, 10);
  car2=createSprite(10, 150, 30, 10);
  car3=createSprite(10, 250, 30, 10);
  car1weight=random(400,1500);
  car2weight=random(400,1500);
  car3weight=random(400,1500);
  wall1=createSprite(690, 50, 10, 80);
  wall2=createSprite(690, 150, 10, 80);
  wall3=createSprite(690, 250, 10, 80);
  car1speed=random(55,90);
  car2speed=random(55,90);
  car3speed=random(55,90);
}

function draw() {
  background(0,0,0); 
  drawSprites();
  car1.velocityX=car1speed;
  car2.velocityX=car2speed;
  car3.velocityX=car3speed;

  if(car1.isTouching(wall1))
    {
    car1.velocityX=0;
    var derfomationCar1=(0.5*car1weight*car1speed*car1speed)/(22500);
      if(derfomationCar1>180)
      {
      car1.shapeColor=color(255,0,0);  
      }
      if(derfomationCar1<180 && derfomationCar1>100)
      {
      car1.shapeColor=color(230,230,0);  
      }
      if(derfomationCar1<100)
      {
      car1.shapeColor=color(0,255,0);  
      }
    }

    if(car2.isTouching(wall2))
    {
    car2.velocityX=0;
    var derfomationCar2=(0.5*car2weight*car2speed*car2speed)/(22500);
      if(derfomationCar2>180)
      {
      car2.shapeColor=color(255,0,0);  
      }
      if(derfomationCar2<180 && derfomationCar2>100)
      {
      car2.shapeColor=color(230,230,0);  
      }
      if(derfomationCar2<100)
      {
      car2.shapeColor=color(0,255,0);  
      }
    }
    
    if(car3.isTouching(wall3))
    {
    car3.velocityX=0;
    var derfomationCar3=(0.5*car1weight*car3speed*car3speed)/(22500);
      if(derfomationCar3>180)
      {
      car3.shapeColor=color(255,0,0);  
      }
      if(derfomationCar3<180 && derfomationCar3>100)
      {
      car3.shapeColor=color(230,230,0);  
      }
      if(derfomationCar3<100)
      {
      car3.shapeColor=color(0,255,0);  
      }
    }   
}