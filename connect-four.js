import { Game } from "./game.js";

let game;

function updateUI() {
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
        const currentPlayer = game.currentPlayer;
    }
}

window.addEventListener('DOMContentLoaded', event => {
    const playerOneInput = document.getElementById('player-1-name');
    const playerTwoInput = document.getElementById('player-2-name');
    const newGameBtn = document.getElementById('new-game');

    function disabledNewGameBtn() {
        if (playerOneInput.value !== '' && playerTwoInput.value !== '') {
            newGameBtn.disabled = false;
        } else {
            newGameBtn.disabled = true;
        }
    }

    playerOneInput.addEventListener('keyup', event => {
        disabledNewGameBtn();
    });

    playerTwoInput.addEventListener('keyup', event => {
        disabledNewGameBtn();
    });

    newGameBtn.addEventListener("click", event => {
        game = new Game(playerOneInput.value, playerTwoInput.value);
        playerOneInput.value = "";
        playerTwoInput.value = "";
        disabledNewGameBtn();
        updateUI();
    });

    document.getElementById("click-targets").addEventListener("click", event => {
        game.playInColumn();
        updateUI();
    });

});
