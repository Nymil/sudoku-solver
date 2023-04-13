"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    setUpCanvas();
}

function setUpCanvas() {
    _$canvas = document.querySelector('canvas');
    _ctx = _$canvas.getContext('2d');
    _$canvas.width = 800;
    _$canvas.height = 800;
    drawRect('#FFD3B6', [0, 0, _$canvas.width, _$canvas.height]);
}
