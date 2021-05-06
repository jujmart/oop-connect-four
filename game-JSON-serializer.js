export class GameJsonSerializer {
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
    serialize() {
        localStorage.setItem('player1Name', this.game.name1)
        localStorage.setItem('player2Name', this.game.name2)

        for (let columnI = 0; columnI <= 6; columnI++) {
            let currentColumn = 'column' + columnI
            for (let rowI = 0; rowI <= 5; rowI++) {
                let token = this.game.getTokenAt(rowI, columnI)
                if (token !== null) {
                    this[currentColumn].push(token)
                }

            }
        }
        localStorage.setItem('column0', JSON.stringify(this.column0))
        localStorage.setItem('column1', JSON.stringify(this.column1))
        localStorage.setItem('column2', JSON.stringify(this.column2))
        localStorage.setItem('column3', JSON.stringify(this.column3))
        localStorage.setItem('column4', JSON.stringify(this.column4))
        localStorage.setItem('column5', JSON.stringify(this.column5))
        localStorage.setItem('column6', JSON.stringify(this.column6))

    }

   
}
