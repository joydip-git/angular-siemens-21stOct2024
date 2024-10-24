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
  constructor(@Inject(POST_SERVICE_TOKEN) private ps: ServiceContract<Post>) {

  }
}
