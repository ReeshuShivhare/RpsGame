// game JS


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"]
  const randIdx = Math.floor(Math.random() *3 );
  return options[randIdx];
  // rock, paper, scissor
}

const drawGame = () => {
  msg.innerText = "Game Was Draw. Play Again!";

}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("YOU WIN");
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
  }else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";


  }
}


const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
    //generated computer choice
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if(userChoice === compChoice) {
    //Draw game
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      //scissors, paper
      userWin = compChoice === "paper" ? false: true;
    }else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissor" ? false: true;
    }else {
      //rock, paper
      userWin = compChoice === "rock" ? false: true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};


choices.forEach((choice) =>{
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("CHOICE WAS CLICKED", userChoice);
    playGame(userChoice);
  })
})