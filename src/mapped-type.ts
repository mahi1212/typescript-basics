// how we convert in js
const arrayofNumbers = [1, 2, 3, 4, 5];
const arrayofStrings = arrayofNumbers.map(number => number.toString())
console.log(arrayofStrings)
// mapped type in typescript
type Person  ={
    name: string,
    age: number,
    salary: number
}
// lets convert the type into string
type PersonType = {
    [key in keyof Person]: string
}