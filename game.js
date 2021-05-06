import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";

export class Game {
    constructor(player1Name, player2Name) {
        this.name1 = player1Name;
        this.name2 = player2Name;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
        this.winnerNumber = 0;
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.name1} ties with ${this.name2}!`
        } else if (this.winnerNumber === 1) {
            return `${this.name1} wins!`
        } else if (this.winnerNumber === 2) {
            return `${this.name2} wins!`
        }

        return `${this.name1} vs. ${this.name2}`;
    }

    playInColumn(columnIndexNum) {
        this.columns[columnIndexNum].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();

        if (this.winnerNumber === 0) {
            this.checkForColumnWin();
        }
    }

    getTokenAt(rowIndexNum, columnIndexNum) {
        return this.columns[columnIndexNum].getTokenAt(rowIndexNum);
    }

    isColumnFull(columnIndex) {
        if(this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }

        return this.columns[columnIndex].isFull();
    }

    checkForTie() {
        for (let i = 0; i <= 6; i++) {
            if (!this.isColumnFull(i)) {
                return;
            }
        }
        this.winnerNumber = 3
    }

    checkForColumnWin() {
        for (let i = 0; i < this.columns.length; i++) {
            let column = this.columns[i];
            let columnInspector = new ColumnWinInspector(column);
            let winnerNumber = columnInspector.insepct();

            if(winnerNumber === 1 || winnerNumber === 2) {
                this.winnerNumber = winnerNumber;
                return
            }

        }
    }
}
