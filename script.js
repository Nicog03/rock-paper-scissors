let computerPlay;

let compRock = document.querySelector('.computerRock');
let compPaper = document.querySelector('.computerPaper');
let compScissor = document.querySelector('.computerScissor');

function computerPlayRandomizer() {
    let randomNum = Math.floor((Math.random() * 3) + 1);

    switch (randomNum) {
        case 1:
            computerPlay = 'Rock';
            compRock.classList.add('computer-selected');
            break;
        case 2:
            computerPlay = 'Paper';
            compPaper.classList.add('computer-selected');
            break;
        case 3:
            computerPlay = 'Scissor';
            compScissor.classList.add('computer-selected')
            break;     
    }
}