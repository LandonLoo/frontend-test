import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { IPost } from 'src/app/core/interface/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];

  constructor(
    private API: ApiService
  ) { }

  ngOnInit(): void {
    this.API.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
