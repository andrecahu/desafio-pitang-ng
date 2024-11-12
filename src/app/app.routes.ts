import { Routes } from '@angular/router';
import {CarsComponent} from './features/cars/cars.component';
import {UsersComponent} from './features/users/users.component';
import {ProfileComponent} from './features/profile/profile.component';
import {SignInComponent} from './features/auth/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'me',
    component: ProfileComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  }
];
