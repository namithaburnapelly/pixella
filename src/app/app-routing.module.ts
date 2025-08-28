import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/Authentication/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { SignupPageComponent } from './components/Authentication/signup-page/signup-page.component';
import { AuthGaurd } from './Service/Authentication/auth.gaurd';
import { LoginGaurd } from './Service/Authentication/login.gaurd';

// canActivate is a route gaurd executed to check if router should navigate to the route.
// Resolver is data provider that fetchs data for the component before router starts navigating.
const routes: Routes = [
  // chat routes
  {
    path: 'chat',
    children: [
      { path: 'new', component: HomeComponent },
      { path: ':chatId', component: HomeComponent },
    ],
    canActivate: [AuthGaurd], //only if logged in
  },

  //  Auth routes (prevent access if logged in)
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGaurd] },
  { path: 'signup', component: SignupPageComponent, canActivate: [LoginGaurd] },

  // default route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
