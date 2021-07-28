import {Component, OnInit} from '@angular/core';
import {isYesterday} from '../model/RelojTest';
import {getDateTooltip} from '../model/RelojTest';
import {Post, PostRequest} from '../model/post';
import {PostsService} from '../services/posts.service';
import {CommunicationService} from '../services/communication.service';
import {Category} from '../model/category';
import {DatePipe} from '@angular/common';
import {User} from '../model/response';
import {UsersService} from '../services/users.service';

declare var $: any;


@Component({
  selector: 'app-visualize-post',
  templateUrl: './visualize-post.component.html',
  styleUrls: ['./visualize-post.component.css']
})
export class VisualizePostComponent implements OnInit {

  public isLike: boolean;
  show: boolean;
  posts: PostRequest[];
  categories: Category[];
  users: User[];
  postAux: PostRequest[];
  isLoad: boolean;

  constructor(
    private postsService: PostsService,
    private comm: CommunicationService,
    private dateTipe: DatePipe,
    private userSerivce: UsersService
  ) {
    this.isLike = false;
    this.show = true;
    this.posts = [];
    this.categories = [];
    this.loadCategories();

  }

  ngOnInit(): void {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.comm.sendShowObservable.subscribe(show => {
      this.show = show;
    });
    this.init();
  }

  private init() {
  }

  loadingInitPost(): void {
    this.postsService.getPosts().subscribe(res => {
      console.log(res);
      this.posts = res;
      this.postAux = res;
      this.posts.forEach((post) => {
        this.loadUsers(post);
        this.loadCommentSize(post);
        post.date_created = this.dateTipe.transform(post.date_created, 'yyyy-MM-dd hh:mm:ss');

      });
      this.loadList();
      this.isLoad = true;
    }, error => {
      console.log(error);
    });
  }

  loadCommentSize(post: PostRequest): void {
    this.postsService.getComments(post.pk).subscribe(res => {
      post.size = res.length;
    }, error => {
      console.log(error);
    });
  }

  loadCategories(): void {
    this.postsService.getCategories().subscribe(res => {
        this.categories = res;
        this.loadList();
        this.loadingInitPost();
      },
      error => {
        console.log(error);
      });
  }

  loadUsers(post: PostRequest): void {
    this.userSerivce.getUsers().subscribe(res => {
        post.userName = res.find(us => us.pk === post.user).username;
      },
      error => {
        console.log(error);
      });
  }

  getDaysAgo(date: string): string {
    return isYesterday(new Date(date));
  }

  recentOrder(): void {
    this.posts.sort((a, b) => {
      return new Date(b.date_created).getTime() - new Date(a.date_created).getTime();
    });
  }

  filter(pk: number): void {
    console.log(pk);
    this.posts = this.postAux;
    this.posts = this.posts.filter(cat => cat.category === pk);
  }

  getDate(date: string): string {
    return getDateTooltip(new Date(date));
  }

  hide(): void {
    $('[data-toggle="tooltip"]').tooltip('hide');
    this.comm.sendIsPosts(this.posts);
  }

  reset(): void {
    this.posts = this.postAux;
  }

  private loadList(): void {
    console.log(this.categories);
    this.posts.forEach((post) => {
      if(post.category !== null){
      post.name_category = this.categories.find(cat => cat.pk === post.category).name_category;
      }else{
        post.name_category = '';
      }
    });

  }
}
