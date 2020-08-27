import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.less'],
})
export class AuthPageComponent implements OnInit {
  public validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fbAuth: AngularFireAuth,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  get email() {
    return this.validateForm.get('email').value;
  }

  get password() {
    return this.validateForm.get('password').value;
  }

  register() {
    this.fbAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((response) =>
        response.user.sendEmailVerification({
          url: 'http://localhost:4200/admin/login',
        })
      );
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.fbAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((data) => {
        this.message.success('Login Successs');
        this.router.navigateByUrl('/admin');
      })
      .catch((err) => this.message.error('Invalid Credentials'));
  }
}
