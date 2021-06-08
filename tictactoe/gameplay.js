/* stores the game status element for ease of access*/
const displayStatus = document.querySelector('.gameStatus');

/*variable declaration*/
//sets game status to true
let active = true;
//sets current player to X
let curPlayer = "X";
//starts the gameboard off empty
let state = ["", "", "", "", "", "", "", "", ""];

const winMessage =()=> 'Player ${curPlayer} has won!';
const drawMessage=()=> 'Its a tie!';
const loserMessage=()=> 'You Lose. Sucks to Suck!';
const currPlayTurn=()=> 'Its ${curPlayer}s turn!';

displayStatus.innerHTML=currPlayTurn();
function handleCellPlayed() {

}
function handlePlayerChange(){

}
function handleResultValidation(){

}
function handleCellClick(clickedBlockEvent) {

}
function handleRestartGame() {

}
/*event listeners for game cells*/
document.querySelectorAll('.block').forEach(block => block.addEventListener('click', handleCellClick));
document.querySelector('.gameRestart').addEventListener('click', handleRestartGame);