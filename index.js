var name=prompt("Miss Birde wants be your friend. Make a name for yourself. Type your name & press ok to continue. Miss Birde will call u null if u shy your name.");
alert("chirrup! Miss Birde & "+name+" r conected via Dicee.");
document.querySelector(".refresh").addEventListener("click",x);
var fire=false;
function x(){
var randomNumber=Math.floor(Math.random()*6+1);
var randomDice=("dice"+randomNumber+".png");
document.querySelectorAll(".row .img")[0].setAttribute("src",randomDice);
var randomNumber2=Math.floor(Math.random()*6+1);
var randomDice2=("dice"+randomNumber2+".png");
document.querySelectorAll(".row .img")[1].setAttribute("src",randomDice2);
if (randomNumber>randomNumber2){
  document.querySelector(".refresh").innerHTML=("Player 1 Won! 🚩");}
else if(randomNumber<randomNumber2)
document.querySelector(".refresh").innerHTML=("🚩 Player 2 Won!");
else if(randomNumber=randomDice2)
document.querySelector(".refresh").innerHTML=("It's a draw! 🎲");
setTimeout(time,1500);
function time(){if(fire===false){alert("click on the result of the previous outcome to continue playing.");}fire=true;}}
$(".end").mouseover(j);
function j(){$(".end").html("Assign 2 friends & start playing; btw Miss Birde created this amazing website for u, "+name+" . cheer her by double tapping her feathers.");}
$(".end").mouseout(k);
function k(){$(".end").html("Dear happines, let's scroll & click to end our fight.");}
$(".refresh").click(l);
function l(){
var audio=new Audio('sing.mp3');
audio.play();}
$(".bird").click(p);
function p(){
var audio=new Audio('sing.mp3');
audio.play();}
$(".img").mouseover(m)
function m(){
var audo=new Audio('sing.mp3');
audo.play();}
