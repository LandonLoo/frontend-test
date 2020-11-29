import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../interface/post.interface';
import { IComment } from '../interface/comment.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected URL = `${ environment.api.protocol }://${ environment.api.host }${ environment.api.namespace ? '/' : '' }${ environment.api.namespace }`;

  constructor(
    protected httpClient: HttpClient,
  ) { }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<any>(`${ this.URL }/posts`);
  }

  getPost(postId: number): Observable<IPost> {
    return this.httpClient.get<any>(`${ this.URL }/posts/${ postId }`);
  }

  getComments(postId: number): Observable<IComment[]> {
    return this.httpClient.get<any>(`${ this.URL }/comments`, {
      params: {
        postId: postId.toString(),
      }
    });
  }
}
