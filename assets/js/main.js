class Main {
    constructor() {
        this.fps = 30;
        this.sudoku = new Sudoku();
    }

    draw() {
        this.sudoku.draw();
    }

    run() {
        // draw in loop so draw function doesn't need to be called in other code
        setInterval(() => {
            this.draw();
        }, 1000 / this.fps);
    }
    
}