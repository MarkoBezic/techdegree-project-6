const overlay = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const phrase = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
var missed = 0

const phrases = [
    "Grape juice is the best",
    "Birds make great pets",
    "Comedy makes me laugh",
    "You win some you lose some",
    "Exercise is a must",
];

//Listen for start button to be pressed
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Get around phrase and split it into an array of letters
function getRandomPhraseAsArray(arr){
        const randomPhrase = arr[ Math.floor( Math.random() * arr.length )];
        return randomPhrase.split('');
}


//Adding phrase letters to display
function addPhraseToDisplay(arr){
    const randomPhraseLetters = getRandomPhraseAsArray(arr);
    for (let i = 0; i < randomPhraseLetters.length; i ++){
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = randomPhraseLetters[i];
        if (li.textContent !== ' '){
            li.className = 'letter';
        }else{
            li.className = 'space';
        }
        ul.appendChild('li');
    }
}
addPhraseToDisplay(phrases);