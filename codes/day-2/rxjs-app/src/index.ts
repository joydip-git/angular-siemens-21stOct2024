import { BehaviorSubject, Observable, Subscription } from "rxjs";

class DataStorage {
    private subject: BehaviorSubject<number>;
    private static storage?: DataStorage;

    storageObservable: Observable<number>;
    private constructor() {
        this.subject = new BehaviorSubject<number>(0)
        this.storageObservable = this.subject.asObservable()
    }
    publish(element: number) {
        this.subject.next(element)
    }
    static instantiate(): DataStorage {
        if (!this.storage) {
            this.storage = new DataStorage()
        }
        return this.storage
    }
}

const dataStorage = DataStorage.instantiate()

const subscription: Subscription = dataStorage
    .storageObservable
    .subscribe({
        next: (data) => console.log(data),
        error: (e) => console.log(e.message)
    })

setTimeout(
    () => {
        subscription.unsubscribe()
        console.log('subscription released');
    },
    10000
)

setInterval(
    () => {
        let value = 0
        dataStorage.publish(value++)
    },
    1000
)


