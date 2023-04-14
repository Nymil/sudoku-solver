class Cell {
    constructor(col, row, box) {
        this.col = col;
        this.row = row;
        this.box = box;
        this.selected = false; // selected during board building stage
        this.value = null; // value that gets displayed
        this.static = false; // is it calculated or set by the player
        this.possibleValues = new Array(9);
        console.log(this.possibleValues);
    }

    draw() {

    }
}