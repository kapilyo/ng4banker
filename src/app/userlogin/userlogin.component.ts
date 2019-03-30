import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  loginform;
  user: SocialUser;

  ngOnInit() {
    this.loginform = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        this.passwordValidation
      ]))
    });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (this.user) {
        this.router.navigate(['card-dashboard']);
      } else{
        this.router.navigate(['login']);
      }
    });
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  passwordValidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { 'password': true };
    }
  }

  loginClick(formdata) {
    if (formdata.username === 'kapilz' && formdata.password === 'password') {
      this.router.navigate(['card-dashboard']);
    }
  }

}
