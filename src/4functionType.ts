const myFunc1 = () => {
    console.log("Hello");
}


// Function type
let myFunc2: Function;

myFunc2 = () => {
    console.log("Hello");
}


// with params

// c optional
// set default value => c: number = 5
const myFunc3 = (a: string, b: string, c?: number) => {
    console.log(`Hello ${a} ${b}`);
    return a + b;
}
myFunc3('5', '6');