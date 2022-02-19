

function computerPlay() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
console.log(randomNum)
    if (randomNum == 1) {
        return 'rock';
    } else if (randomNum == 2) {
        return 'paper';
    } else if (randomNum == 3) {
        return 'scissors';
    }  
}


for (let i = 0; i < 10; i++) {
    console.log(computerPlay())    
}

