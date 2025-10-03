import { Routes } from '@angular/router';
import { Register } from './Components/register/register';
import { Login } from './Components/login/login';

export const routes: Routes = [
    {
        path:"register", component : Register
    },
    {
        path:"login", component : Login
    }
];
