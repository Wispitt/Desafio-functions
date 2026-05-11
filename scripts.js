const result = document.querySelector(".result");
const points1 = document.querySelector(".point-1")
const points2 = document.querySelector(".point-2")

let pointsPlayer1 = 0;
let pointsPlayer2 = 0;

const humanClick = (click) => {
    playTheGame(click, plarReturn());
}

const plarReturn = () => {
    const options = ["rock", "paper", "scissors"];
    const numberRandom = Math.floor(Math.random() * 3);
    return options[numberRandom];
}

const playTheGame = (human, adversary) => {

    console.log("Player 1: " + human, "Player 2: " + adversary)

    if (human === adversary) {
        result.innerHTML = "Empate!";
    } else if (
        (human === "paper" && adversary === "rock") ||
        (human === "rock" && adversary === "scissors") ||
        (human === "scissors" && adversary === "paper"))
    {
        result.innerHTML = "Você ganhou!";
        pointsPlayer1 += 10
        points1.innerHTML = pointsPlayer1
    } else {
        result.innerHTML = "Player 2 ganhou!";
        pointsPlayer2 += 10
        points2.innerHTML = pointsPlayer2
    }
}