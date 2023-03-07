function runMore(distance: number): number {
    return distance + 10;
}

// If functions returns nothing (no return keyword)

// 1. No return type for function
function eat(calories: number) {
    console.log("I ate " + calories + " calories");
}

// 2. void type to be explicit
function sleepIn(hours: number): void {
    console.log("I slept " + hours + " hours");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);