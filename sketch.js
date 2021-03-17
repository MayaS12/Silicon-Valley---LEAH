var game;
var stateSelect;
var genreSelect;
var instrumentSelect;
var feeSelect;
var artistSelect;
var clGenreSelect;
var clArtistSelect;
var clInstrumentSelect;
var clStateSelect;
var database;
var creator;
var count = 0;
var allCreators;
var logoImg;
var logo;
var display;
var gameState = "homeScreen";
var col = "#000000";

function preload() {
  logoImg = loadImage("Silicon Valley logo.png");
}

function setup() {
  createCanvas(1200, 700);
  database = firebase.database();
  //image(logoImg, 350, 0);
  logo = createSprite(600, 240, 10, 10);
  logo.addImage(logoImg);

  game = new Game();
  creator = new Creator();
  display = new Display();
  creator.getCount();

  Creator.getCreatorInfo();
  //display.show();
}

function draw() {
  background("#990066");

  game.display();
  // image(logoImg, 350, 0);
  if (gameState === "homeScreen") {
    game.hideFun();
    gameState = "signIn";
  }
  if (gameState === "signIn") {
    game.signIn();
    if (game.button3) {
      game.creatorPageInfo();
      gameState = "end";
    }
    if (game.button4) {
      game.clientPageInfo();
      gameState = "displaySearchResults";
    }
  }
  if (gameState === "displaySearchResults") {
    display.show();
  }

  if (gameState === "end") {
    gameState = "homeScreen";
  }
  drawSprites();
}
