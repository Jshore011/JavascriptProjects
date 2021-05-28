/* class that handles all game play*/

//generate a random word from the dictionary
var word = words[Math.floor(Math.random() * items.length)];
consol.log(word);
//empty array for guesses
var guesses = [];
//get a guess from the player
function add_element_to_array()
{
    guesses[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
}

//check if the letter is valid