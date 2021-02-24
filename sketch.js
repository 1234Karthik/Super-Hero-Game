const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var monster1, monster1Image;
var monster2, monster2Image;
var superhero1, superhero1Image;
var superhero2, superhero2Image;
var GamingBackgroundImage;

function preload() {

//preload the images here

  monster1Image = loadImage("Monster-01.png");
  monster2Image = loadImage("Monster-02.png");
  superhero1Image = loadImage("Superhero-01.png");
  GamingBackgroundImage = loadImage("GamingBackground.png");

}

function setup() {

  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 600, 2750, 25);

  hero = new Hero(325, 325, 150);

  fly = new Fly(hero.body, { x: 300, y: 50 });

  monster = new Monster(1250, 500, 200);

  //tower 1
  block1 = new Block(700, 350, 70, 70);
  block2 = new Block(700, 300, 70, 70);
  block3 = new Block(700, 250, 70, 70);
  block4 = new Block(700, 200, 70, 70);
  block5 = new Block(700, 150, 70, 70);
  block6 = new Block(700, 100, 70, 70);
  block7 = new Block(700, 50, 70, 70);

  //tower 2
  block8 = new Block(800, 350, 70, 70);
  block9 = new Block(800, 300, 70, 70);
  block10 = new Block(800, 250, 70, 70);
  block11 = new Block(800, 200, 70, 70);
  block12 = new Block(800, 150, 70, 70);
  block13 = new Block(800, 100, 70, 70);

  //tower 3
  block14 = new Block(900, 350, 70, 70);
  block15 = new Block(900, 300, 70, 70);
  block16 = new Block(900, 250, 70, 70);
  block17 = new Block(900, 200, 70, 70);
  block18 = new Block(900, 150, 70, 70);
  block19 = new Block(900, 100, 70, 70);
  block20 = new Block(900, 50, 70, 70);
  block21 =  new Block(900, 25, 70, 70);

  //tower 4
  block22 =  new Block(1000, 350, 70, 70);
  block23 =  new Block(1000, 200, 70, 70);
  block24 =  new Block(1000, 150, 70, 70);
  block25 =  new Block(1000, 100, 70, 70);
  block26 =  new Block(1000, 50, 70, 70);

}

function draw() {

  background(GamingBackgroundImage);
  
  Engine.update(engine);
  
  hero.display();
  ground.display();
  fly.display();
  

  //tower 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //tower 2
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  //tower 3
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //tower 4
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  monster.display();

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});

}