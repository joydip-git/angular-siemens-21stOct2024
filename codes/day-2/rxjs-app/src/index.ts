import { Observable, Observer, of, Subscription } from "rxjs";

const numbers = [1, 2, 3, 4]
let obsOfNumbers: Observable<number[]> = of(numbers)

const numbersObserver: Observer<number[]> = {
    next: (data) => {
        console.log(data);
    },
    error: (err) => {
        console.log(err.message);
    },
    complete: () => { }
}
const subscription: Subscription =
    obsOfNumbers
        .subscribe(numbersObserver)

setTimeout(
    () => {
        subscription.unsubscribe()
        console.log('subscription released');
    },
    3000
)

// setTimeout(
//     () => {
//         numbers.push(10, 20, 30)
//         obsOfNumbers = of(numbers)
//     },
//     1000
// )


