import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/core/interface/comment.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() commentInfo!: IComment;

  constructor() { }

  ngOnInit(): void {
  }

}
