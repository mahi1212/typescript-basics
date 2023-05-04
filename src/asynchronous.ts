// fetch from json placeholder
interface IToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
const getToDo = async (): Promise<IToDo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}
const getToDoData = async ():Promise<void> => {
    const data = await getToDo();
    console.log(data);
}
getToDoData();
// Mocking - do something that is not real
// Mocking is used to test the code that is not yet ready
const makePromise = () => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Hello World';
        if(data){
            resolve(data);
        }else{
            reject('No data');
        }
    })
};

const getPromiseData= async ():Promise<string> =>{
    const data = await makePromise();
    return data;
}
// promise using boolean
const makePromiseBoolean = () => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if(data){
            resolve(data);
        }else{
            reject('No data');
        }
    })
}
const getPromiseBoolean = async ():Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}
// promise using object 
interface IObjectInterface {
    data: string
}
const makePromiseObject = () => {
    return new Promise<IObjectInterface>((resolve, reject) => {
        const data = {data: 'New Data'};
        if(data){
            resolve(data);
        }else{
            reject('No object found');
        }
    })
}

const getPromiseObject = async(): Promise<IObjectInterface> => {
    const data = await makePromiseObject();
    return data;
}