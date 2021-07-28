import {Component, OnDestroy, OnInit} from '@angular/core';

import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';
import {CommunicationService} from '../services/communication.service';
import {PostsService} from '../services/posts.service';
import {Category} from '../model/category';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  isAdmin: boolean;
  isLogged: boolean;
  subscription: Subscription;
  categoria: Category;


  constructor(public auth: AuthService, private commService: CommunicationService, private postService: PostsService) {
    this.subscription = new Subscription();
    this.categoria = {
      name_category: '',
      pk: null
    };
  }

  ngOnInit(): void {
    this.subscription.add(this.auth.isLogged.subscribe((res) => (this.isLogged = res)));
    this.commService.sendAdminObservable.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.isAdmin = localStorage.getItem('rol') === 'A';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  hide(): void {
    $('[data-toggle="tooltip"]').tooltip('hide');
  }

  logOut(): void {
    this.auth.logOut();
  }

  createCategory(): void {
    this.postService.createCategory(this.categoria).subscribe(res => {
        console.log(res);
        this.categoria = {
          name_category: '',
          pk : null
        };
      }, error => {
        this.categoria = {
          name_category: '',
          pk : null
        };
        console.log(error);
      }
    );
  }
}
