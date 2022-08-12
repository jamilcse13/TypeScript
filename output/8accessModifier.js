"use strict";
class Employer {
    constructor(n, a, c) {
        this.name = n,
            this.age = a,
            this.country = c;
    }
    // we can write the constructor like this only if we declare 
    // each access modifier exolicitely
    // constructor(
    //     public name: string,
    //     private age: number,
    //     readonly country: string
    // ) {}
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const johns = new Employer("John Doe", 30, "XYZ");
const does = new Employer("Doe John", 28, "ABC");
console.log(johns.age); // we can not access the private property
johns.age = 35; //we can not change the private property value
console.log(johns.country); // can access readonly
johns.country = "UK"; // can not change readonly
// const Employers: string[] = [];
const employers = [];
employers.push(johns);
employers.push(does);
