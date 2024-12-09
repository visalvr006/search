import { BinarySearch } from "./BinarySearch";
import { LinearSearch } from "./LinearSearch";
import { JumpSearch } from "./JumpSearch";
import { TernarySearch } from "./TernarySearch";
import { Searching } from "./InterfaceSearch";
import { input } from "./input";
enum SearchType {
    Linear, Binary, Ternary, Jump
}
let Input = new input()
let numbers: number[] = []
let strings: string[] = Input.getarray()

for (var i = 0; i < strings.length; i++)

    numbers.push(parseInt(strings[i]));

let key: number = 20;
export function printoutput(index: number, type: string) {
    if (index == -1)
        console.log("The number entered not found in the array")
    else
        console.log("Number", key, "found at index", index, "using", type, "search.")
}
export function getSearchFactory(searchType: SearchType) {
    switch (searchType) {
        case SearchType.Linear: {
            let linear: Searching = new LinearSearch(numbers);
            printoutput(linear.Search(numbers, key), 'Linear');
            break
        }
        case SearchType.Binary: {
            let Binary: Searching = new BinarySearch(numbers, key);
            printoutput(Binary.Search(numbers, key), 'Binary')
            break
        }
        case SearchType.Ternary: {
            let ternary: Searching = new TernarySearch(numbers, key);
            printoutput(ternary.Search(numbers, key), 'Ternary')
            break
        }
        case SearchType.Jump: {
            let jump: Searching = new JumpSearch(numbers, key);
            printoutput(jump.Search(numbers, key), 'Jump')
            break
        }
    }
}

getSearchFactory(SearchType.Linear)


