function getComputerChoice(){
    //this will randomly return either 'rock', 'paper', or 'scissors'
    // this is the compter playing
    
}

// this function will create a 'single' round of Rock Paper Scissors
function singleRound(playerSelection, computerSelection){
    // this will return a string that delcares the winner of the round.
    // make playerSelection casesensitive
}

function game(){
    // call singleRound() function inside to keep playing the game
    // this will play a 5 round game 
    // this will keep score and reports a winner or loser at the end
    // use a loop to play five rounds
}

const playerSelection = prompt('Choose one (Rock, Paper, or Scissors): '); // you can use a prompt() to get an input from the user
const computerSelection = getComputerChoice();

console.log(singleRound(playerSelection, computerSelection));