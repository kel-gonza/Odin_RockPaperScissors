// Rock Paper Scissors 
// Computer generated and player selection 

// will create a set of instructions for the computer to pick out 3 options
    // rock, paper, or scissors
    // this will be randomly generated

// Will then create another set of instructions for the player.
    // I will use a prompt so the user has the freedom to choose
    // the prompt will not be case sensitive so whatever style they chose it will work
        // ex. they can put ROCK roCK rock 
    // however, when they make a mistake the computer will say something

// After, I will create another set of instructions for a single game
    // this will have rules of the game. 
    // rock beats scissors
    // scissors beats paper 
    // paper beats rock
    // also a tie option

// Then I will create a loop for five games. This will be added to another funtion

// goodluck kels


// const choose = prompt('Please choose out of three (Rock, Paper, or Scissors): ').toLowerCase()

// ------------ player function ------------------

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

// --------------- computer function ------------

function computerSelection(){
    let choices = ['scissors', 'rock', 'paper'];

    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

// -------------- single game function ------------

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
            return 'Player 1 has won: Scissors beat paper';
        } else {
            // if player 2 is rock player 1 looses
            // player 2 wins
            return 'Computer has won: Rock Beats Scissors';
        }
    // player 1 is Rock
    } else if (p1 === 'rock') {
        // if player 2 is scissors
        // player 2 loses
        if(p2 === 'scissors') {
            return 'Player 1 has won: Rock beats Scissors';
        } else{
            // if player 2 is paper 
            // player 2 wins
            return 'Computer has won: Paper beats Rock';
        }
    }else {
            // Player 1 is Paper
        if (p1 === 'paper') {
        // if player 2 is rock
        // player 1 wins
            if (p2 === 'rock') {
                return 'Player 1 has won: Paper beats Rock';
            } else {
            // if player 2 is scissors
            // player2 wins and p1 loses
                return 'Computer has won: Scissors beat paper';
            }
        }
    }

}

//------------------- play game -------------- //

function playGame(){

    // let userScore = parseInt(0);
    // let computerScre = parseInt(0);
    let win = "You Won!!!!"
    let lose = "You lost."
    let tie = 'Tie Game.'


    // will play a round of 5 games
    for(let i=0; i<5; i++){
        player = prompt('Please choose out of three (Rock, Paper, or Scissors): ').toLowerCase()
        console.log(playerSelection(player))
        computer = computerSelection();
        console.log(singleGame(player, computer));
        // console.log(`Your score = ${userScore}`)
    }



}

// console.log(playerSelection(choose));
// console.log(computerSelection()); // this can be a random print statment that prints out after the game

console.log(playGame())

// console.log(singleGame(playerSelection(choose), computerSelection()));
