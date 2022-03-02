let computerPlay;
let userPlay;

const body = document.querySelector('body');

let roundStatus = document.querySelector('.round-status');

//computer buttons:
let compRock = document.querySelector('.computerRock');
let compPaper = document.querySelector('.computerPaper');
let compScissor = document.querySelector('.computerScissor');

//player buttons:
const userRock = document.querySelector('.userRock')
const userPaper = document.querySelector('.userPaper')
const userScissor = document.querySelector('.userScissor')

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
            } else if (computerPlay == 'scissor') {
                roundStatus.textContent = "You won! Rock breaks scissor.";
                roundStatus.classList.add('win');
            }
            break;
        
        case 'paper':
            if (computerPlay == 'rock') {
                roundStatus.textContent = "You won! Paper wraps rock.";
                roundStatus.classList.add('win');
            } else if (computerPlay == 'paper') {
                roundStatus.textContent = "It's a draw!";
                roundStatus.classList.add('draw');
            } else if (computerPlay == 'scissor') {
                roundStatus.textContent = "You lost! Scissor cuts paper.";
                roundStatus.classList.add('loss');
            }
            break;
        
        case 'scissor':
            if (computerPlay == 'rock') {
                roundStatus.textContent = "You lost! Rock breaks scissor.";
                roundStatus.classList.add('loss');
            } else if (computerPlay == 'paper') {
                roundStatus.textContent = "You won! Scissor cuts paper.";
                roundStatus.classList.add('win');
            } else if (computerPlay == 'scissor') {
                roundStatus.textContent = "It's a draw!";
                roundStatus.classList.add('draw');
            }
            break;
            }
}