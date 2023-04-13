class Main {
    constructor() {
        this.fps = 60;
    }

    update() {

    }

    draw() {
        
    }

    run() {
        // main game loop
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }
}