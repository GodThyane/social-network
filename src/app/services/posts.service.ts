import {Injectable} from '@angular/core';
import {Post, Post1, PostRequest} from '../model/post';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Category} from '../model/category';
import {map} from 'rxjs/operators';
import {Comentario, ComentarioResponse} from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  count: number = this.posts.length;
  private url = 'http://3.16.50.63:8000/posts';
  

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getId(): number {
    return this.count++;
  }

  createPost(post: Post1): Observable<PostRequest> {
    if (this.auth.check()) {
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      });
      return this.http.post<PostRequest>(`${this.url}/posts/`, post, {headers})
        .pipe(
          map((res: PostRequest) => {
            return res;
          })
        );
    }
  }

  createCategory(category: Category): Observable<any> {
    if (this.auth.check()) {
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      });
      return this.http.post(`${this.url}/category/`, category, {headers});
    }
  }

  getPosts(): Observable<PostRequest[]> {
    if (this.auth.check()) {
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      });
      return this.http.get<PostRequest[]>(`${this.url}/posts/`, {headers})
        .pipe(
          map((res: PostRequest[]) => {
            return res;
          })
        );
    }
  }

  getComments(pk: number): Observable<ComentarioResponse[]> {
    if (this.auth.check()) {
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      });
      return this.http.get<ComentarioResponse[]>(`${this.url}/comments?post_pk=${pk}`, {headers})
        .pipe(
          map((res: ComentarioResponse[]) => {
            return res;
          })
        );
    }
  }

  comment(pk: number, comentario: Comentario): Observable<ComentarioResponse> {
    if (this.auth.check()) {
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      });
      return this.http.post<ComentarioResponse>(`${this.url}/comments?post_pk=${pk}`, comentario,{headers})
        .pipe(
          map((res: ComentarioResponse) => {
            return res;
          })
        );
    }
  }

  getCategories(): Observable<Category[]> {
    if (this.auth.check()) {
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      });
      return this.http.get<Category[]>(`${this.url}/category`, {headers})
        .pipe(
          map((res: Category[]) => {
            return res;
          })
        );
    }
  }
}
