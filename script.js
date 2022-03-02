let computerPlay;
let userPlay;

const body = document.querySelector('body');

let roundStatus = document.querySelector('.round-status');

//scores:
const userScorePara = document.querySelector('.user-score');
const divider = document.querySelector('.x')
const computerScorePara = document.querySelector('.computer-score');

let userScore = 0;
let computerScore = 0;

//computer buttons:
let compRock = document.querySelector('.computerRock');
let compPaper = document.querySelector('.computerPaper');
let compScissor = document.querySelector('.computerScissor');

//player buttons:
const userRock = document.querySelector('.userRock')
const userPaper = document.querySelector('.userPaper')
const userScissor = document.querySelector('.userScissor')

//winner:
const winner = document.querySelector('.winner'); 

//new match section:
const newMatchPrompt = document.querySelector('.question');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');

//---------------------------------------------------------

userRock.addEventListener('click', userSelectRock);
userPaper.addEventListener('click', userSelectPaper);
userScissor.addEventListener('click', userSelectScissor);



function userSelectRock() {
    userPaper.classList.remove('selected');
    userScissor.classList.remove('selected');

    userRock.classList.add('selected');

    userPlay = 'rock';
    computerPlayRandomizer();
    gameRound();
}

function userSelectPaper() {
    userRock.classList.remove('selected');
    userScissor.classList.remove('selected');

    userPaper.classList.add('selected');

    userPlay = 'paper';
    computerPlayRandomizer();
    gameRound();
}

function userSelectScissor() {
    userRock.classList.remove('selected');
    userPaper.classList.remove('selected');

    userScissor.classList.add('selected');

    userPlay = 'scissor';
    computerPlayRandomizer();
    gameRound();
}

function computerPlayRandomizer() {
    compRock.classList.remove('selected');
    compPaper.classList.remove('selected');
    compScissor.classList.remove('selected');

    let randomNum = Math.floor((Math.random() * 3) + 1);

    switch (randomNum) {
        case 1:
            computerPlay = 'rock';
            compRock.classList.add('selected');
            break;
        case 2:
            computerPlay = 'paper';
            compPaper.classList.add('selected');
            break;
        case 3:
            computerPlay = 'scissor';
            compScissor.classList.add('selected')
            break;     
    }
}

function gameRound() {
    roundStatus.classList.remove('win');
    roundStatus.classList.remove('loss');
    roundStatus.classList.remove('draw');
    
    switch (userPlay) {
        case 'rock':
            if (computerPlay == 'rock') {
                roundStatus.textContent = "It's a draw!";
                roundStatus.classList.add('draw');
            } else if (computerPlay == 'paper') {
                roundStatus.textContent = "You lost! Paper wraps rock.";
                roundStatus.classList.add('loss');

                computerScore += 1;
                computerScorePara.textContent = computerScore;
            } else if (computerPlay == 'scissor') {
                roundStatus.textContent = "You won! Rock breaks scissor.";
                roundStatus.classList.add('win');

                userScore += 1;
                userScorePara.textContent = userScore;
            }
            break;
        
        case 'paper':
            if (computerPlay == 'rock') {
                roundStatus.textContent = "You won! Paper wraps rock.";
                roundStatus.classList.add('win');

                userScore += 1;
                userScorePara.textContent = userScore;
            } else if (computerPlay == 'paper') {
                roundStatus.textContent = "It's a draw!";
                roundStatus.classList.add('draw');
            } else if (computerPlay == 'scissor') {
                roundStatus.textContent = "You lost! Scissor cuts paper.";
                roundStatus.classList.add('loss');

                computerScore += 1;
                computerScorePara.textContent = computerScore;
            }
            break;
        
        case 'scissor':
            if (computerPlay == 'rock') {
                roundStatus.textContent = "You lost! Rock breaks scissor.";
                roundStatus.classList.add('loss');

                computerScore += 1;
                computerScorePara.textContent = computerScore;
            } else if (computerPlay == 'paper') {
                roundStatus.textContent = "You won! Scissor cuts paper.";
                roundStatus.classList.add('win');

                userScore += 1;
                userScorePara.textContent = userScore;
            } else if (computerPlay == 'scissor') {
                roundStatus.textContent = "It's a draw!";
                roundStatus.classList.add('draw');
            }
            break;
    }
    if (userScore == 5) {
        winner.classList.add('winner-style');
        winner.textContent = 'You won the match!'

        body.style.background = '#C3FFE7';

        endGame();
    } else if (computerScore == 5) {
        
        winner.classList.add('winner-style');
        winner.textContent = 'The computer won the match!'

        body.style.background = '#FFD3D3';

        endGame();
    }
}

function endGame() {
    userRock.removeEventListener('click', userSelectRock);
    userPaper.removeEventListener('click', userSelectPaper);
    userScissor.removeEventListener('click', userSelectScissor);

    newMatchPrompt.textContent = 'Want to start another match?';
    newMatchPrompt.classList.add('question-style');
    yes.textContent = 'Yes';
    yes.classList.add('yes-style');
    no.textContent = 'No';
    no.classList.add('no-style');

    yes.addEventListener('click', restart);
    no.addEventListener('click', end);
}

function restart() {
    body.style.background = 'white'

    userScore = 0;
    computerScore = 0;

    userScorePara.textContent = userScore;
    computerScorePara.textContent = computerScore;

    roundStatus.textContent = '';
    roundStatus.classList.remove('win');
    roundStatus.classList.remove('loss');
    roundStatus.classList.remove('draw')

    winner.classList.remove('winner-style');
    winner.textContent = '';

    newMatchPrompt.textContent = '';
    newMatchPrompt.classList.remove('question-style');
    yes.textContent = '';
    yes.classList.remove('yes-style');
    no.textContent = '';
    no.classList.remove('no-style');

    userRock.addEventListener('click', userSelectRock);
    userPaper.addEventListener('click', userSelectPaper);
    userScissor.addEventListener('click', userSelectScissor);

}

function end() {
    body.style.background = 'white';

    const scoreContainer = document.querySelector('.score');
    scoreContainer.remove();

    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.remove();

    roundStatus.remove();

    winner.remove();

    const promptContainer = document.querySelector('.next-match')
    promptContainer.remove();

    const goodbye = document.createElement('p');
    goodbye.textContent = 'Thank you for playing!';
    body.appendChild(goodbye);


}