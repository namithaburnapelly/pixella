import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/Authentication/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { SignupPageComponent } from './components/Authentication/signup-page/signup-page.component';

// canActivate is a route gaurd executed to check if router should navigate to the route.
// Resolver is data provider that fetchs data for the component before router starts navigating.
const routes: Routes = [
  { path: '', redirectTo: 'chat/new', pathMatch: 'full' },

  // chat routes
  {
    path: 'chat',
    children: [
      { path: 'new', component: HomeComponent },
      { path: ':chatId', component: HomeComponent },
    ],
  },

  //  Auth
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
