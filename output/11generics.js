"use strict";
// <T> identifies the user manual input type in generic way
// only object type accepted here by using <T extends object>
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "John",
    age: 30,
});
// we can also define the object like <T extends {name: string, age: number}>
/**
 * const addId = <T> (obj: T) => {
 * }
 * let user = "Mush"
 * addId(user)
 * it will work and get user data as a string
 */
