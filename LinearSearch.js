"use strict";
exports.__esModule = true;
exports.LinearSearch = void 0;
var LinearSearch = /** @class */ (function () {
    function LinearSearch(numbers) {
        this.numbers = numbers;
    }
    LinearSearch.prototype.Search = function (numbers, key) {
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] == key)
                return i;
        }
        return -1;
    };
    return LinearSearch;
}());
exports.LinearSearch = LinearSearch;
