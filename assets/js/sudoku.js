class Sudoku {
    constructor(main) {
        this.main = main;
        this.board = [];
        this.size = 9;
        this.boxSize = 3;
        this.fillBoard();
    }

    fillBoard() {
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const box = Math.floor(col / this.boxSize) + this.boxSize * Math.floor(row / this.boxSize);
                const cell = new Cell(col, row, box);
                this.board.push(cell);
            }
        }
    }

    solve(stack) {
        this.updatePossibleCellValues();
        const leastAmountOfPossibleValues = Math.min(...this.board.map(cell => cell.possibleValues.length));

        if (stack.length === 0 && leastAmountOfPossibleValues === 0) {
            console.log('unsolvable board');
            return;
        }
        
        // pick random cell with the least amount of possible values to assign a value to
        const cellsWithNumberOfPossibleValues = this.board.filter(cell => cell.possibleValues.length === leastAmountOfPossibleValues && cell.value === null);
        const randomIndex = Math.floor(Math.random() * cellsWithNumberOfPossibleValues.length);
        const pickedCell = cellsWithNumberOfPossibleValues[randomIndex];
        const valueIndex = Math.floor(Math.random() * leastAmountOfPossibleValues);
        pickedCell.value = pickedCell.possibleValues[valueIndex];

        this.main.draw();
    }

    updatePossibleCellValues() {
        // restore possible values
        this.board.forEach(cell => cell.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        // update possible values
        const nonEmptyCells = this.board.filter(cell => cell.value !== null);
        nonEmptyCells.forEach(cell => this.updateBoardFromCell(cell));
    }

    updateBoardFromCell(placedCell) {
        // remove the value from cells in same row
        const sameRowCells = this.board.filter(cell => cell.row === placedCell.row);
        sameRowCells.forEach(cell => cell.possibleValues = cell.possibleValues.filter(value => value !== placedCell.value));
        // remove the value from cells in same col
        const sameColCells = this.board.filter(cell => cell.col === placedCell.col);
        sameColCells.forEach(cell => cell.possibleValues = cell.possibleValues.filter(value => value !== placedCell.value));
        // remove the value from cells in same box
        const sameBoxCells = this.board.filter(cell => cell.box === placedCell.box);
        sameBoxCells.forEach(cell => cell.possibleValues = cell.possibleValues.filter(value => value !== placedCell.value));
    }

    setValue(value) {
        const cell = this.getSelectedCell();
        if (!cell) return;
        cell.value = value;
        cell.static = true;
    }

    remValue() {
        const cell = this.getSelectedCell();
        if (!cell) return;
        cell.value = null;
        cell.static = false;
    }

    clearSelectedCells() {
        const selectedCell = this.getSelectedCell();
        if (selectedCell) selectedCell.selected = false;
    }

    getSelectedCell() {
        return this.board.find(cell => cell.selected);
    }

    getCell(col, row) {
        return this.board.find(cell => cell.col === col && cell.row === row);
    }

    selectCell(col, row) {
        this.getCell(col, row).selected = true;
    }

    draw() {
        // draw cell text
        this.board.forEach(cell => cell.draw());
        // draw lines
        for (let i = 1; i < this.size; i++) {
            const width = i % 3 === 0 ? 5 : 1;
            const offset = i * (_$canvas.width / this.size);
            drawLine('#FF8B94', [offset, 0, offset, _$canvas.width], width);
            drawLine('#FF8B94', [0, offset, _$canvas.width, offset], width);
        }
    }
}