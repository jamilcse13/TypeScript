"use strict";
// declare and assign
let playerName = "Mushfiq";
console.log(playerName);
// playerName = 34; // type error
// declare 
let code;
// then assign 
code = 1234;
code = "25gk3";
// type defining and checking
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 5));
// type checking for array 
let arr = ["apple", "banana"];
// arr.push(36);  //type error
// we can push any value here
let arr2 = [];
arr2.push(28);
arr2.push("jamil");
// we can push only push defined types of data
let arr3 = [24, "string"];
arr3.push(28);
arr3.push("jamil");
// arr3.push(true);  // can not push bool data
// type checking for object
let person = {
    name: "Mushfiq",
    age: 34,
    isCaptain: true
};
// person.name = 255; //don't match the type
