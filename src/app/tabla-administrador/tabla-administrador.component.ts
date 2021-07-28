import {Component, OnDestroy, OnInit} from '@angular/core';
import {User, UserChange} from '../model/response';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service';
import {Rol} from '../model/rol';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tabla-administrador',
  templateUrl: './tabla-administrador.component.html',
  styleUrls: ['./tabla-administrador.component.css']
})
export class TablaAdministradorComponent implements OnInit, OnDestroy {

  user: User;
  users: User[];
  totalRecords: number;
  page = 1;
  rolTypes: Rol;
  userDelete: User;
  subscription: Subscription;

  constructor(
    private router: Router,
    private userService: UsersService
  ) {
    this.users = [];
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  init(): void {
    this.subscription.add(this.userService.getUsers().subscribe(res => {
        this.users = res;
        console.log(res);
      }, error => {
        console.log(error);
      }
    ));
    this.totalRecords = this.users.length;
  }

  remove(): void {
    // this.users = this.userService.remove(this.userDelete.userName);
    this.totalRecords = this.users.length;
  }

  update(user: User): void {
    const userSend: UserChange = {
      id: user.pk,
      role: user.role
    };
    this.userService.changeRole(userSend).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  changeHab(id: number): void {
    this.userService.changeHab(id).subscribe(res => {
      this.init();
    }, error => {
      console.log(error);
    });
  }
}
