const result = document.querySelector(".result");
const points1 = document.querySelector(".point-1")
const points2 = document.querySelector(".point-2")

let pointsPlayer1 = 0;
let pointsPlayer2 = 0;

const GAME_OPITIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const humanClick = (click) => {
    playTheGame(click, plarReturn());
}

const plarReturn = () => {
    const options = [GAME_OPITIONS.ROCK, GAME_OPITIONS.PAPER, GAME_OPITIONS.SCISSORS];
    const numberRandom = Math.floor(Math.random() * 3);
    return options[numberRandom];
}

const playTheGame = (human, adversary) => {

    console.log("Player 1: " + human, "Player 2: " + adversary)

    if (human === adversary) {
        result.innerHTML = "Empate!";
    } else if (
        (human === GAME_OPITIONS.PAPER && adversary === GAME_OPITIONS.ROCK) ||
        (human === GAME_OPITIONS.ROCK && adversary === GAME_OPITIONS.SCISSORS) ||
        (human === GAME_OPITIONS.SCISSORS && adversary === GAME_OPITIONS.PAPER))
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