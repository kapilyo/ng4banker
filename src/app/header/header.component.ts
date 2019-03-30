import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signOut(): void {
    this.authService.signOut();
  }

}
