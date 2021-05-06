import { Game } from "./game.js"

export class GameJsonDeserializer {
    constructor(game) {
        this.game = game;
        this.column0 = [];
        this.column1 = [];
        this.column2 = [];
        this.column3 = [];
        this.column4 = [];
        this.column5 = [];
        this.column6 = [];
    }
    deserialize() {
        this.game.name1 = localStorage.getItem('player1Name');
        this.game.name2 = localStorage.getItem('player2Name');

        this.column0 = JSON.parse(localStorage.getItem("column0"));
        this.column1 = JSON.parse(localStorage.getItem("column1"));
        this.column2 = JSON.parse(localStorage.getItem("column2"));
        this.column3 = JSON.parse(localStorage.getItem("column3"));
        this.column4 = JSON.parse(localStorage.getItem("column4"));
        this.column5 = JSON.parse(localStorage.getItem("column5"));
        this.column6 = JSON.parse(localStorage.getItem("column6"));

        let counter = 0;
        for (let columnI = 0; columnI <= 6; columnI++) {
            let currentColumn = 'column' + columnI;
            for (let i = this[currentColumn].length - 1; i >= 0; i--) {
                let currentPlayerNum = this[currentColumn][i];
                this.game.currentPlayer = currentPlayerNum;
                this.game.playInColumn(columnI);
                counter++;
            }
        }
        if (counter % 2 === 0) {
            this.game.currentPlayer = 1;
        } else {
            this.game.currentPlayer = 2;
        }
    }
}
