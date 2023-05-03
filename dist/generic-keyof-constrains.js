"use strict";
const a = 'age';
const b = 'age';
// now let's get a property using generic constrains(force)
function getProperty(obj, key) {
    return obj[key];
}
const property = getProperty({ name: 'Mahi', age: 23 }, 'age');
console.log(property);
