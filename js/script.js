//setting of the board
// var grid =  [[0,0,0],[0,0,0],[0,0,0]];
// var player1 = 0;
// var	player2 = 0;
// var getWinner = 0, moveCount=0;

//function for player input moves
$(document).ready(function(){
	var currentPlayer = "images/ouml.png"
	 
	$('.button').click(function (){
	
	     $(this).children().attr("src", currentPlayer);
	     if(currentPlayer == "images/ouml.png") {
			currentPlayer = "images/oslash.png"; 
			} 

			else if(currentPlayer == "images/oslash.png") {
			currentPlayer = "images/ouml.png"; 
			}  
	});
});

//check for winner

// function getWinner(){

// }