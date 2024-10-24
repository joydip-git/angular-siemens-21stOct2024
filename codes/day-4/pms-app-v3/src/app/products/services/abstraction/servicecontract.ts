export interface ServiceContract<T> {
    getAll(): T[];
    get(id: number): T | undefined;
}