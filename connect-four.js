import { Game } from "./game.js";
import { GameJsonSerializer } from './game-JSON-serializer.js'
import { GameJsonDeserializer } from './game-JSON-deserializer.js'
let game;

const boardHolder = document.getElementById("board-holder");
function updateUI() {
    const gameName = document.getElementById("game-name");
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
        const currentPlayer = game.currentPlayer;
        const clickTargets = document.getElementById('click-targets');
        if (currentPlayer === 1) {
            clickTargets.classList.add('black');
            clickTargets.classList.remove('red');
        } else {
            clickTargets.classList.add('red');
            clickTargets.classList.remove('black');
        }
        for (let rowInd = 0; rowInd <= 5; rowInd++) {
            for (let colInd = 0; colInd <= 6; colInd++) {
                const square = document.querySelector(`#square-${rowInd}-${colInd}`);
                square.innerHTML = "";

                const playerNumber = game.getTokenAt(rowInd, colInd);
                if (playerNumber === 1) {
                    const token = document.createElement("div");
                    token.classList.add("token");
                    token.classList.add("black");
                    square.appendChild(token);
                } else if (playerNumber === 2) {
                    const token = document.createElement("div");
                    token.classList.add("token");
                    token.classList.add("red");
                    square.appendChild(token);
                }
            }
        }
        for (let columnI = 0; columnI <= 6; columnI++) {
            let column = document.getElementById(`column-${columnI}`)

            if (game.isColumnFull(columnI)) {
                column.classList.add('full')
            } else {
                column.classList.remove('full')
            }
        }
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
        localStorage.clear();
        new GameJsonSerializer(game).serialize();
        updateUI();
        if (localStorage.getItem("player1Name") === '' || localStorage.getItem("player2Name") === '') {
            boardHolder.classList.add("is-invisible");
        }
    });

    document.getElementById("click-targets").addEventListener("click", event => {
        const targetId = event.target.id;
        if (!targetId.startsWith('column-')) return;

        const columnI = Number.parseInt(targetId[targetId.length - 1]);
        newGameBtn.disabled = false;
        game.playInColumn(columnI);
        updateUI();
        new GameJsonSerializer(game).serialize();
    });
    
    if (localStorage.getItem("player1Name")) {
        game = new Game("", "");
        new GameJsonDeserializer(game).deserialize();
        newGameBtn.disabled = false;
        updateUI();
    }


});
