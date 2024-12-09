"use strict";
exports.__esModule = true;
exports.input = void 0;
var fs = require("fs");
var input = /** @class */ (function () {
    function input() {
    }
    input.prototype.getarray = function () {
        var matches = fs.readFileSync('C:\\input\\input.txt', {
            encoding: 'utf-8'
        });
        var numbers = matches.split(/\r?\n/);
        return numbers;
    };
    return input;
}());
exports.input = input;
