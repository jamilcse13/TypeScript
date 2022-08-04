const userDetails = (
    id: string | number,
    user: { name: string; age: number }
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`)
}


const sayHello = (user: {name: string; age: number}) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`)
}



// using Aliases
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails1 = (
    id: stringOrNum,
    user: userType
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`)
}


const sayHello1 = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`)
}