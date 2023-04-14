class Main {
    constructor() {
        this.fps = 30;
        this.sudoku = new Sudoku();
        this.buildPhase = true;
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

    handleKeyClick(e) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (e.key === 'Delete') {
            this.sudoku.remValue();
            return;
        }
        if (!numbers.includes(parseInt(e.key))) return;
        this.sudoku.setValue(parseInt(e.key));
    }

    handleCellClick(e) {
        if (!this.buildPhase) return;
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
        document.addEventListener('keydown', (e) => this.handleKeyClick(e));
    }
    
}