let userScore = 0;
let computerScore = 0;

function playerSelection(player){
    //if player chooses 'rock' will return a string
    if ( player=== 'Rock') {
        return 'Player has chosen: Rock!';
        // else if player chooses 'paper' it will return a string stating that
    } else if( player === 'Paper') {
        return 'Player has chosen: Paper!'
        // else if player has chosen 'scissors' it will return a string
    } else if( player === 'Scissors') {
        return 'Player has chosen: Scissors!'
        // else; if player has not chosen any of the above statements, it will return an error
    } else {
        return 'Error'
    }
}


function computerSelection(){
    const choices = ['Scissors', 'Rock', 'Paper'];

    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}


function singleGame(p1, p2){

    // if they both have the same options it will be a tie
    if(p1 === p2){
        return 'Tie Game!'
    }

    //player 1 is scissors

    if (p1 === 'Scissors') {
        // if player 2 is paper
        if (p2 === 'Paper') {
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
    } else if (p1 === 'Rock') {
        // if player 2 is scissors
        // player 2 loses
        if(p2 === 'Scissors') {
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
        if (p1 === 'Paper') {
        // if player 2 is rock
        // player 1 wins
            if (p2 === 'Rock') {
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

function updateScore(){
	const cScore = document.querySelector('.computerScore');
	const pScore = document.querySelector('.playerScore');
	pScore.textContent = `Your score = ${userScore}`;
	cScore.textContent =`Computer's score = ${computerScore}`;
};

function checkWinner() {
	let pScore = userScore;
	let cScore = computerScore;

	if (pScore === 5 || cScore === 5){
		if (pScore === 5){
			let winner = 'You have Won. Congrats!';
			alert(winner);
			return true;
		}else{
			let winner = 'Computer has won. Better luck next time.'
			alert(winner);
			return true;
		}
	}
	return false;
}

// attach event listener 'click' to a group of buttons
const buttons = document.querySelectorAll('button');

// going to use the forEach method to iterate through each buttons

buttons.forEach((button) => {
	button.addEventListener('click', function playGame() {
// deleted prompt. instead we will add the clickable buttons choices
		const sGame = document.querySelector('.singleGame');
		const pChoice = document.querySelector('.playerChoice');
		const cChoice = document.querySelector('.computerChoice');
		const player = this.textContent;
    	
		pChoice.textContent = playerSelection(player)
    	computer = computerSelection();
		cChoice.textContent = `Computer has chosen: ${computer}!`

		sGame.textContent = singleGame(player, computer);

		updateScore();
		
		if(checkWinner()) {
			userScore = 0;
			computerScore = 0;
			updateScore();
		}
	});
});



