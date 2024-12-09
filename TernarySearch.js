"use strict";
exports.__esModule = true;
exports.TernarySearch = void 0;
var TernarySearch = /** @class */ (function () {
    function TernarySearch(numbers, key) {
        this.numbers = numbers;
        this.key = key;
    }
    TernarySearch.prototype.Search = function (numbers, key) {
        var low = 0;
        var rear = numbers.length - 1;
        while (rear >= low) {
            var middle1 = Math.round(low + (rear - low) / 3);
            var middle2 = Math.round(rear - (rear - low) / 3);
            if (numbers[middle1] == key) {
                return middle1;
            }
            if (numbers[middle2] == key) {
                return middle2;
            }
            if (key < numbers[middle1])
                rear = middle1 - 1;
            else if (key > numbers[middle2])
                low = middle2 + 1;
            else {
                low = middle1 + 1;
                rear = middle2 - 1;
            }
        }
        return -1;
    };
    return TernarySearch;
}());
exports.TernarySearch = TernarySearch;
