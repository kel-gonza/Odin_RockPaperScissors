let userScore = 0;
let computerScore = 0;	

function computerSelection(){
    const choices = ['Scissors', 'Rock', 'Paper'];

    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}


function singleGame(player, p2){

    // if they both have the same options it will be a tie
    if(player === p2){
        return 'Tie Game!'
    }

    //player 1 is scissors

    if (player === 'Scissors') {
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
    } else if (player === 'Rock') {
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
        if (player === 'Paper') {
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

function playGame() {

	// player is not defined. we have to find a way to define playerand find a way on how the computer will know when the use hasclicked on the icon it will show the value. 
	const fightButton = document.querySelectorAll('.fightButton');
	// loop through the button
	let player;
	
	fightButton.forEach((fight) => {
		// create an eventlistner and loop through the weapon class
		fight.addEventListener('click', () => {
			if (fight.classList.contains('rockB')){
				player = "Rock";
			} else if (fight.classList.contains('paperB')){
				player = "Paper";
			} else if (fight.classList.contains('scissorsB')) {
				player = 'Scissors';
			}else{
				player = 'Error';
			}
					// let player = playerSelection();
			const sGame = document.querySelector('.singleGame');
			const pChoice = document.querySelector('.playerChoice');
			const cChoice = document.querySelector('.computerChoice');
			pChoice.textContent = `Player has chosen: ${player}`
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
};

// attach event listener 'click' to a group of buttons


playGame();
