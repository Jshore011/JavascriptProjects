/* class that handles all game play*/

const startGame = document.getElementById('StartGame');
startGame.addEventListener('click', function(){
Draw();
});

const canvas = document.getElementById("hangman");
const context = canvas.getContext("2d");

/* draw's gallows*/
Draw = () => {
    context.beginPath();
    context.moveTo(175, 225);
    context.lineTo(5, 225);
    context.moveTo(40, 225);
    context.lineTo(25, 5);
    context.lineTo(100, 5);
    context.lineTo(100, 25);
    context.stroke();
}


/*clears the game*/
clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
}



}
//generate a random word from the dictionary
var word = words[Math.floor(Math.random() * items.length)];
consol.log(word);


//get a guess from the player
var guesses = []; //empty array to hold guesses

function add_element_to_array()
{
    guesses[x] = document.getElementById("button").value;
    alert("Element: " + guesses[x] + " Added at index " + x);
    x++;
    document.getElementById("button").value = "";
}