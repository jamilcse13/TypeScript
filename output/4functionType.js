"use strict";
const myFunc1 = () => {
    console.log("Hello");
};
// Function type
let myFunc2;
myFunc2 = () => {
    console.log("Hello");
};
// with params
// c optional
// set default value => c: number = 5
const myFunc3 = (a, b, c) => {
    console.log(`Hello ${a} ${b}`);
    return a + b;
};
myFunc3('5', '6');
