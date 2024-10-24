import { Injectable } from '@angular/core';
import { ServiceContract } from './abstraction/servicecontract';
import { Post } from '../models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService implements ServiceContract<Post> {

  constructor(private http: HttpClient) { }
  getData(): Post {
    throw new Error('Method not implemented.');
  }
  async getAll(): Promise<Observable<Post[]>> {
    const obs: Observable<Post[]> = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
    return obs
  }
  get(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
  }
  add(value: Post): Observable<Post> {
    var p: Post = { id: 1, title: '', body: '', userId: 1 }
    //{ "id": 1, "title": '', "body": '', "userId": 1 }
    return this.http.post<Post>(
      'https://jsonplaceholder.typicode.com/posts', value)
  }
  update(id: number, value: Post): Observable<Post> {
    return this.http.put<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id, value,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
  }
  delete(id: number): Observable<Post> {
    return this.http.delete<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id)
  }
}
