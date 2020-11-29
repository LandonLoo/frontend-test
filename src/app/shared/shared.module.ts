import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostComponent } from './components/post/post.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentComponent } from './components/comment/comment.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    PostComponent,
    PostPreviewComponent,
    PostsComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PageNotFoundComponent,
    PostComponent,
    PostPreviewComponent,
    PostsComponent,
    CommentComponent,
  ]
})
export class SharedModule { }
