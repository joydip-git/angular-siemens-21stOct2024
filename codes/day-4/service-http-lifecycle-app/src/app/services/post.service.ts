import { Injectable } from '@angular/core';
import { ServiceContract } from './abstraction/servicecontract';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService implements ServiceContract<Post> {

  constructor(private http: HttpClient) { }
  getData(): Post {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<Post[]> {
    const obs: Observable<Post[]> = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    return obs
  }
}
