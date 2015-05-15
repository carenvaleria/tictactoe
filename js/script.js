//setting of the board
var grid = [[0,0,0],[0,0,0],[0,0,0]];
var player1 = "images/oslash.png";
var	player2 = "images/ouml.png";
var currentPlayer = "images/oslash.png"


//function for player input moves
$(document).ready(function(){
	var currentPlayer = "images/oslash.png"
	 
	$('.button').click(function (){
	
	     $(this).children().attr("src", currentPlayer);
	     if(currentPlayer == "images/oslash.png") {
			currentPlayer = "images/ouml.png"; 
			} 

			else if(currentPlayer == "images/ouml.png") {
			currentPlayer = "images/oslash.png"; 
			}  
	});
});
//check for winner
function getWinner(){
	if(winnerIsOslash()){
		return 'oslash';
	}if(winnerIsOuml()){
		return '&ouml;';
	}
	return null;
}



