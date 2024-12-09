import { Searching } from "./InterfaceSearch";
export class LinearSearch implements Searching {
    constructor(public numbers: number[]) {

    }
    Search(numbers: number[], key: number): number {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == key)
                return i
        }
        return -1;
    }

}