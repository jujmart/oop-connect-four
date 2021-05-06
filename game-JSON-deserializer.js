// import { Game } from "./game.js"

export class GameJsonDeserializer {
    constructor(game) {
        this.game = game;
        this.column0 = []
        this.column1 = []
        this.column2 = []
        this.column3 = []
        this.column4 = []
        this.column5 = []
        this.column6 = []
    }
    deserialize() {
        this.game.name1 = localStorage.getItem('player1Name')
        this.game.name2 = localStorage.getItem('player2Name')
    }
}
