import { Searching } from "./InterfaceSearch";
export class BinarySearch implements Searching {
    constructor(public numbers:number[],key:number) {
    }
    Search(numbers:number[],key:number): number {
        let first:number=0;
        let last:number=numbers.length-1;
        let middle:number = Math.round((first+last)/2);
        while(first<=last) {
            if (numbers[middle] < key) first = middle + 1;
            else if (numbers[middle] > key) {
                last = middle - 1;
            }
            else if (numbers[middle] == key)
            {
                return middle;
            }
            middle=Math.round((first+last)/2);
        }
        return -1;
    }

}
