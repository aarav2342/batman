var Boy,walking

function preload(){
    walking=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png")
}

function setup(){
   createCanvas(600,900)
   boy=createSprite(200,300)
   boy.addAnimation("boy",walking)
    
}

function draw(){
    background(0)
    drawSprites()
}   

