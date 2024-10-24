import { Component, Inject } from '@angular/core';
import { ServiceContract } from '../services/abstraction/servicecontract';
import { Post } from '../models/post';
import { POST_SERVICE_TOKEN } from '../config/constants';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  //posts: Post[] | undefined;//=[]
  //or
  posts?: Post[];
  fetchComplete = false
  errorInfo = ''

  constructor(@Inject(POST_SERVICE_TOKEN) private ps: ServiceContract<Post>) {
    //this.posts = []
    const obs = this.ps.getAll()
    obs
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data
          this.fetchComplete = true
          this.errorInfo = ''
        },
        error: (e) => {
          this.posts = undefined
          this.fetchComplete = true
          this.errorInfo = e.message
        },
        complete: () => {

        }
      })
  }
}
