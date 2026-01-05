 import { Routes } from '@angular/router';
 import { Login } from './login/login';
import { App } from './app';
import { SignUp } from './sign-up/sign-up';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { PageNotFound } from './page-not-found/page-not-found';

 export const routes: Routes = [
    { path: '', component: Home },
   { path: 'login', component: Login},
   {path :'signup', component: SignUp},
   {path :'about', component: About},
   {path :'contact', component: Contact},
   {path:'**', component:PageNotFound}
 ];
