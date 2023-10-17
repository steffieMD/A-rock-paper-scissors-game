// The score is saved and called even when we refresh the page
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function pickComputerMove() {
  let computerChoice = "";

  let computerRandom = Math.floor(Math.random() * 3);

  if (computerRandom == 0) {
    computerChoice = "Rock";
  } else if (computerRandom == 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

// This will load our score from local storage and convert it back into a js object
console.log(JSON.parse(localStorage.getItem("score")));

function playGame(userChoice) {
  const computerChoice = pickComputerMove();

  const message = `You picked: ${userChoice} \nComputer picked: ${computerChoice}`;

  let result = "";

  if (userChoice === "Rock") {
    if (computerChoice == "Rock") {
      result = "Tie!";
    } else if (computerChoice == "Paper") {
      result = "You lose!";
    } else if (computerChoice == "Scissors") {
      result = "You win!";
    }
  } else if (userChoice === "Paper") {
    if (computerChoice == "Rock") {
      result = "You win!";
    } else if (computerChoice == "Paper") {
      result = "Tie!";
    } else if (computerChoice == "Scissors") {
      result = "You lose!";
    }
  } else if (userChoice === "Scissors") {
    if (computerChoice == "Rock") {
      result = "You lose!";
    } else if (computerChoice == "Paper") {
      result = "You win!";
    } else if (computerChoice == "Scissors") {
      result = "Tie!";
    }
  }
  if (result === "Tie!") {
    score.ties += 1;
    console.log(score);
  } else if (result === "You lose!") {
    score.losses += 1;
    console.log(score);
  } else if (result === "You win!") {
    score.wins += 1;
    console.log(score);
  }

  // This will save the score to local storage and convert it into a JSON object
  localStorage.setItem("score", JSON.stringify(score));

  console.log(score);

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-game").innerHTML = `You
<img
  class="move-icon"
  src="rock-paper-scissors-images/${userChoice}-emoji.png"
  alt="rock-emoji"
/>
<img
  class="move-icon"
  src="rock-paper-scissors-images/${computerChoice}-emoji.png"
  alt="rock-emoji"
/>
Computer`;

  scoreBoardUpdate();
}

const scoreBoardUpdate = () => {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};
