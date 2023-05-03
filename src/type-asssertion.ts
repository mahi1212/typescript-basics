// this is assertion; it means saying TS, I know more than you
let test: any = 'This is a string';
let index = (test as string ).lastIndexOf('is');
// both are similar, but best practice is using AS SOMETHING
(test as string).length;
<string>test.length;

function kgToGram(element: string | number) : string | number | undefined {
    if(typeof element === 'string'){
        let value = parseFloat(element) * 1000;
        return `Converted value is ${value}`
    }
    if(typeof element === 'number'){
        let value = element * 1000;
        return value;
    }
}

const expectedNumber = kgToGram(12) as number;
console.log(expectedNumber)
const expectedString = kgToGram('11') as string;
console.log(expectedString)
console.log(expectedNumber.toFixed(2))