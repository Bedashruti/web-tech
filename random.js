let randomNum=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult');
const loworhi=document.querySelector('.low0rHi');
const startover=document.querySelector('.result paras');
const p=document.createElement('p')
let prevGuess=[];
let numguess=1;
let playGame=true;
if(playGame){
submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
});
}
        
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a no more than 1')
    }
    else if(guess>100){
        alert('please enter a no less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numguess===11){
            displayGuess(`Game over. Random number was${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===randomNum){
        displayMessage(`you guessed it right`)
        endGame();
    }
    else if (guess<randomNum){
        displayMessage(`Number is too low`)
    }
    else if (guess>randomNum){
        displayMessage(`Number is too high`)
    }
}
function displayGuess(guess){
    userinput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numguess++;
    remaining.innerHTML=`${11-numguess}`;
    // if(remaining<0){
    //     remaining.innerHTML="please refresh page"
    // }
}
function displayMessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">START NEW GAME</h2>`
    startover.appendChild(p)
    playGame=false;
    newGame();
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNum=parseInt(Math.random()*100+1);
        prevGuess=[];
        numguess=1;
        guessSlot.innerHTML=' ';
        remaining.innerHTML=`${11-numguess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        playGame=true;
    });
}