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


// return a random phrase from an array
function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[ Math.floor( Math.random() * arr.length )];
    return randomPhrase.split('');
}

// add the letters of a string to the display

function addPhraseToDisplay(arr) {
    const randomPhraseArray = getRandomPhraseAsArray(arr);
    for (let i = 0; i < randomPhraseArray.length; i ++){
       const ul = document.querySelector('ul');
       const li = document.createElement('li');
       li.textContent = randomPhraseArray[i];
       console.log(li);
       if( li !== ' '){
           li.className = 'letter';
       } 
       ul.appendChild(li);
    }
}

addPhraseToDisplay(phrases);

// check if a letter is in the phrase
// function checkLetter (button) {

// }

// check if the game has been won or lost
// const checkWin = () => {

// }

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
   overlay.style.display = 'none';
});

// listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click', e => {

// });