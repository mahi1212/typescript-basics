"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = yield response.json();
    return data;
});
const getToDoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getToDo();
    console.log(data);
});
getToDoData();
// Mocking - do something that is not real
// Mocking is used to test the code that is not yet ready
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'Hello World';
        if (data) {
            resolve(data);
        }
        else {
            reject('No data');
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
// promise using boolean
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject('No data');
        }
    });
};
const getPromiseBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    return data;
});
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { data: 'New Data' };
        if (data) {
            resolve(data);
        }
        else {
            reject('No object found');
        }
    });
};
const getPromiseObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    return data;
});
