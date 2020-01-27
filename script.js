var player_1 = {
    turn: true,
    gameSymbol: '<img src="img/cross.png">',
}

var player_2 = {
    turn: false,
    gameSymbol: '<img src="img/circle.png">',
}
var playerWinner = 0;
var gameBoard = [
    0,0,0,
    0,0,0,
    0,0,0
];

window.onload = function()
{
    setTurn();
}

function setTurn()
{
    if (parseInt(Math.random() * 2) == 1)
    {
        player_1.turn = false;
        player_2.turn = true;
        alert("jogador 2 começa");
    }
    else
    {
        player_1.turn = true;
        player_2.turn = false;
        alert("jogador 1 começa");
    }
}

var winSequences = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

function addSymbol(pos)
{
    let boardPos = document.getElementsByClassName('pos')[pos];

    if (player_1.turn)
    {
        if (gameBoard[pos] == 0)
        {
            boardPos.innerHTML = player_1.gameSymbol;
            player_1.turn = false;
            player_2.turn = true;
            gameBoard[pos] = 1;
        }
    }
    else
    {
        if (gameBoard[pos] == 0)
        {
            boardPos.innerHTML = player_2.gameSymbol;
            player_1.turn = true;
            player_2.turn = false;
            gameBoard[pos] = 2;
        }
    }

    verifyGame();
    winner();

}

function verifyGame()
{
    playerWinner = 3;

    for (let i = 0; i < 9; i++)
    {
        if(gameBoard[i] == 0)
        {
            playerWinner = 0;
        }
    }

    for (let i = 0; i < 8; i++)
    {
        if (gameBoard[winSequences[i][0]] == 1
             && gameBoard[winSequences[i][1]] == 1
             && gameBoard[winSequences[i][2]] == 1)
        {
            playerWinner = 1;
        }
    }

    for (let i = 0; i < 8; i++)
    {
        if (gameBoard[winSequences[i][0]] == 2
             && gameBoard[winSequences[i][1]] == 2
             && gameBoard[winSequences[i][2]] == 2)
        {
            playerWinner = 2;
        }
    }
}

function winner()
{
    if (playerWinner == 1)
    {
        alert("Jogador 1 Ganhou!");
        resetGame();
    }
    else if (playerWinner == 2)
    {
        alert("Jogador 2 Ganhou!");
        resetGame();
    }
    else if (playerWinner == 3)
    {
        alert("Empate");
        resetGame();
    }
}

function cleanTable()
{
    let table = document.getElementsByClassName('pos');
    for(let i = 0; i < 9; i++)
    {
        table[i].innerHTML = "";
    }
}

function resetGame()
{
    playerWinner = 0;
    for (let i = 0; i < 9; i++) { gameBoard[i] = 0; }
    cleanTable();
    setTurn();
}