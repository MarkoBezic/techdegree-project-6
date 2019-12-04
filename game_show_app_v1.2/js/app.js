const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
var missed = 0;
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const phrases = [
    "Grape juice is the best",
    "Birds make great pets",
    "Comedy makes me laugh",
    "You win some you lose some",
    "Exercise is a must",
];

var randomPhrase = phrases[ Math.floor( Math.random() * phrases.length )];

// return a random phrase from an array
const getRandomPhraseAsArray = arr => {

}

// add the letters of a string to the display
const addPhraseToDisplay = arr => {

}

// check if a letter is in the phrase
const checkLetter = button => {

}

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
   overlay.style.display = 'none';
});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});