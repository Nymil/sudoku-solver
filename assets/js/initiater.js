"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    setUpCanvas();
    startMain();
}

function setUpCanvas() {
    _$canvas = document.querySelector('canvas');
    _ctx = _$canvas.getContext('2d');
    _$canvas.width = 850;
    _$canvas.height = 850;
    drawRect('#FFD3B6', [0, 0, _$canvas.width, _$canvas.height]);
}

function startMain() {
    const main = new Main();
    main.run();
}
