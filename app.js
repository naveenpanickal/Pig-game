/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, activePlayer,roundScore;
scores = [0,0];
activePlayer = 0;
roundScore=0;

/*document.querySelector("#current-"+activePlayer).textContent = dice;//using textcontent we can only modify text contents. 
/*document.queryselector("#current-"+activePlayer).innerhtml = '<em>'+dice+'</em>';//innerHTML is used so that we can change html elements too.
*/
document.querySelector(".dice").style.display="none";
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

/*function btn(){

}
document.querySelector("btn-roll").addEventListener("click",btn);//either we can write in this format by defining function elsewhere .(see that function is only passed to the callback function instead of us calling it: we have put btn instead of btn()  )
*/
/*CALLBACK FUNCTION: btn is a callback function ie it is not called by us but by another funtion.
*/
document.querySelector(".btn-roll").addEventListener("click",function(){ //ANONYMOYS FUNCTION: the fuction defined here cannot be called by anyone else as it doesn't have a name.
//1.Random number
var dice = Math.floor(Math.random()*6+1);
//2.Display the result
var btnDom = document.querySelector(".dice");
btnDom.style.display ="block";
btnDom.src="dice-" + dice + ".png";
//3.Update the score if the outcome is not 1
if(dice !== 1){
    roundScore += dice;
    console.log(roundScore);
    document.querySelector("#current-" + activePlayer).textContent = roundScore; 
   document.querySelector(".btn-hold").addEventListener("click",function(){
       scores[activePlayer] += roundScore;
       roundScore=0;
       console.log(scores);
       document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];
       if(activePlayer === 1){
           activePlayer = 0;
       }
       else{
           activePlayer = 1;
       }
       })

}
else{

    roundScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = roundScore; 
    if(activePlayer===1){
        activePlayer = 0;
    }
    else{
        activePlayer = 1;
    }

}



}) ;