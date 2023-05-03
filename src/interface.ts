// type will be used for premitive data
// lets see an example of type alias and interface
type User = {
    name: string;
    age: number;
}
type ExtendedUser = User & {
    role: string
}

const typeExample : ExtendedUser = {
    name:'Test',
    age: 22,
    role: 'Test'
}
// lets see same example using interface
// interface will be used for object type data
interface IUser {
    name: string;
    age: number
}
// both looks same but we can extend interface
interface IExtendedUser extends IUser {
    role: string
}
const user : IExtendedUser = {
    name: 'Mahi',
    age: 23,
    role: 'Admin'
}

// using type alias as function signature
type AddNumbersType = (num1: number, num2: number) => number;
const addNumbers: AddNumbersType = (num1, num2) => num1 + num2;

// using type alias in array
type NumbersArray = number[];
const rollNumbers : NumbersArray = [10, 12, 15];