var cat, catimage1,catimag0e2,catimage3,catimage4 ;
var mouse,mouseimage1,mouseimage2,mouseimage3,mouseimage4;
var gardenimage;

function preload() {
    gardenimage=loadImage("images/garden.png")//load the images here
    catimage1=loadImage("images/cat1.png")
    catimage2=loadImage("images/cat2.png")
    catimage3=loadImage("images/cat3.png")
    catimage4=loadImage("images/cat4.png")
    mouseimage1=loadImage("images/mouse1.png")
    mouseimage2=loadImage("images/mouse2.png")
    mouseimage3=loadImage("images/mouse3.png")
    mouseimage4=loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(800,600);
    cat.addAnimation("catimage",catimage1,catimage2,catimage3)
    cat.scale=0.2
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseimage",mouseimage1)
    mouse.scale=0.2

}

function draw(){

    background(gardenimage);
    if(cat.x-mouse.x<(cat.width/2-mouse.width/2)){
        cat.velocityX=0
        cat.x=300
    }

    drawSprites();
}


function keyPressed(){
    if (keyCode===LEFT_ARROW){
        cat.velocityX=-5
    }

  //For moving and changing animation write code here


}
