import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { Room } from './models/room';
import { AngularFireAuth } from '@angular/fire/auth';
import { timestamp } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  isCollapsed = false;
  isLoggedIn = false;

  constructor(
    private iconService: NzIconService,
    private fbAuth: AngularFireAuth,
    private router: Router
  ) {
    this.fbAuth.user.subscribe((u) => {
      if (u) {
        this.isLoggedIn = true;
        console.log(u.toJSON());
      } else  {
        this.isLoggedIn = false;
      }
    });
  }

  logout() {
    this.fbAuth.signOut()
      .then(_ => {
        console.log('logged out')
        this.router.navigateByUrl('/admin/login');
      })
      .catch(err => {
        console.log('logout error');
        console.error(err)
      })
  }
}
