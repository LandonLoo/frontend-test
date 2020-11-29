import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/interface/post.interface';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {
  @Input() postInfo!: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
