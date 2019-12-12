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
const randomPhraseLetters = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
   
    for (let i = 0; i < randomPhraseLetters.length; i ++){
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = randomPhraseLetters[i];
        if (li.textContent !== ' '){
            li.className = 'letter';
        }else{
            li.className = 'space';
        }
        ul.appendChild(li);
    }
}
addPhraseToDisplay(randomPhraseLetters);

// Create checkLetter function
    //checkLetter Function with parameeter for button that gets clicked
function checkLetter(button) {
    //store all of the li elements in a variable 'letters'
    const letters = getElementsByClassName('letter');
    //creat a variable to store if a match is found and give it an initial value of null
    let match = null;
    //loop through all of the li elements
    for (let i = 0; i < letters.length; i ++){
        //create a conditional that compares the text of the button parameter to the text of the li at the current index of the loop
        if ( li[i].textContent = button) {
            //if they match, add the 'show' class to the li
            li.className = 'show';
            //if they match, store the button text in the match variable
            match = button.textContent;
        } 
    }
    // return the match variable
    return match;
    console.log(match);
}


//add event listener to the keyboard
    //create an event listener for the qwerty element that listens for the 'clicl' event
qwerty.addEventListener('click', (e) => {
    button = e.target
    //create a conditional the filter out clicks not on buttons and any chosen buttons
    if ( button === 'BUTTON' && button !== 'chosen'){
        //add the 'chosen' class to the button that was pressed.
        button.className = 'chosen';
        //call the checkLetter function and store the results in a variable
        let checkedLetter = checkLetter(button);
        //if the checkLetter function does not find a letter, remove one of the heart images and increment the missed counter
        if (checkedLetter = null){
            const ol = document.querySelector('ol');
            ol.removeChild('li');
            missed += 1;
        }
    }
});

