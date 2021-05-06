export class DiagonalWinInspector {
    constructor(columns = []) {
        this.columns = columns;
    }

    inspect() {
        for(let rowNum = 0; rowNum <= 2; rowNum++) {
            let playerNum1 = this.columns[0].getTokenAt(rowNum);
            let playerNum2 = this.columns[1].getTokenAt(rowNum + 1);
            let playerNum3 = this.columns[2].getTokenAt(rowNum + 2);
            let playerNum4 = this.columns[3].getTokenAt(rowNum + 3);
            if(playerNum1 !== null && playerNum1 === playerNum2 && playerNum1 === playerNum3 && playerNum1 === playerNum4) {
                return playerNum1;
            }
            let playerNum1Diag2 = this.columns[0].getTokenAt(rowNum + 3);
            let playerNum2Diag2 = this.columns[1].getTokenAt(rowNum + 2);
            let playerNum3Diag2 = this.columns[2].getTokenAt(rowNum + 1);
            let playerNum4Diag2 = this.columns[3].getTokenAt(rowNum);
            if(playerNum1Diag2 !== null && playerNum1Diag2 === playerNum2Diag2 && playerNum1Diag2 === playerNum3Diag2 && playerNum1Diag2 === playerNum4Diag2) {
                return playerNum1Diag2;
            }
        }
        return 0;
    }
}