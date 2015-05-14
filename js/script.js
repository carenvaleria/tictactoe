//setting of the board
var player1Name="" , player2Name="", turn = "";
var grid =  [[0,0,0],[0,0,0],[0,0,0]];
var hasWinner = 0, moveCount=0;

function boardMsg(x){
    return $("#board").text(x);
}

//seeting the turn for player1 and 2
function setTurn(){
    var r = Math.floor((Math.random() * 2) + 1);
    hasWinner=0;
    if(r==1){
        turn = player1Name;
        boardMsg(player1Name+"'s turn now!");
    }
    else{
        turn = player2Name;
        boardMsg(player2Name+"'s turn now!");
    }
}

//setting up an initialization for more rounds, clearing the board
function init(){
        turn = "";
        grid =  [[0,0,0],[0,0,0],[0,0,0]];
        boardMsg("");
        $(".col-md-4 button").map(function() {
            $(this).text("");
        }).get();
        hasWinner = 0;
        moveCount=0;
}

//function to play game again
$("#playButton").click(function (){

    if(hasWinner==1){
        init();
    }

    player1Name = $("#player-1-inp").val();
    player2Name = $("#player-2-inp").val();

    if(player1Name=="" || player2Name==""){
        alert("Please set player all the names.");
        return;
    }

    setTurn();
});

//function to set score to scoreboard
