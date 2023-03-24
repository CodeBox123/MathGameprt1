var player1name = localStorage.getItem("player1");
var player2name = localStorage.getItem("player2");

document.getElementById("player1name").innerHTML= player1name;
document.getElementById("player2name").innerHTML= player2name;

var player1score = 0
var player2score = 0

document.getElementById("score1").innerHTML= player1score;
document.getElementById("score2").innerHTML= player2score;

document.getElementById("questionturn").innerHTML= "Question Turn -" + player1name;
document.getElementById("answerturn").innerHTML= "Answer Turn -" + player2name;