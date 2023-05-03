interface MandatoryInterface {
    name: string,
    age: number,
    salary: number
}
// using extends for fixed value with generic called generic constrains
const addMeWithCrush = <T extends MandatoryInterface> (myInfo: T) => {
    const myCrush = 'My wife';
    const newData = {...myInfo, myCrush};
    return newData;
} 

const myInformation = {
    name: 'Mahinur Rahman',
    age: 22,
    salary: 30000,
    hobby: 'Programming'
}
let ans1 = addMeWithCrush(myInformation);
