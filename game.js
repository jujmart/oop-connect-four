import { Column } from "./column.js";

export class Game {
    constructor(player1Name, player2Name) {
        this.name1 = player1Name;
        this.name2 = player2Name;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`;
    }

    playInColumn(columnIndexNum) {
        this.columns[columnIndexNum].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

    getTokenAt(rowIndexNum, columnIndexNum) {
        return this.columns[columnIndexNum].getTokenAt(rowIndexNum);
    }

    isColumnFull(columnIndex) {
        return this.columns[columnIndex].isFull();
    }
}
