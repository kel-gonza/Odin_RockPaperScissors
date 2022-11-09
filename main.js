// Create a rock paper scissors game!
// will have three functions 
    // get computer choice
    // single round of the game (which shows the computer vs the human)
    // a loop for playing 5 rounds and keeping score to figure out who won in the end


function getComputerChoice(){
    //this will randomly return either 'rock', 'paper', or 'scissors'
    // this is the compter playing
    // random of choices out of three (rock paper scissors)

    //randonlyu return the top

    // can do a switch case!!

    let choices = Math.floor(Math.random() * 3);

    switch (choices) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }

     
}



// this function will create a 'single' round of Rock Paper Scissors
function singleRound(playerSelection, computerSelection){
    // this will return a string that delcares the winner of the round.
    // make playerSelection casesensitive -[x]
    // rock eats scissors
    // scissors eats paper
    // paper eats rock

    if((playerSelection == 'rock' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors')){
        return 'Tie Game';
    } else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return 'Computer has won';
    }else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'Computer has won';
    }else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'Computer has won'
    }else{
        return 'Player has won';
    }

}

function game(){
    // call singleRound() function inside to keep playing the game
    // this will play a 5 round game 
    // this will keep score and reports a winner or loser at the end
    // use a loop to play five rounds

    for (let i = 0; i < 5; i++){
        return singleRound(playerSelection, computerSelection);
    }

}

const playerSelection = prompt('Choose one (Rock, Paper, or Scissors): ').toLowerCase(); // you can use a prompt() to get an input from the user
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

console.log(singleRound(playerSelection, computerSelection));