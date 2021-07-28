import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {User, UserResponse, UserSend} from '../model/response';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedId = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    //this.check();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedId;
  }

  private url = 'http://3.16.50.63:8000/users';

  static handlerError(err: any): Observable<never> {

    let errMessage = 'Un error recibiendo el mensaje';
    if (err) {
      errMessage = `Error: code ${err.message}`;
    }
    console.log(errMessage);
    return throwError(errMessage);

  }

  logIn(authData: UserSend): Observable<any> {
    return this.http.post<UserResponse>(`${this.url}/login/`, authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token, res.user);
          this.loggedId.next(true);
          this.router.navigate(['/posts']);
          return res;
        }),
        catchError((err => AuthService.handlerError(err)))
      );
  }

  check(): boolean{
    if (localStorage.getItem('token') == null){
      this.loggedId.next(false);
      this.logOut();
      return false;
    }
    else{
      this.loggedId.next(true);
      return true;
    }
  }

  saveToken(token: string, user: User): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', user.username);
    localStorage.setItem('rol', user.role);
  }

  logOut(): void {
    console.log('Saliendo');
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('user');
    this.loggedId.next(false);
    this.router.navigate(['/login']);
  }
}
