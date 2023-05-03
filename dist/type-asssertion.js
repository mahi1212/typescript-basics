"use strict";
// this is assertion; it means saying TS, I know more than you
let test = 'This is a string';
let index = test.lastIndexOf('is');
// both are similar, but best practice is using AS SOMETHING
test.length;
test.length;
function kgToGram(element) {
    if (typeof element === 'string') {
        let value = parseFloat(element) * 1000;
        return `Converted value is ${value}`;
    }
    if (typeof element === 'number') {
        let value = element * 1000;
        return value;
    }
}
const expectedNumber = kgToGram(12);
console.log(expectedNumber);
const expectedString = kgToGram('11');
console.log(expectedString);
console.log(expectedNumber.toFixed(2));
