var gamestate = 0, playercount = 0;
var form, player, game;
var car1, car2, car3, car4;
var carIMG1, carIMG2, carIMG3, carIMG4;
var cars = [];
var database;
var allplayers;
var distance = 0;
var groundIMG;
var trackIMG;
var rectangle;
var sound;

function preload(){
    carIMG1 = loadImage("images/car1.png");
    carIMG2 = loadImage("images/car2.png");
    carIMG3 = loadImage("images/car3.png");
    carIMG4 = loadImage("images/car4.png");
    groundIMG = loadImage("images/ground.png");
    track = loadImage("images/track.jpg");
    sound = loadSound("sounds/win.mp3");

}
function setup(){
    
    var canvas = createCanvas(displayWidth, displayHeight - 130);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();
    


}
function draw(){

    if (playercount === 2){
        game.updategameState(1);

    }
    if (gamestate === 1 ){
        clear();
        game.play();
    }
    if (gamestate === 2 ){
        game.end();
   
    }
   

}



