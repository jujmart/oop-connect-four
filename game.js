export class Game {
    constructor(player1Name, player2Name) {
        this.name1 = player1Name;
        this.name2 = player2Name;
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`;
    }
}