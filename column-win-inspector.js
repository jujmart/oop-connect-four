export class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }

    insepct() {
        for(let i = 0; i <= 2; i++) {
            let playerNum1 = this.column.getTokenAt(i);
            let playerNum2 = this.column.getTokenAt(i + 1);
            let playerNum3 = this.column.getTokenAt(i + 2);
            let playerNum4 = this.column.getTokenAt(i + 3);
            if (playerNum1 !== null && playerNum1 === playerNum2 && playerNum1 === playerNum3 && playerNum1 === playerNum4) {
                return playerNum1;
            }
        }
        return 0;
    }
}
