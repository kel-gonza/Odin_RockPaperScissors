let userScore = 0;
let computerScore = 0;	
let round = 0;
const reset = document.querySelector('.playAgain');
const fightButton = document.querySelectorAll('.fightButton');
const rounds = document.querySelector('.rounds');
const winnerTxt = document.querySelector('.winnerText');
const popUP = document.querySelector('.modal');
const main = document.querySelector('.mainContent');

function computerSelection(){
    const choices = ['Scissors', 'Rock', 'Paper'];

    let choice = choices[Math.floor(Math.random() * choices.length)];

	const cScissors = document.querySelector('.computerScissors');
	const cRock = document.querySelector('.computerRock');
	const cPaper = document.querySelector('.computerPaper')
	
	if (choice === 'Scissors') {
		cScissors.style.color = 'black';
		cPaper.style.color = 'rgb(241,220, 170)';
		cRock.style.color = 'rgb(241,220, 170)'

	} else if (choice === 'Rock') {
		cRock.style.color = 'black';
		cScissors.style.color = 'rgb(241,220, 170)';
		cPaper.style.color = 'rgb(241,220, 170)';

	} else if (choice === 'Paper') {
		cPaper.style.color = 'black';
		cRock.style.color = 'rgb(241,220, 170)';
		cScissors.style.color = 'rgb(241,220, 170)';
	}

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

function checkWinner(pScore, cScore) {
	if (pScore === 5 || cScore === 5) {
		fightButton.forEach((button) => {
			button.setAttribute('disabled', 'true');
			button.classList.add('disabled-button','opacity')
		});

		if (pScore === 5){
			winnerTxt.textContent = 'You have Won Congrats!';
			popUP.style.display = 'block'
		} else{
			winnerTxt.textContent = 'Computer has won. Better luck next time.'
			popUP.style.display = 'block'
		}
		main.classList.add('overlay');
		reset.style.display = 'block';
		rounds.style.display = 'block';

	}
}

function resetGame(){
	// will reset the page once the button for play again is clicked
	reset.addEventListener('click', () => {
		window.location.reload();
	});
}

function countRounds() {
	round += 1;
	rounds.textContent = `Round: ${round}`;
	return round;
}

function playGame() {
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

			const sGame = document.querySelector('.singleGame');
			const pChoice = document.querySelector('.playerChoice');
			const cChoice = document.querySelector('.computerChoice');
			
			pChoice.textContent = `Player has chosen: ${player}`
    		computer = computerSelection();
			cChoice.textContent = `Computer has chosen: ${computer}!`

			sGame.textContent = singleGame(player, computer);

			countRounds();

			updateScore();
		
			checkWinner(userScore, computerScore);

			resetGame();
		});
	});
};

playGame();
