import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/Authentication/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { SignupPageComponent } from './components/Authentication/signup-page/signup-page.component';
import { AuthGaurd } from './Service/Authentication/auth.gaurd';

// canActivate is a route gaurd executed to check if router should navigate to the route.
// Resolver is data provider that fetchs data for the component before router starts navigating.
const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: HomeComponent },
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGaurd] },
  { path: 'signup', component: SignupPageComponent, canActivate: [AuthGaurd] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
