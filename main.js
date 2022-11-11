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

console.log(playerSelection());
console.log(computerSelection())