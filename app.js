let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreVal = document.querySelector("#user-score");
const compScoreVal = document.querySelector("#computer-score");

const drawGame = () => {
    msg.innerText = "Game was draw, Play again.";
    msg.style.backgroundColor = "gray";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreVal.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        computerScore++;
        compScoreVal.innerText = computerScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const genComChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}



const playGame = (userChoice) => {
    const compChoice = genComChoice();

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})