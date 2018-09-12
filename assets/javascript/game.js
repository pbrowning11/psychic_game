

var compOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var chances = 9;
var guessed;
var compGuess;

reset();
display();



document.onkeyup = function () {
    var userGuess = event.key;
    console.log(userGuess);
    if (userGuess === compGuess) {
        winner();
        alert("Winning letter is: " + userGuess);
    } else if (chances - 1 === 0) {
        loser();
    } else {
        wrongGuess(userGuess);
    }

    display();

}

function display() {
    var adjWins = document.getElementById("wins");
    var adjLosses = document.getElementById("losses");
    var adjChances = document.getElementById("chances");
    var adjLetGuessed = document.getElementById("lettersGuessed");

    adjWins.textContent = "Number of Wins: " + wins;
    adjLosses.textContent = "Number of Losses: " + losses;
    adjChances.textContent = "Guesses Remaining: " + chances;
    adjLetGuessed.textContent = "Letters Guessed: " + guessed.join(",");
}

function winner() {
    wins++;
    reset();
}

function loser() {
    losses++;
    reset();
}

function wrongGuess(letter) {
    chances--;
    guessed.push(letter);
}

function reset() {  
    chances = 9;
    guessed = [];
    compGuess = compOption[Math.floor(Math.random() * compOption.length)];
    console.log(compGuess);
}



