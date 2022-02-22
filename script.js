let computerPlay;

function computerPlayRandomizer() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    if (randomNum == 1) {
        return computerPlay = 'rock';
    } else if (randomNum == 2) {
        return computerPlay = 'paper';
    } else if (randomNum == 3) {
        return computerPlay = 'scissors';
    }  
}

function gameRound() {
    switch (userPlay) {
        case "rock":
            if (computerPlay == 'rock') {
                console.log("It's a tie!");
            } else if (computerPlay == 'paper') {
                console.log("You lost! Paper wraps rocks :(");
                computerScore++; 
            } else if (computerPlay == 'scissors') {
                console.log("You won! Rock breaks scissors!");
                userScore++;
            }
            break;
        
        case "paper":
            if (computerPlay == 'rock') {
                console.log("You won! Paper wraps rock!");
                userScore++;
            } else if (computerPlay == 'paper') {
                console.log("It's a tie!")
            } else if (computerPlay == 'scissors') {
                console.log("You lost! scissors cut paper :(");
                computerScore++;
            }
            break;
        
        case "scissors":
            if (computerPlay == 'rock') {
                console.log("You lost! Rock breaks scissors :(")
                computerScore++;
            } else if (computerPlay == 'paper') {
                console.log("You won! scissors cut paper")
                userScore++;
            } else if (computerPlay == 'scissors') {
                console.log("It's a tie!")
            }
            break;
    }
}

let userPlay
let userScore = 0;
let computerScore = 0;
let answer

do { 
    console.clear()
    
    console.log('----------------------');
    console.log(`Your score is: ${userScore}`);
    console.log(`The computer score is: ${computerScore}`);
    console.log('----------------------');

    userPlay = prompt('Rock, paper or scissors? ').toLowerCase();
    computerPlayRandomizer();
    console.log(`The computer played [${computerPlay}]`);
    console.log(`Your played [${userPlay}]`);
    console.log('----------------------');

    gameRound();
    
    if (computerScore == 3) {
        console.log('You lost the game! The computer scored 3 points :(')
    } else if (userScore == 3) {
        console.log('You won the game! You scored 3 points :D');
    }
    answer = prompt('Press [enter] to start another round').toLowerCase();
    if (answer == '') {   
    } else {
        console.log('Ok! see you next time!');
    }
} while (answer == '')