"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n,
            this.age = a,
            this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const john = new Player("John Doe", 30, "XYZ");
const doe = new Player("Doe John", 28, "ABC");
console.log(john.age); // we can access the property
john.age = 35; //we can change the property value
// const players: string[] = [];
const players = [];
players.push(john);
players.push(doe);
