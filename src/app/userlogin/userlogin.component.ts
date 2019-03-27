import { Component, OnInit } from '@angular/core';
import {Router, Route} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private router: Router) {}
  loginform;
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
  }

  passwordValidation(formcontrol) {
      if (formcontrol.value.length < 5) {
        return { 'password' : true};
      }
  }

  loginClick(formdata) {
    if (formdata.username === 'kapilz' && formdata.password === 'password') {
      this.router.navigate(['card-dashboard']);
    }
  }

}
