"use strict";
// using extends for fixed value with generic called generic constrains
const addMeWithCrush = (myInfo) => {
    const myCrush = 'My wife';
    const newData = Object.assign(Object.assign({}, myInfo), { myCrush });
    return newData;
};
const myInformation = {
    name: 'Mahinur Rahman',
    age: 22,
    salary: 30000,
    hobby: 'Programming'
};
let ans1 = addMeWithCrush(myInformation);
