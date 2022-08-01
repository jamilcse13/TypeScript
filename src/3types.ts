// defined types without assigning value 
let a: string;
let b: number;


// array type 
let c: string[] = [];
let d: number[] = [];


// union type 
let e: number | string;
let f: (number | string)[] = [];


// object type 
let p: object;
p = [1,2,3] //allowed

let g: {
    name: string,
    age: number,
    adult: boolean
}

// g = [] // not allowed for explicit type
g = {
    name: "jamil",
    age: 27,
    adult: true
}


// any type or dynamic type
let u; 
let v: any;
let w: any[] = [];
let x: {
    name: any,
    age: any,
    adult: any
}