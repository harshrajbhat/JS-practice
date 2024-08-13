const randomNum = (parseInt(Math.random() *100 + 1));
console.log(randomNum);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess<1){
        alert('Please enter a number bigger than 1')
    } else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess>10){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNum}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess<randomNum){
        displayMessage(`Number is too Low`)
    } else if (guess>randomNum){
        displayMessage(`Number is too High`)
    }
}

function displayGuess(guess) {   //cleanup method
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `
    numGuess++ ;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrhigh.innerHTML = `<h2> ${message} </h2>`
}

function endGame() {
    
}

function newGame() {
    
}

