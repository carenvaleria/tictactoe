//setting of the board
var player1 = "images/oslash.png";
var	player2 = "images/ouml.png";
var player1Class = "oslash";
var player2Class = "ouml";
var currentPlayer = player1;


//function for player input moves
$(document).ready(function(){
	 
	$('.button').click(function (){
		console.log(currentPlayer);
	    $(this).children().attr("src", currentPlayer);
	    $(this).children().show();
	    if(currentPlayer == player1) {
	    	$(this).addClass(player1Class);
	 
		} 
		else if(currentPlayer == player2) {
			$(this).addClass(player2Class);

		} 

	    getWinner();

	    if(currentPlayer == player1) {
			currentPlayer = player2; 
		} 

		else if(currentPlayer == player2) {
			currentPlayer = player1; 
		}  

		
	});
});

//check wins on rows
checkWin($('#a'), $('#b'), $('#c'));
checkWin($('#d'), $('#e'), $('#g'));
checkWin($('#g'), $('#h'), $('#i'));

//check wins on columns
checkWin($('#a'), $('#d'), $('#g'));
checkWin($('#b'), $('#e'), $('#h'));
checkWin($('#c'), $('#g'), $('#i'));

//check wins diagonally
checkWin($('#a'), $('#e'), $('#g'));
checkWin($('#g'), $('#e'), $('#c'));

//get winner
function getWinner() {

//$(elem)hasClass(x), ()

}





