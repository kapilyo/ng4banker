import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';


import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule, MatCheckboxModule, MatChipsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// custom pipe
import { CardPipe } from './pipes/card-pipe';

// yet to implement
import { AuthGuardService } from './guards/auth-guard.service';

// google login
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';


import { from } from 'rxjs';
import { AnimateCountDirective } from './directives/animate-count.directive';

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


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('554568905147-rlovhhal32tm1aoo1ocm78qn1674r0co.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    CardsDashboardComponent,
    CardPipe,
    AnimateCountDirective
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
    MatCheckboxModule,
    MatChipsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
