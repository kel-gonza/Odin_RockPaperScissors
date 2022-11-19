let userScore = parseInt(0);
let computerScore = parseInt(0);

function playerSelection(prompt){

    //if player chooses 'rock' will return a string
    if(prompt === 'rock') {
        return 'Player has chosen: Rock!';
        // else if player chooses 'paper' it will return a string stating that
    } else if(prompt === 'paper') {
        return 'Player has chosen: Paper!'
        // else if player has chosen 'scissors' it will return a string
    } else if(prompt === 'scissors') {
        return 'Player has chosesn: Scissors!'
        // else; if player has not chosen any of the above statments, it will return an error
    } else{
        return 'Error; please choose out of the three words.'
    }
}


function computerSelection(){
    const choices = ['scissors', 'rock', 'paper'];

    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}


function singleGame(p1, p2){

    // if they both have the same options it will be a tie
    if(p1 === p2){
        return 'Tie Game!'
    }

    //player 1 is scissors

    if (p1 === 'scissors') {
        // if player 2 is paper
        if (p2 === 'paper') {
            //player 2 will lose
            userScore++;
            return 'Player 1 has won: Scissors beat paper';
        } else {
            // if player 2 is rock player 1 looses
            // player 2 wins
            computerScore++;
            return 'Computer has won: Rock Beats Scissors';
        }
    // player 1 is Rock
    } else if (p1 === 'rock') {
        // if player 2 is scissors
        // player 2 loses
        if(p2 === 'scissors') {
            userScore++;
            return 'Player 1 has won: Rock beats Scissors';
        } else{
            // if player 2 is paper 
            // player 2 wins
            computerScore++;
            return 'Computer has won: Paper beats Rock';
        }
    }else {
            // Player 1 is Paper
        if (p1 === 'paper') {
        // if player 2 is rock
        // player 1 wins
            if (p2 === 'rock') {
                userScore++;
                return 'Player 1 has won: Paper beats Rock';
            } else {
            // if player 2 is scissors
            // player2 wins and p1 loses
                computerScore++;
                return 'Computer has won: Scissors beat paper';
            }
        }
    }

}

function playGame() {

    player = prompt('Please choose out of three (Rock, Paper, or Scissors): ').toLowerCase()
    console.log(playerSelection(player))
    computer = computerSelection();
    console.log(`Computer has chosen: ${computer}!`)
    console.log(singleGame(player, computer));
    console.log(`Your score = ${userScore}`)
    console.log(`Computer's score = ${computerScore}`)
}
console.log(playGame())

