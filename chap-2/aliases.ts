type Points = 20 | 30 | 40 | 50;
let score: Points = 20;

console.log(score);

// or

type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
}

let tom: ComplexPerson = {
    name: "Tom",
    age: 25,
    birthday: new Date("1989-12-22"),
    married: true,
    address: "NY, Mathis-Celm st."
}

console.log(tom);