/* class that handles all game play*/

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