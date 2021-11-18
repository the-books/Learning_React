"use strict";
var div;
var container = document.getElementById('container');
for (var i = 0; i < 5; i++) {
    div = document.createElement('div');
    div.onclick = function () {
        alert('#' + i);
    };
    container === null || container === void 0 ? void 0 : container.appendChild(div);
}
