let gameResult;
let computerPlay;

function computerPlayRandomizer() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    console.log(randomNum);
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
                console.log("You lost! Paper wraps rocks :(")
            } else if (computerPlay == 'scissors') {
                console.log("You won! Rock breaks scissors!");
            }
            break;
        
        case "paper":
            if (computerPlay == 'rock') {
                console.log("You won! Paper wraps rock!")
            } else if (computerPlay == 'paper') {
                console.log("It's a tie!")
            } else if (computerPlay == 'scissors') {
                console.log("You lost! scissors cut paper :(")
            }
            break;
        
        case "scissors":
            if (computerPlay == 'rock') {
                console.log("You lost! Rock breaks scissors :(")
            } else if (computerPlay == 'paper') {
                console.log("You won! scissors cut paper")
            } else if (computerPlay == 'scissors') {
                console.log("It's a tie!")
            }
            break;
    }
}

let userPlay = prompt('Make your play: ').toLowerCase();
computerPlayRandomizer();

console.log(userPlay);
console.log(computerPlay);

gameRound();

console.log(gameResult);