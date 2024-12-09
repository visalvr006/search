import { Searching } from "./InterfaceSearch";
export class TernarySearch implements Searching{
    constructor(public numbers:number[],public key:number) {
    }
    Search(numbers:number[],key:number): number {
        let low:number=0;
        let rear:number=numbers.length-1;
        while(rear>=low) {
            let middle1:number = Math.round(low + (rear - low) / 3);
            let middle2:number = Math.round(rear - (rear - low) / 3);
            if (numbers[middle1] == key) {
                return middle1
            }
            if (numbers[middle2] == key) {
                return middle2
            }

            if (key < numbers[middle1]) rear = middle1 - 1
            else if (key > numbers[middle2]) low = middle2 + 1
            else {
                low=middle1+1
                rear=middle2-1
            }
        }
        return -1;
    }
}