type personType = {
    name: string,
    age: number,
    address: string
}

type NewType = 'name' | 'age' | 'address'
// get type using keyof similar to this
type NewKeyOfType = keyof personType;

const a: NewKeyOfType = 'age'
const b: NewType = 'age'

// now let's get a property using generic constrains(force)
function getProperty<X, Y extends keyof X>(obj: X, key: Y){
    return obj[key];
}
const property = getProperty({name: 'Mahi', age: 23}, 'age')

console.log(property)