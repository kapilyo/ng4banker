import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';

import { AuthGuardService } from './guards/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: UserloginComponent
 },
 {
    path: 'app-mainpage',
    component: MainpageComponent
    // , canActivate: [AuthGuardService]
 },
 {
  path: 'card-dashboard',
  component: CardsDashboardComponent
},
{ path: '**', redirectTo: 'login' }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    CardsDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
