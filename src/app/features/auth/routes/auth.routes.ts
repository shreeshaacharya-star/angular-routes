import { Routes } from '@angular/router';

const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../components/auth-landing/auth-landing.component'),
    children: [
      {
        path: 'email',
        loadComponent: () => import('../components/email-login/email-login.component'),
      },
      {
        path: 'guest',
        loadComponent: () => import('../components/guest-login/guest-login.component'),
      },
    ],
  },
];

export default authRoutes;
