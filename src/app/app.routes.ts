import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.page').then((m) => m.AboutPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'car1',
    loadComponent: () => import('./car1/car1.page').then(m => m.Car1Page)
  },
  {
    path: 'car2',
    loadComponent: () => import('./car2/car2.page').then( m => m.Car2Page)
  },
  {
    path: 'car3',
    loadComponent: () => import('./car3/car3.page').then( m => m.Car3Page)
  },
  {
    path: 'car4',
    loadComponent: () => import('./car4/car4.page').then( m => m.Car4Page)
  },
];

//all these were made automatically when i made the new pages
