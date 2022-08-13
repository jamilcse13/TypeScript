import { Player } from './Classes/9moduleSystem.js';
const john = new Player("John Doe", 30, "XYZ");
const doe = new Player("Doe John", 28, "ABC");
let sakib;
sakib = new Player("Sakib", 30, "Bangladesh");
console.log(john.name); // we can access the property
john.age = 35; //we can change the property value
// const players: string[] = [];
const players = [];
players.push(john);
players.push(doe);
