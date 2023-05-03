"use strict";
// Arrow function
const createArray = (param) => {
    return [param];
};
const result1 = createArray('Bangladesh');
console.log(result1);
// generic function
const createArray1 = (param) => {
    return [param];
};
const result2 = createArray1('India');
console.log(result2);
const result3 = createArray1(false);
console.log(result3);
// normal function for generic use
function createArray2(p1, p2) {
    return [p1, p2];
}
// generic in tuple
const createTuple = (param1, param2) => {
    return [param1, param2];
};
const createTuple2 = (para1, para2) => {
    return [para1, para2];
};
const tuple1 = createTuple('Testing', 'successful');
const tuple2 = createTuple2('All', 'right');
console.log(tuple1);
console.log(tuple2);
// spread operator
const crush = 'Jannat Jeny';
const myInfo = {
    name: "Mahi",
    age: 22,
    salary: 30000,
};
const newData = Object.assign(Object.assign({}, myInfo), { crush });
console.log(newData);
const combineWithCrush = (myInfo) => {
    const newCrush = 'Selena Gomez';
    const myNewData = Object.assign(Object.assign({}, myInfo), { newCrush });
    return myNewData;
};
const myDetails = myInfo;
const newResult = combineWithCrush(myDetails);
console.log(newResult);
