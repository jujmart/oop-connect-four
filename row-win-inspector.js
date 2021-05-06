export class RowWinInspector {
    constructor(columns = []) {
        this.columns = columns;
    }

    inspect() {
        for(let rowNum = 0; rowNum <= 5; rowNum++) {
            let playerNum1 = this.columns[0].getTokenAt(rowNum);
            let playerNum2 = this.columns[1].getTokenAt(rowNum);
            let playerNum3 = this.columns[2].getTokenAt(rowNum);
            let playerNum4 = this.columns[3].getTokenAt(rowNum);
            if(playerNum1 !== null && playerNum1 === playerNum2 && playerNum1 === playerNum3 && playerNum1 === playerNum4) {
                return playerNum1;
            }
        }
        return 0;
    }
}