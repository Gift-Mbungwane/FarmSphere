import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'public',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '',
    redirectTo: 'public/login',
    pathMatch: 'full',
  },
]
