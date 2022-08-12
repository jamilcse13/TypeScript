"use strict";
let myFunc;
let add;
add = (a, b) => {
    return a + b;
};
let calcualtion;
calcualtion = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calcualtion(5, 6, 'add'));
let userDetail;
userDetail = (id, user) => {
    console.log("somethng");
};
