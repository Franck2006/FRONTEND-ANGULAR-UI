import { Routes } from '@angular/router';
import { DevAppCardDemo } from './components/dev-app-card-demo/dev-app-card-demo';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dev-app-card-demo",
        pathMatch: "full"
    },
    {
        path: "dev-app-card-demo",
        component: DevAppCardDemo
        // loadComponent: () => import("../../components/dev-app-card-demo/dev-app-card-demo").
    }
];
