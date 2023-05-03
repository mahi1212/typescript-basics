// Arrow function
const createArray = (param: string) : string[] => {
    return [param];
}
const result1 = createArray('Bangladesh');
console.log(result1)
// generic function
const createArray1 = <T>(param: T) : T[] =>{
    return [param]
}
const result2 = createArray1<string>('India')
console.log(result2)
const result3 = createArray1<boolean>(false)
console.log(result3)
// normal function for generic use
function createArray2 <X, Y> (p1: X, p2: Y): [X,Y] {
    return [p1, p2]
}
// generic in tuple
const createTuple = <X, Y> (param1: X, param2: Y): [X,Y] =>{
    return [param1, param2]
}
const createTuple2 = <X, Y>(para1: X, para2: Y): [X,Y] => {
    return [para1, para2]
}
const tuple1 = createTuple('Testing', 'successful');
const tuple2 = createTuple2('All', 'right');
console.log(tuple1)
console.log(tuple2)
// spread operator
const crush = 'Jannat Jeny';
const myInfo = {
    name: "Mahi",
    age: 22,
    salary: 30000,
}
const newData = {...myInfo, crush}
console.log(newData)

const combineWithCrush = <T>(myInfo: T) => {
    const newCrush = 'Selena Gomez';
    const myNewData = {...myInfo, newCrush};
    return myNewData;
}

const myDetails = myInfo;

const newResult = combineWithCrush(myDetails)
console.log(newResult)