let myFunc: (x: string, y: string) => void;


let add: (a: number, b: number) => number;

add = (a: number, b: number) => {
    return a+b;
}


let calcualtion: (a: number, b: number, c: string) => number;

calcualtion = (a: number, b: number, c: string) => {
    if (c === 'add') {
        return a + b;
    } else {
        return a - b;
    }
}
console.log(calcualtion(5, 6, 'add'))



let userDetail: (id: number | string, userInfo: {
    name: string,
    age: number
}) => void;

userDetail = (id: number | string, user: {
    name: string,   // object key name should be same
    age: number
}) => {
    console.log("somethng");
}