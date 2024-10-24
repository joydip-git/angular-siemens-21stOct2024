import { Observable } from "rxjs";

export interface ServiceContract<T> {
    getData(): T;
    getAll(): Observable<T[]>
    get(id: number): Observable<T>;
    add(value: T): Observable<T>;
    update(id: number, value: T): Observable<T>;
    delete(id: number): Observable<T>;
}