/* stores the game status element for ease of access*/
const displayStatus = document.querySelector('.gameStatus');

/*variable declaration*/
//sets game status to true
let active = true;
//sets current player to X
let curPlayer = "X";
//starts the gameboard off empty
let state = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const winMessage =()=> 'Player ${curPlayer} has won!';
const drawMessage=()=> 'Its a tie!';
const loserMessage=()=> 'You Lose. Sucks to Suck!';
const currPlayTurn=()=> 'Its ${curPlayer}s turn!';

displayStatus.innerHTML=currPlayTurn();
function handleCellPlayed(clickedBlock, clickedBlockIndex) {

    state[clickedBlockIndex] = curPlayer;
    clickedBlock.innerHTML = curPlayer;

}
function handlePlayerChange(){
    curPlayer = curPlayer === "X" ? "O" : "X";
    displayStatus.innerHTML = currPlayTurn();
}
function handleResultValidation(){

}
function handleCellClick(clickedBlockEvent) {
    const clickedBlock = clickedBlockEvent.target;

    const clickedBlockIndex = clickedBlock.getAttribute('id');

    if (state[clickedBlockIndex] !== "" || !active){
        return;
    }

    handleCellPlayed(clickedBlock, clickedBlockIndex);
    handleResultValidation();
}
function handleRestartGame() {
    active = true;
    curPlayer = "X";
    state = ["", "", "", "", "", "", "", "", ""];
    displayStatus.innerHTML = currPlayTurn();
    document.querySelectorAll('.block').forEach(block.innerHTML ="");
}
/*event listeners for game cells*/
document.querySelectorAll('.block').forEach(block => block.addEventListener('click', handleCellClick));
document.querySelector('.gameRestart').addEventListener('click', handleRestartGame);