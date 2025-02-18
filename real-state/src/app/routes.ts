import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormLogInComponent } from './form-log-in/form-log-in.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }, 
  {
    path: 'login',
    component: FormLogInComponent,
    title: 'Log In'
  }
];

export default routeConfig;