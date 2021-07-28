import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User, UserChange, UserRegister} from '../model/response';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  url = 'http://3.16.50.63:8000/users';

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {
  }


  getUsers(): Observable<User[]> {
    if (this.auth.check()) {
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      });
      return this.http.get<User[]>(`${this.url}/list/`, {headers})
        .pipe(
          map((res: User[]) => {
            return res;
          }),
          catchError((err => AuthService.handlerError(err)))
        );
    }
  }

  register(user: UserRegister): Observable<User> {
    return this.http.post<User>(`${this.url}/register/`, user)
      .pipe(
        map((res: User) => {
          this.router.navigate(['login']);
          return res;
        })
      );
  }

  changeRole(user: UserChange): Observable<User> {
    if (this.auth.check()) {
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      });
      return this.http.post<User>(`${this.url}/role/`, user, {headers})
        .pipe(
          map((res: User) => {
            return res;
          }),
          catchError((err => AuthService.handlerError(err)))
        );
    }
  }

  changeHab(id: number): Observable<User> {
    if (this.auth.check()) {
      const headers = new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      });
      return this.http.get<User>(`${this.url}/disable/${id}`, {headers})
        .pipe(
          map((res: User) => {
            return res;
          }),
          catchError((err => AuthService.handlerError(err)))
        );
    }
  }

}
