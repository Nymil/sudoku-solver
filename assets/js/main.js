class Main {
    constructor() {
        this.fps = 60;
        this.sudoku = new Sudoku();
    }

    update() {

    }

    draw() {
        this.sudoku.draw();
    }

    run() {
        // main game loop
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }
}