import {Route} from '@angular/router'
import {ClientLayout} from './pages/layout/client-layout'
import {HomePage} from './pages/home/home'

export const clientRoutes: Route[]= [
  {
    path: '',
    component: ClientLayout,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
    ],
  },
]
