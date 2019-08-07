/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, activePlayer,roundScore,gamePlaying;
const player = {
    one:0,
    two:1
};
newGame();


/*function btn(){

}
document.querySelector("btn-roll").addEventListener("click",btn);//either we can write in this format by defining function elsewhere .(see that function is only passed to the callback function instead of us calling it: we have put btn instead of btn()  )
*/

/*CALLBACK FUNCTION: btn is a callback function ie it is not called by us but by another funtion.
*/
document.querySelector(".btn-roll").addEventListener("click",function(){ //ANONYMOYS FUNCTION: the fuction defined here cannot be called by anyone else as it doesn't have a name.
if(gamePlaying){
//1.Random number
var dice = Math.floor(Math.random()*6+1);
//2.Display the result
var btnDom = document.querySelector(".dice");
btnDom.style.display ="block";
btnDom.src="dice-" + dice + ".png";
//3.Update the score if the outcome is not 1
if(dice !== 1){
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore; }
else{
    //Next player
    nextPlayer();
  

}
}
}) ;
//Hold
document.querySelector(".btn-hold").addEventListener("click",function(){
    if(gamePlaying){
    //1.Add current score to the global score   
    scores[activePlayer] += roundScore;
    //2.Update UI
    document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];
    //3.Check if the current player won.
    if (scores[activePlayer]>= 100){
        document.querySelector(".dice").style.display="none";
        document.getElementById("name-"+activePlayer).textContent="Winner!";
        document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner"); 
        document.querySelector(".player-"+ activePlayer + "-panel").classList.remove("active"); 
        //document.querySelector(".btn-roll").style.display="none";
        //document.querySelector(".btn-hold").style.display="none";
        /*We can either define the stoping of game afer winning by defining a state variable or by setting the roll and hold button display to none*/
    gamePlaying= false;
    }

else{
    //4.Next player

       nextPlayer();
}

  }  },false);
    document.querySelector(".btn-new").addEventListener("click",newGame);

    function nextPlayer(){
    if(activePlayer === player.one){
        activePlayer = player.two;
    }
    else{
        activePlayer = player.one;
    }
    roundScore = 0;
    document.getElementById("current-0").textContent= 0 ;
    document.getElementById("current-1").textContent= 0 ; 
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    //document.querySelector(".player-0-panel").classList.add(".active");
    //document.querySelector(".player-1-panel").classList.remove(".active");

}
function newGame(){
scores = [0,0]; 
activePlayer = player.one;
roundScore=0;
gamePlaying = true;

/*document.querySelector("#current-"+activePlayer).textContent = dice;//using textcontent we can only modify text contents. 
/*document.queryselector("#current-"+activePlayer).innerhtml = '<em>'+dice+'</em>';//innerHTML is used so that we can change html elements too.
*/
document.querySelector(".dice").style.display="none";
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("name-"+player.one).textContent="Player 1";
document.getElementById("name-"+player.two).textContent="Player 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");

//document.querySelector(".btn-roll").style.display="inline-block";
//document.querySelector(".btn-hold").style.display="inline-block";




}