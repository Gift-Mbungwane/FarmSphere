import {CommonModule, NgFor, NgIf} from '@angular/common'
import {Component} from '@angular/core'
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router'
import {Navbar} from '../../ui/navbar/navbar'
import { Footer } from 'src/app/shared/ui/footer/footer'

@Component({
  selector: 'client-layout',
  templateUrl: './client-layout.html',
  standalone: true,
  styleUrls: ['../client.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar,
    NgFor,
    RouterLink,
    NgIf,
    RouterLinkActive,
    Footer
  ],
})
export class ClientLayout {
  // navigation routes
  navigations: {url: string; name: string; icon: string}[] = [
    {url: '/client/home', name: 'Nearby farms', icon: 'bi-geo-alt'},
    {url: '/client/orders', name: 'Orders', icon: 'bi-basket'},
    {url: '/client/cart', name: 'Cart', icon: 'bi-cart'},
    {url: '/client/notifications', name: 'Notifications', icon: 'bi-bell'},
    {url: '/public/login', name: 'Logout', icon: 'bi-person-slash'},
  ]

  isMenuOpen: boolean = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

 
}
