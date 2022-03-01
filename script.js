let computerPlay;

//computer buttons:
let compRock = document.querySelector('.computerRock');
let compPaper = document.querySelector('.computerPaper');
let compScissor = document.querySelector('.computerScissor');

//player buttons:
const userRock = document.querySelector('.userRock')
const userPaper = document.querySelector('.userPaper')
const userScissor = document.querySelector('.userScissor')

function computerPlayRandomizer() {
    let randomNum = Math.floor((Math.random() * 3) + 1);

    switch (randomNum) {
        case 1:
            computerPlay = 'Rock';
            compRock.classList.add('selected');
            break;
        case 2:
            computerPlay = 'Paper';
            compPaper.classList.add('selected');
            break;
        case 3:
            computerPlay = 'Scissor';
            compScissor.classList.add('selected')
            break;     
    }
}

userRock.addEventListener('click', userSelectRock);
userPaper.addEventListener('click', userSelectPaper);
userScissor.addEventListener('click', userSelectScissor);

function userSelectRock() {
    userPaper.classList.remove('selected');
    userScissor.classList.remove('selected');

    userRock.classList.add('selected');
}

function userSelectPaper() {
    userRock.classList.remove('selected');
    userScissor.classList.remove('selected');

    userPaper.classList.add('selected');
}

function userSelectScissor() {
    userRock.classList.remove('selected');
    userPaper.classList.remove('selected');

    userScissor.classList.add('selected');
}