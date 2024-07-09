import { Routes } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { SignUpComponent } from '../views/sign-up/sign-up.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { HomeComponent } from '../views/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];
