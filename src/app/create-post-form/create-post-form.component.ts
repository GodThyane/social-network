import {Component, OnInit} from '@angular/core';
import {Post, Post1} from '../model/post';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';
import {Category} from '../model/category';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit {

  post: Post1;
  categories: Category[];
  categorie: Category;

  constructor(
    private postService: PostsService,
    private router: Router,
    private notify: NotificationsService
  ) {
    this.post = {
      name_post: '',
      post_content: '',
      name_category: ''
    };

    this.categorie = {
      name_category: '',
      pk: null
    };
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  create(): void {
    this.postService.createPost(this.post).subscribe(res => {
      console.log(res);
      this.router.navigate(['posts']);
    },error => {
      console.log(error);
    });
  }

  home(): void {
    this.post = {
      name_post: '',
      post_content: '',
      name_category: ''
    };
    this.router.navigate(['/posts']);
  }

  onSuccess(message): void {
    this.notify.success('Completado', message, {
      timeOut: 1000,
      animate: 'fade',
      showProgressBar: true
    });
  }

  private loadCategories(): void {
    this.postService.getCategories().subscribe(res => {
      this.categories = res;
    }, error => {
      console.log(error);
    });
  }

  filter(pk: number) {

  }

  reset() {

  }

  send(category: Category) {
    this.categorie = category;
    this.post.name_category = this.categorie.name_category;
  }
}
