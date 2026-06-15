import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../components/auth-landing/auth-landing.component'),
    children: [
      {
        path: 'login',
      },
    ],
  },
];
