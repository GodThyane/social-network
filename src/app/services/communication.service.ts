import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Post, PostRequest} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  isAdmin: boolean;
  show: boolean;

  posts: PostRequest[];
  private sendAdminSubject = new Subject<boolean>();
  sendAdminObservable = this.sendAdminSubject.asObservable();

  private sendShowSubject = new Subject<boolean>();
  sendShowObservable = this.sendShowSubject.asObservable();


  private sendPostsSubject = new Subject<PostRequest[]>();
  sendPostsObservable = this.sendPostsSubject.asObservable();

  sendIsPosts(posts: PostRequest[]): void {
    this.posts = posts;
    this.sendPostsSubject.next(posts);
  }

  sendIsAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
    this.sendAdminSubject.next(isAdmin);
  }

  sendShow(show: boolean): void {
    this.show = show;
    this.sendShowSubject.next(show);
  }
}
