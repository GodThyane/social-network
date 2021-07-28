import {Component, OnInit} from '@angular/core';
import {getStringActual, isAdultF} from '../model/RelojTest';
import {UsersService} from '../services/users.service';
import {UserRegister} from '../model/response';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user: UserRegister;

  isExistEmail: boolean;
  isNick: boolean;

  constructor(
    private usersService: UsersService,
  ) {
    this.user = {
      username: '',
      email: '',
      birthdate: '',
      password: '',
      password_confirm: ''
    };
  }

  ngOnInit(): void {
  }

  getDateActual(): string {
    return getStringActual();
  }

  onSubmit(): void {

    this.usersService.register(this.user).subscribe(res => {
      console.log(res);
      this.user = {
        username: '',
        email: '',
        birthdate: '',
        password: '',
        password_confirm: ''
      };
    }, error => {
      this.isExistEmail = false;
      this.isNick = false;
      if (error.error.email !== undefined){
            this.isExistEmail = true;
        }
      if (error.error.username !== undefined){
        this.isNick = true;
        }
    });
  }

  isInValid(): boolean {
    return !this.isAdult() || !this.isEqual();
  }

  isAdult(): boolean {
    return isAdultF(new Date(this.user.birthdate));
  }

  isEqual(): boolean {
    return this.user.password === this.user.password_confirm;
  }
}
