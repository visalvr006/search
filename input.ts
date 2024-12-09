
import * as fs from 'fs';
export class input{
    getarray(): string[]{
const matches=fs.readFileSync('C:\\input\\input.txt',{
    encoding:'utf-8'
})
let numbers:string[] = matches.split(/\r?\n/);
return numbers
    }
}