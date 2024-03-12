import {Route} from '@angular/router'
import {ClientLayout} from './pages/layout/client-layout'
import {HomePage} from './pages/home/home'
import {OrdersPage} from './pages/orders/orders'
import {CartPage} from './pages/cart/cart'
import {NotificationsPage} from './pages/notifications/notifications'
import {FarmDetailsPage} from './pages/farmDetails/farmDetails'

export const clientRoutes: Route[] = [
  {
    path: '',
    component: ClientLayout,
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
        path: 'cart',
        component: CartPage,
      },
      {
        path: 'notifications',
        component: NotificationsPage,
      },
      {
        path: 'farmdetails/:id',
        component: FarmDetailsPage,
      }
    ],
  },
]
