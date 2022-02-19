function computerPlay() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    if (randomNum == 1) {
        return 'rock';
    } else if (randomNum == 2) {
        return 'paper';
    } else if (randomNum == 3) {
        return 'scissors';
    }  
}

