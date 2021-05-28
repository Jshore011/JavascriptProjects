/* simulates game play for the player*/

// Pick a random word
words = getWords[Math.floor(Math.random() * words.length)];

// Set up the amswer answerArrayvar answerArray = [];
for (var i = 0; i < words.length; i++) {
    answer[i] = "_";
}

var remaining = words.length;

// The game loop

while (remaining > 0) {
// Show the player their progress alert(answerArray.join(" "));

// Get a guess from the player

    var guess = prompt("Guess a letter.");
    if (guess === null) {
// Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
// Update the game state with the guess

        for (var j = 0; j < words.length; j++) {
            if (words[j] === guess) {
                answer[j] = guess; remaining--;
            }
        }
    }

// The end of the game loop
}

// Show the answer and congratulate the player

alert(answer.join(" "));
alert("Good job! The answer was " + words);

// Write your functions here

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var pickWord = function () {
// Return a random word
};

var setupAnswerArray = function (word) {
// Return the answer array
};
var showPlayerProgress = function (answerArray)
{
//Use alert to show the player their progress
};

var getGuess = function () {
// Use prompt to get a guess
};

var updateGameState = function (guess, word, answer) {
// Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
};

var showAnswerAndCongratulatePlayer = function (answer) {
// Use alert to show the answer and congratulate the player
};
while (remaining > 0) {
    showPlayerProgress(answer);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a letter.");
    } else {
        var correctGuesses = updateGameState(guess, word, answer);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);