// Create a rock paper scissors game!
// will have three functions 
    // get computer choice
    // single round of the game (which shows the computer vs the human)
    // a loop for playing 5 rounds and keeping score to figure out who won in the end
const choice = prompt('Choose one (Rock, Paper, or Scissors): ').toLowerCase();

function playerSelection(){
    
    if (choice == 'rock'){
        return 'Player chose: Rock!'
    }else if (choice == 'paper'){
        return 'Player chose: Paper!'
    }else if (choice == 'scissors'){
        return 'Player chose: Scissors!'
    }else{
        return 'Please Input Rock Paper or Scissos. I am not that smart of a computer.'
    }
}


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
function singleRound(){
    // this will return a string that delcares the winner of the round
;    // make playerSelection casesensitive -[x]
    // rock eats scissors
    // scissors eats paper
    // paper eats rock

    const player = choice;
    const computer = getComputerChoice();


}

// function game(){
//     // call singleRound() function inside to keep playing the game
//     // this will play a 5 round game 
//     // this will keep score and reports a winner or loser at the end
//     // use a loop to play five rounds
    
//     for (let i = 0 ; i < 5; i++){
//         console.log(singleRound(playerSelection(), getComputerChoice()))
//     }

// }


console.log(playerSelection());
console.log(`Computer chose: ${getComputerChoice()}!`)
console.log(singleRound());


// console.log(game());