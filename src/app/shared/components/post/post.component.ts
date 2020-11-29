import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from 'src/app/core/http/api.service';
import { IComment } from 'src/app/core/interface/comment.interface';
import { IPost } from 'src/app/core/interface/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postId!: number;
  postInfo!: IPost;
  comments: IComment[] = [];
  filteredComments: IComment[] = []; // #REFACTOR : use Angular's pipe

  searchTxt = '';
  searchInput$ = new Subject<string>();

  constructor(
    private API: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.API.getPost(this.postId).subscribe(post => this.postInfo = post);
    this.API.getComments(this.postId).subscribe(comments => this.comments = comments);

    this.searchInput$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(keyword => {
      if (!keyword) {
        this.filteredComments = this.comments;
        return;
      }

      this.filteredComments = this.comments.filter(comment => {
        return comment.name.includes(keyword) || comment.email.includes(keyword) || comment.body.includes(keyword);
      });
    });

    this.onSearchboxInput();
  }

  onSearchboxInput(): void {
    this.searchInput$.next(this.searchTxt);
  }
}
