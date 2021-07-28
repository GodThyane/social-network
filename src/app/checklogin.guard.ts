import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(): boolean | UrlTree {
    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      this.auth.logOut();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
