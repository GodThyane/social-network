import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';

import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {UserSend} from '../model/response';
import {Subscription} from 'rxjs';
import {CommunicationService} from '../services/communication.service';


declare var $: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  user: UserSend;
  passwordB: boolean;
  subscription: Subscription;

  constructor(
    // tslint:disable-next-line:variable-name
    private _userService: UsersService,
    private auth: AuthService,
    private router: Router,
    private commService: CommunicationService
  ) {
    this.user = {
      username: '',
      password: ''
    };
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onSubmit(): void {
    this.subscription.add(
      this.auth.logIn(this.user).subscribe((res) => {
          if (res) {
            this.passwordB = false;
            this.commService.sendIsAdmin(localStorage.getItem('rol') === 'A');
          }
        },
        error => {
          this.passwordB = true;
        })
    );
  }
}
