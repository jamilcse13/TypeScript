export class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n,
        this.age = a,
        this.country = c
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}