import { Game } from "./game.js";

let game

window.addEventListener('DOMContentLoaded', event => {
    const playerOneInput = document.getElementById('player-1-name')
    const playerTwoInput = document.getElementById('player-2-name')
    const newGameBtn = document.getElementById('new-game')

    function disabledNewGameBtn() {
        if (playerOneInput.value !== '' && playerTwoInput.value !== '') {
            newGameBtn.disabled = false;
        } else {
            newGameBtn.disabled = true;
        }
    }

    playerOneInput.addEventListener('keyup', event => {


    })

})
