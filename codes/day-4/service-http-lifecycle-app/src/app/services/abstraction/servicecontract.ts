import { Observable, ObservableInput } from "rxjs";

export interface ServiceContract<T> {
    getData(): T;
    getAll(): Observable<T[]>
}