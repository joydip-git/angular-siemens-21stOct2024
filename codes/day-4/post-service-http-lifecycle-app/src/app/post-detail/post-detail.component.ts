import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ServiceContract } from '../services/abstraction/servicecontract';
import { Post } from '../models/post';
import { POST_SERVICE_TOKEN } from '../config/constants';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnChanges {
  @Input() postId = 0
  post?: Post;
  constructor(@Inject(POST_SERVICE_TOKEN) private ps: ServiceContract<Post>) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ps.get(this.postId).subscribe({
      next: (resp) => {
        this.post = resp
      }
    })
  }
}
