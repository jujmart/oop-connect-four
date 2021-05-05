export class Game {
    constructor(player1Name, player2Name) {
        this.name1 = player1Name;
        this.name2 = player2Name;
        this.currentPlayer = 1;
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`;
    }

    playInColumn() {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
}