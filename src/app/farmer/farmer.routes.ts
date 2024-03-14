import {Route} from '@angular/router'
import {FarmLayout} from './pages/layout/farmer-layout'
import {HomePage} from './pages/home/home'
import {OrdersPage} from './pages/orders/orders'
import {NotificationsPage} from './pages/notifications/notifications'

export const farmerRoutes: Route[] = [
  {
    path: '',
    component: FarmLayout,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'orders',
        component: OrdersPage,
      },
      {
        path: 'notifications',
        component: NotificationsPage,
      },
    ],
  },
]
