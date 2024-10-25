import { Injectable } from '@angular/core';
import { ServiceContract } from './abstraction/servicecontract';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService implements ServiceContract<Post> {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  get(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
  }

  add(value: Post): Observable<Post> {
    return this.http.post<Post>(
      'https://jsonplaceholder.typicode.com/posts', value)
  }

  update(id: number, value: Post): Observable<Post> {
    return this.http.put<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id, value)
  }

  delete(id: number): Observable<Post> {
    return this.http.delete<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id)
  }
}
