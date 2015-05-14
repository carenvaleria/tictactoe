//setting of the board
var grid =  [[0,0,0],[0,0,0],[0,0,0]];
var getWinner = 0, moveCount=0;

function boardMsg(x){
    return $("#board").text(x);
}

//function for player input moves
$(".button").click(function (){
    var row = $(this).parent().index();
    var col = $(this).children();

//check for winner

function getWinner(){

}