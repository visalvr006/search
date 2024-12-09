import { Searching } from "./InterfaceSearch";
export class JumpSearch implements Searching{
    constructor(public numbers,key) {
    }
    Search(numbers,key): number {
        let size:number=numbers.length;
        let step:number = Math.floor(Math.sqrt(size));
        let previous:number = 0;
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
                return-1;
            }
        }


        if (numbers[previous] ==  key)
            return previous;
        return -1;
    }
}