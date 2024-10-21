//const numbers = new Array(1, 2, 3, 4, 5)
const numbers = [1, 2, 3, 4, 5]
numbers.push(10, 20, 30)
console.log('\nthrough for\n');
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log('\nthrough for...in\n');
for (let index in numbers) {
    console.log(numbers[index]);
}

//splice method mutates the original array
numbers.splice(0, 2, 100, 200)
console.log('\nthrough for...of\n');
for (let value of numbers) {
    console.log(value);
}

//does not mutate the original array
const copy = numbers.slice(0, 3)
console.log("\n copy values\n", copy);

const evenNumbers = numbers.filter(
    (num) => num % 2 === 0
)
evenNumbers.forEach(
    (num) => console.log(num)
)
//map, reduce, sort, find, findIndex etc. => they work on callback mechanism concept
