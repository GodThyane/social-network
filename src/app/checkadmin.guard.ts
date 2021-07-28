import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckadminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(): boolean | UrlTree {
    if (localStorage.getItem('rol') === 'A') {
      return true;
    } else {
      this.router.navigate(['/posts']);
      return false;
    }
  }
}
