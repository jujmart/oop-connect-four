export class Column {
    constructor(rowArr = [null, null, null, null, null, null]) {
        this.rowArr = rowArr;
    }

    add(playerNum) {
        for (let i = 5; i >= 0; i--) {
            if (!this.rowArr[i]) {
                this.rowArr[i] = playerNum;
                return;
            }
        }
    }

    getTokenAt(rowIndexNum) {
        return this.rowArr[rowIndexNum];
    }

    isFull() {
        return this.rowArr[0] !== null
    }

}
