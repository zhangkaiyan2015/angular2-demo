import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
export const appRouters: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    {
        path: 'tabs', loadChildren: './tabs/tabs.module#TabsModule'
    },
    { path: '**', component: LoginComponent }

];
