class Main {
    constructor() {
        this.fps = 30;
        this.sudoku = new Sudoku();
        this.isSolving = false;
        this.addEventListeners();
    }

    draw() {
        drawRect('#FFD3B6', [0, 0, _$canvas.width, _$canvas.height]);
        this.sudoku.draw();
    }

    run() {
        // draw in loop so draw function doesn't need to be called in other code
        setInterval(() => {
            this.draw();
        }, 1000 / this.fps);
    }

    handleCellClick(e) {
        const pos = this.getMousePos(e);
        const clickedCol = Math.floor(pos.x / (_$canvas.width / this.sudoku.size));
        const clickedRow = Math.floor(pos.y / (_$canvas.height / this.sudoku.size));
        // clear previous selection
        this.sudoku.clearSelectedCells();
        // add new selection
        this.sudoku.selectCell(clickedCol, clickedRow);
    }

    getMousePos(e) {
        var rect = _$canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    addEventListeners() {
        _$canvas.addEventListener('click', (e) => this.handleCellClick(e));
    }
    
}