class Sudoku {
    constructor() {
        this.board = [];
        this.size = 9;
        this.sectionSize = 3;
        this.fillBoard();
    }

    fillBoard() {
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const section = Math.floor(col / this.sectionSize) + this.sectionSize * Math.floor(row / this.sectionSize);
                const cell = new Cell(col, row, section);
                this.board.push(cell);
            }
        }
    }
}