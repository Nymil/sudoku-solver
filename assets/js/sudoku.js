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

    draw() {
        // draw lines
        for (let i = 1; i < this.size; i++) {
            const width = i % 3 === 0 ? 5 : 1;
            const offset = i * (_$canvas.width / this.size);
            drawLine('#FF8B94', [offset, 0, offset, _$canvas.width], width);
            drawLine('#FF8B94', [0, offset, _$canvas.width, offset], width);
        }
    }
}