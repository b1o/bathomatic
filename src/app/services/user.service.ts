import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user$: Observable<User>;

  constructor(private fbUser: AngularFireAuth) {
    this.user$ = this.fbUser.user;
  }
}
