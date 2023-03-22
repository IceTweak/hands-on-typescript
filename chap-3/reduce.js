const allTrucks = [
    2,5,7,10
]

const initialCapacity = 0;
const allTonage = allTrucks.reduce((totalCapacity, 
    currentCapacity) => {
        totalCapacity = totalCapacity + currentCapacity;
        return totalCapacity;
    }, initialCapacity);

console.log(allTonage);