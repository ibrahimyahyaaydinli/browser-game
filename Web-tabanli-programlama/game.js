
var canvas_0 = document.getElementById("canvas-0");
var context_0 = canvas_0.getContext("2d");
var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

context.fillStyle = "	#4B0082";
context.fillRect(0, 0, canvas.width, canvas.height);
var canvas_2 = document.getElementById("canvas-2");
var context_2 = canvas_2.getContext("2d");
var background = new Image();
var floor = new Image();
var ghost= new Image();
var bomb = new Image();
var kid = new Image();
var fire_destroy = new Image();
var white_fire = new Image();
var logo = new Image();
var tower = new Image();



var retryButton = document.getElementById("retry");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");


var ghost_fire = new Audio();
var scor = new Audio();
var gameOver= new Audio();
var game_music= new Audio();
var die = new Audio();

tower.src="tower.png";
logo.src ="logo.png";
white_fire.src = "white-fire.png";
kid.src = "kid_2.png";
ghost.src = "ghost_1.png";
background.src ="background_1.png"
bomb.src = "bomb.png";
floor.src = "floor.png";
fire_destroy.src ="fire-destroy.png";

gameOver.src="game-over.wav";
ghost_fire.src = "ghost-fire.mp3";
game_music.src ="game-music.wav";
die.src ="die.wav";
let gx=1100;
let by = 100;
let kx=150;
let flag =0;
let currentBombX=0;
let score =0;
let pause = false;
let scoreHolder = 0;
var speed =0;

////////////////////Mouse ile hareket//////////////////
document.addEventListener('mousemove', function(event) {
  if (event.clientX>150 && event.clientY>50 && event.clientX<1200 ) {
    kx=event.clientX-200;
  }

});
///////////////////////////////////////////////

//////////////////Yön tuşları/////////////////
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
      kx-=7;

    }
    else if (event.keyCode == 39) {

      kx+=7;
    }
    else if (event.keyCode == 40) {

      flag =1;
      ghost_fire.play();
      if (by == 100  ){
      currentBombX = kx;
      }

    }
}, true);
///////////////////////////////////
draw_0();

/////////////////// draw_0 giriş canvasını yani canvas_0ı çalıştıran fonksiyon////////////////
function draw_0()
{



  context_0.fillStyle = "	#4B0082";
  context_0.fillRect(0, 0, canvas.width, canvas.height);
  pauseButton.style.display="none";
  retryButton.style.display="none";
  pause = true;
  playButton.style.display="block";
  canvas.style.display="none";
  canvas_2.style.display="none";
  canvas_0.style.display="block";
  context_0.fillStyle = "yellow";
  context_0.font = "20px cursive";



   context_0.fillText("Ya Rü Du", 510,250);
  context_0.fillText("Press play button", 470,400);
  context_0.fillText("You can move the kid with mouse and throw a bomb with PgDn.", 250,440);
context_0.fillText("Be careful, don't let the ghost go to the tower.", 320,475);
context_0.drawImage(logo,300,-100);

}
///////////////////////////////////////////////////


/////////////////// draw oyun canvasını çalıştıran fonksiyon////////////////
function draw(){

    canvas_0.style.display="none";
    retryButton.style.display="none";
    playButton.style.display="none";
    pauseButton.style.display="block";
    context.clearRect(0, 0, canvas.width, canvas.height);

    game_music.play();
    context.drawImage(background,0,-1);
    context.drawImage(floor,0,328);
    context.drawImage(floor,250,328);
    context.drawImage(floor,500,328);
    context.drawImage(floor,750,328);
    context.drawImage(floor,1000,328);
    context.drawImage(kid,kx,50);
    context.drawImage(tower,-150,0);




    if (flag==1)
    {

      by+=5;
      context.drawImage(bomb,currentBombX+10,by);
      if (by == 400 || by>400 ){
      by=100;
      flag = 0;
      }

    }
   else
   {
     context.drawImage(bomb,kx+10,95);
   }

if (  (by > 330 && by < 400) && ( currentBombX > gx-30 && currentBombX < gx+50 )  )
{
speed = Math.floor(Math.random() * 7);
  currentBombX = gx;
  var currentBombY = by;
  gx=1100;
  by = 100;

  flag =0;
  score += 1;
  context.drawImage(fire_destroy,currentBombX,currentBombY);
die.play();


}

gx =gx - (speed +2 ) ;




context.drawImage(ghost,gx,360);

if (gx < -110 && gx >-200 ){





 gx=1100;
 by = 100;
 kx=150;
 flag =0;
 currentBombX=0;
 scoreHolder = score;
 score =0;
console.clear();
speed = Math.floor(Math.random() * 7);
draw_2();
return;

}

  /////// oyun ekranında score yazan yeri sağlayan kod//////////////////
context.fillStyle = "gray";
context.font = "25px cursive";

context.fillText(score, 1000,50);
  ///////////////////////////////////////////////////////

if (!pause) {
  requestAnimationFrame(draw);
  retryButton.style.display="none";
  playButton.style.display="none";

}
else {

  pauseButton.style.display="none";
  playButton.style.display="block";


}

}
/////////////////////////////////////////////////////////////////////////////////

///////////////////////// draw_2 gameover sahnesi için///////////////////////////
function draw_2()
{
  gameOver.play();
  context_2.clearRect(0, 0, canvas.width, canvas.height);

  context_2.fillStyle = "	#4B0082";
  context_2.fillRect(0, 0, canvas.width, canvas.height);
  pauseButton.style.display="none";
  retryButton.style.display="block";
  canvas.style.display="none";
  canvas_2.style.display="block";
  context_2.fillStyle = "yellow";
  context_2.font = "30px cursive";


  context_2.drawImage(logo,300,-100);
  context_2.fillText(scoreHolder, 540,350);
  context_2.fillText("Game Over", 475,400);




}
////////////////////////////////////////////////////////

//// retry fonksiyonunda canvası block ve canvas_2 yi none edip drawı yani block ettiğimiz canvasın bulunduğu fonksiyonu çağırıyoruz///////////////////7 
function retry()
{

 gx = 1100

  canvas.style.display="block";
  canvas_2.style.display="none";
  draw();
}
////////////////////////////////////////////////////////////

function pausee()
{
 pause = true;
}
function playy()
{
pause = false;
  canvas_0.style.display="none";
  canvas.style.display="block";
  canvas_2.style.display="none";

 draw();
}
