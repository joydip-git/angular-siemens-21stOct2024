import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ServiceContract } from '../services/abstraction/servicecontract';
import { Post } from '../models/post';
import { POST_SERVICE_TOKEN } from '../config/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit, OnDestroy {
  //posts: Post[] | undefined;//=[]
  //or
  posts?: Post[];
  fetchComplete = false
  errorInfo = ''
  private sub?: Subscription;
  selectedId = 0
  selectdId(id: number) {
    this.selectedId = id
  }
  constructor(@Inject(POST_SERVICE_TOKEN) private ps: ServiceContract<Post>) {
    //this.posts = []
    console.log('hello...');
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    this.fetchData()
  }
  async fetchData() {
    try {
      const obs = await this.ps.getAll()
      this.sub = obs
        .subscribe({
          next: (data: Post[]) => {
            this.posts = data.slice(0, 5)
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
      //this.sub?.unsubscribe()      
    } catch (error: any) {
      this.posts = undefined
      this.fetchComplete = true
      this.errorInfo = error.message
    }
    // const obs = this.ps.getAll()
    // obs
    //   .subscribe({
    //     next: (data: Post[]) => {
    //       this.posts = data
    //       this.fetchComplete = true
    //       this.errorInfo = ''
    //     },
    //     error: (e) => {
    //       this.posts = undefined
    //       this.fetchComplete = true
    //       this.errorInfo = e.message
    //     },
    //     complete: () => {

    //     }
    //   })
  }
}
