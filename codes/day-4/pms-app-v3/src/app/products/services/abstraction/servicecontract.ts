import { Observable } from "rxjs";
import { ApiResponse } from "../../../models/apiresponse";

export interface ServiceContract<TData> {
    getAll(): Observable<ApiResponse<TData[]>>;
    get(id: number): Observable<ApiResponse<TData>>;
}