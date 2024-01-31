import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path:"main",
        component: MainLayoutComponent
    }

    
];
