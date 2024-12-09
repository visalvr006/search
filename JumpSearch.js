"use strict";
exports.__esModule = true;
exports.JumpSearch = void 0;
var JumpSearch = /** @class */ (function () {
    function JumpSearch(numbers, key) {
        this.numbers = numbers;
    }
    JumpSearch.prototype.Search = function (numbers, key) {
        var size = numbers.length;
        var step = Math.floor(Math.sqrt(size));
        var previous = 0;
        while (numbers[Math.min(step, size) - 1] < key) {
            previous = step;
            step += Math.floor(Math.sqrt(size));
            if (previous >= size) {
                return -1;
            }
        }
        while (numbers[previous] < key) {
            previous++;
            if (previous == Math.min(step, size)) {
                return -1;
            }
        }
        if (numbers[previous] == key)
            return previous;
        return -1;
    };
    return JumpSearch;
}());
exports.JumpSearch = JumpSearch;
