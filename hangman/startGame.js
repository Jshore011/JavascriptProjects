/* simulates game play for the player*/

// Pick a random word
words = getWords[Math.floor(Math.random() * words.length)];

// Set up the amswer answerArrayvar answerArray = [];
for (var i = 0; i < words.length; i++) {
    answer[i] = "_";
}
