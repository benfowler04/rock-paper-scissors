function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    let playerPoint = 0

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock'))
    {
        playerPoint = 1
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection)
    }
    else {
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection)
    }

    return playerPoint
}

function game(roundsTotal = 5) {
    let roundsPlayed = 0
    let playerScore = 0

    while (roundsPlayed < roundsTotal) {
        let playerSelection = prompt('rock, paper, or scissors?')
        playerSelection = playerSelection.toLowerCase();
        if ((playerSelection != 'rock') &&
            (playerSelection != 'paper') &&
            (playerSelection != 'scissors'))
        { continue }

        let computerSelection = computerPlay()
        if (playerSelection == computerSelection) {
            console.log('It\'s a tie. You both chose ' + playerSelection)
            continue
        }

        playerScore += playRound(playerSelection, computerSelection)
        roundsPlayed++
    }

    if (playerScore > (roundsPlayed / 2)) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You win!')
    }
    else if (playerScore == (roundsPlayed / 2)) {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You tied.')
    }
    else {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You lost!')
    }
}