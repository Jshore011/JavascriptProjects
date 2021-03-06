const statusDisplay = document.querySelector('.gameStatus');

let active = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const win = () => `Player ${currentPlayer} has won!`;
const draw = () => `Its a Tie!`;
const turn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = turn();

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

function blockPlayed(clickedBlock, clickedBlockIndex) {
    gameState[clickedBlockIndex] = currentPlayer;
    clickedBlock.innerHTML = currentPlayer;
}

function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = turn();
}

function gameValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = win();
        active = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = draw();
        active = false;
        return;
    }

    playerChange();
}

function blockClick(clickedBlockEvent) {
    const clickedBlock = clickedBlockEvent.target;
    const clickedBlockIndex = parseInt(clickedBlock.getAttribute('data-cell-index'));

    if (gameState[clickedBlockIndex] !== "" || !active) {
        return;
    }

    blockPlayed(clickedBlock, clickedBlockIndex);
    gameValidation();
}
//restarts game
function restartGame() {
    active = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = turn();
    document.querySelectorAll('.block').forEach(block => block.innerHTML = "");
}

document.querySelectorAll('.block').forEach(block => block.addEventListener('click', blockClick));
document.querySelector('.gameRestart').addEventListener('click', restartGame);
