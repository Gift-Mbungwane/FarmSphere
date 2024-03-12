import {Route} from '@angular/router'
import {ClientLayout} from './pages/layout/client-layout'
import {HomePage} from './pages/home/home'
import {OrdersPage} from './pages/orders/orders'
import {CartPage} from './pages/cart/cart'
import {NotificationsPage} from './pages/notifications/notifications'

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
    ],
  },
]
