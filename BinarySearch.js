"use strict";
exports.__esModule = true;
exports.BinarySearch = void 0;
var BinarySearch = /** @class */ (function () {
    function BinarySearch(numbers, key) {
        this.numbers = numbers;
    }
    BinarySearch.prototype.Search = function (numbers, key) {
        var first = 0;
        var last = numbers.length - 1;
        var middle = Math.round((first + last) / 2);
        while (first <= last) {
            if (numbers[middle] < key)
                first = middle + 1;
            else if (numbers[middle] > key) {
                last = middle - 1;
            }
            else if (numbers[middle] == key) {
                return middle;
            }
            middle = Math.round((first + last) / 2);
        }
        return -1;
    };
    return BinarySearch;
}());
exports.BinarySearch = BinarySearch;
