// Paredes Lab1
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,
    wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall21,wall22,wall23,wall24,wall25,wall26,
    wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38;

// Imagenes VAR
var playerAnm,npc1Anm,meta1Anm,menuImg,gameMenuImg;

// PC,NPC
var player, npc1, meta1;

//Estado inicial juego
var gameState = "serve";

// Elementos
var backScreen;

// JS Codes
var form, game, questions,system,answers;

function preload() {
    menuImg = loadImage("MenuImg.jpg");

    meta1Anm = loadImage("img/mt1.png","img/mt2.png","img/mt3.png","img/mt4.png");

    playerAnm = loadAnimation("img/wr1.png","img/wr2.png","img/wr3.png","img/wr4.png","img/wr5.png","img/wr6.png");

    npc1Anm = loadAnimation("img/st1.png","img/st2.png","img/st3.png","img/st4.png","img/st5.png","img/st6.png","img/st7.png","img/st8.png","img/st9.png","img/st10.png",
                           "img/st11.png","img/st12.png","img/st13.png","img/st14.png","img/st15.png","img/st16.png","img/st17.png","img/st18.png","img/st19.png","img/st20.png",
                           "img/st21.png");
}


function setup() {
    createCanvas(displayWidth, displayHeight);
    form = new Form();
    game = new Game();
    questions = new Questions();
    system = new System();
}

function draw() {
    background("skyblue");
    
    if (gameState == "serve") {
        form.display();
    }else if (gameState == "play"){
        game.display();
    }else if (gameState == "question1") {
        questions.display();
    }


    drawSprites();
}

function createWalls(sprite,x,y,width,height) {
    sprite = createSprite(x,y,width,height);
    sprite.shapeColor = "gray";
}