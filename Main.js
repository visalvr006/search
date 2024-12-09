"use strict";
exports.__esModule = true;
exports.getSearchFactory = exports.printoutput = void 0;
var BinarySearch_1 = require("./BinarySearch");
var LinearSearch_1 = require("./LinearSearch");
var JumpSearch_1 = require("./JumpSearch");
var TernarySearch_1 = require("./TernarySearch");
var input_1 = require("./input");
var SearchType;
(function (SearchType) {
    SearchType[SearchType["Linear"] = 0] = "Linear";
    SearchType[SearchType["Binary"] = 1] = "Binary";
    SearchType[SearchType["Ternary"] = 2] = "Ternary";
    SearchType[SearchType["Jump"] = 3] = "Jump";
})(SearchType || (SearchType = {}));
var Input = new input_1.input();
var numbers = [];
var strings = Input.getarray();
for (var i = 0; i < strings.length; i++)
    numbers.push(parseInt(strings[i]));
var key = 20;
function printoutput(index, type) {
    if (index == -1)
        console.log("The number entered not found in the array");
    else
        console.log("Number", key, "found at", index, "using", type, "search.");
}
exports.printoutput = printoutput;
function getSearchFactory(searchType) {
    switch (searchType) {
        case SearchType.Linear: {
            var linear = new LinearSearch_1.LinearSearch(numbers);
            printoutput(linear.Search(numbers, key), 'Linear');
            break;
        }
        case SearchType.Binary: {
            var Binary = new BinarySearch_1.BinarySearch(numbers, key);
            printoutput(Binary.Search(numbers, key), 'Binary');
            break;
        }
        case SearchType.Ternary: {
            var ternary = new TernarySearch_1.TernarySearch(numbers, key);
            printoutput(ternary.Search(numbers, key), 'Ternary');
            break;
        }
        case SearchType.Jump: {
            var jump = new JumpSearch_1.JumpSearch(numbers, key);
            printoutput(jump.Search(numbers, key), 'Jump');
            break;
        }
    }
}
exports.getSearchFactory = getSearchFactory;
getSearchFactory(SearchType.Linear);
