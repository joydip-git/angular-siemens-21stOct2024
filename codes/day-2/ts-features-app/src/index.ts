//X and Y => Type Parameters
interface ICalculation<X, Y> {
    add(a: X, b: X): Y;
    subtract(a: X, b: X): Y;
}
abstract class Calculation implements ICalculation<number, number> {
    subtract(a: number, b: number): number {
        return a - b
    }
    abstract add(a: number, b: number): number;
}
class CalculationImpl extends Calculation {
    add(a: number, b: number): number {
        return a + b
    }
}

const calc: CalculationImpl = new CalculationImpl()
console.log(calc.add(2, 3));
console.log(calc.subtract(3, 2));

class MyCollection<T> {
    private arr: T[];

    constructor() {
        this.arr = [];
    }
    get items() {
        return this.arr
    }
    add(element: T): void {
        this.arr.push(element)
    }
}

const collection: MyCollection<number> = new MyCollection<number>()
collection.add(12);
collection.add(1);
collection.add(13);

collection.items.forEach(item => console.log(item))

type fnType<T, TResult> = (element: T) => TResult

function filterValues<T, TResult>(input: T[], logic: fnType<T, TResult>): T[] {
    const output: T[] = []
    input.forEach(
        item => {
            if (logic(item))
                output.push(item)
        }
    )
    return output
}

const numbers = [1, 2, 3, 4, 5, 6]
filterValues<number, boolean>(
    numbers,
    function (element: number) {
        return element % 2 === 0
    }
).forEach(e => console.log(e))

type myType = number | undefined | null
type CustomerType = {
    name: string,
    email: string,
    mobile: number
}
const anilCustomer: CustomerType = {
    name: 'anil',
    email: 'anil@gmail.com',
    mobile: 9090909090
}

type firstType = {
    name: string
}
type secondType = {
    email: string
}

type combined = firstType & secondType;
const value: combined = {
    name: '',
    email: ''
}

class First {
    constructor(public name: string) {
    }
}
class Second extends First {
    constructor(name: string, public email: string) {
        super(name)
    }
}

interface IProduct {
    id: number;
    name: string;
    price: number;
    description?: string;
}
class Product implements IProduct {
    // id: number;
    // name: string;
    // price: number;
    description?: string;
    constructor(public id: number, public name: string, public price: number, description: string) {
        this.description = description
    }
}

const dellProduct: Product = {
    id: 1,
    name: 'dell laptop',
    price: 100000,
    description: ''
}