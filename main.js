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

// ------------ player function ------------------

function playerSelection(){
    const choose = prompt('Please choose out of three (Rock, Paper, or Scissors): ').toLowerCase()

    return choose;
}

// --------------- computer function ------------

function computerSelection(){
    let choices = ['Rock', 'Paper', 'Scissors'];

    let choice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();

    return choice;
}

// -------------- single game function ------------

function singleGame(player, computer){
    let player = p1;
    let computer = p2;

    // if they both have the same options it will be a tie
    if(p1 === p2){
        return 'Tie Game!'
    }

    //player 1 is scissors

    if(p1 === 'scissors'){
        // if player 2 is paper
        if(p2 === 'paper'){
            //player 2 will lose
            return 'Player 1 has won: Scissors beat paper';
        }else{
            // if player 2 is rock player 1 looses
            // player 2 wins
            if(p2 === 'rock'){
                return 'Player 2 has won: Rock Beats Scissors';
            }
        }
    }

    // player 1 is Rock

    if(p1 === 'rock'){
        // if player 2 is scissors
        // player 2 loses
        if(p2 === 'scissors'){
            return 'Player 1 has won: Rock beats Scissors';
        }else{
            // if player 2 is paper 
            // player 2 wins
            if(p2 === 'paper'){
                return 'Player 2 has won: Paper beats Scissors';
            }
        }
    }

    // Player 1 is Paper
    if(p1 === 'paper'){
        // if player 2 is rock
        // player 1 wins
        if(p2 === 'rock'){
            return 'Player 1 has won: Paper beats Rock';
        }else{
            // if player 2 is scissors
            // player2 wins and p1 loses
            return 'Player 2 has won: Scissors beat paper';
        }
    }

}

// console.log(playerSelection());
console.log(computerSelection());

console.log(singleGame(playerSelection(), computerSelection()));
