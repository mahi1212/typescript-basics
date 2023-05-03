// we can similarly write this as
// const passedNumbers : number[] = [ 10, 12, 15];
const passedNumbers: Array<number> = [ 10, 12, 15 ]
// const passedNumbersString : string[] = [ '10', '12', '15']
const passedNumbersString : Array<string> = [ '10', '12', '15']

type GenericArray<T> = Array<T>;

const newRolls: GenericArray<number> = [ 2, 4, 6];
const stringRolls: GenericArray<string> = [ '2', '4', '6'];

// genetric array of object
const userNameAndRoll: GenericArray <{name: string, age: number}> = [
    {
        name: 'Mahi',
        age: 22
    },
    {
        name: 'Tushar',
        age: 23
    }
]

// generic touples
type GenericTouple<X, Y> = [X, Y];
const relationShip: GenericTouple<string, string> = ["Money", "Marriage"];
