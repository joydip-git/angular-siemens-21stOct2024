import { BehaviorSubject, Observable, Subscription } from "rxjs";

class DataStorageService {
    private subject: BehaviorSubject<number>;
    private static storage?: DataStorageService;

    storageObservable: Observable<number>;
    private constructor() {
        this.subject = new BehaviorSubject<number>(0)
        this.storageObservable = this.subject.asObservable()
    }
    publish(element: number) {
        this.subject.next(element)
    }
    static instantiate(): DataStorageService {
        if (!this.storage) {
            this.storage = new DataStorageService()
        }
        return this.storage
    }
}

const dataStorage = DataStorageService.instantiate()

const subscription: Subscription = dataStorage
    .storageObservable
    .subscribe({
        next: (data) => console.log('received: ' + data),
        error: (e) => console.log(e.message)
    })

setTimeout(
    () => {
        subscription.unsubscribe()
        console.log('subscription released');
    },
    10000
)

let value = 0
setInterval(
    () => {
        value = ++value
        console.log('publishing value: ' + value);
        dataStorage.publish(value)
    },
    1000
)


