import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: 'chat',
                component: ChatComponent
            }
        ]
    },
    {
        path: 'auth',
        children:[
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'register',
                component:RegisterComponent
            },
            {
                path:'',
                pathMatch:'full',
                redirectTo:'auth/login'
            },
            {
                path:'**',
                redirectTo:'login'
            }
        ]
    },
    {
        path:'',
        redirectTo:'dashboard/chat',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'dashboard/chat'
    }
];
