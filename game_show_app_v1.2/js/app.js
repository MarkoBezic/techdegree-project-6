const overlay = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const phrase = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
var missed = 0


const phrases = [
    "grape juice is the best",
    "birds make great pets",
    "comedy makes me laugh",
    "you win some you lose some",
    "exercise is a must",
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
    const letters = document.getElementsByClassName('letter');
    //creat a variable to store if a match is found and give it an initial value of null
    let match = null;
    //loop through all of the li elements
    for (let i = 0; i < letters.length; i ++){
        //create a conditional that compares the text of the button parameter to the text of the li at the current index of the loop
        if ( letters[i].textContent === button.textContent) {
            //if they match, add the 'show' class to the li
            letters[i].classList.add('show');
            //if they match, store the button text in the match variable
            match = button.textContent;
        } 
    }
    // return the match variable
    return match;
}



//add event listener to the keyboard
    //create an event listener for the qwerty element that listens for the 'clicl' event
qwerty.addEventListener('click', (e) => {
    button = e.target
    //create a conditional the filter out clicks not on buttons and any chosen buttons
    if ( button.tagName === 'BUTTON' ){
        //add the 'chosen' class to the button that was pressed.
        button.className = 'chosen';  
        button.disabled = true; 
        //call the checkLetter function and store the results in a variable
        let letterFound = checkLetter(button);
        //if the checkLetter function does not find a letter, remove one of the heart images and increment the missed counter
        if (letterFound === null){
            const ol = document.querySelectorAll('ol li img');
            ol[missed].src = 'images/lostHeart.png';
            missed += 1;
        }
        
    }
    checkWin();
});

//check if the game has been won or lost
function checkWin (){
    const totalLetters = document.querySelectorAll('.letter').length;
    const totalShow = document.querySelectorAll('.show').length;
    if ( totalLetters === totalShow) {
        overlay.className = 'win';
        overlay.firstElementChild.textContent = 'WINNER!';
        overlay.lastElementChild.textContent = 'Play again';
        overlay.style.display = 'flex';

    } if (missed > 4){
        overlay.className = 'lose';
        overlay.firstElementChild.textContent = 'You have lost!';
        overlay.lastElementChild.textContent = 'Play again';
        overlay.style.display = 'flex';
    }
}

