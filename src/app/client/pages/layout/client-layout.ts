import {CommonModule, NgFor, NgIf} from '@angular/common'
import {Component} from '@angular/core'
import {RouterLink, RouterOutlet} from '@angular/router'
import {Navbar} from '../../ui/navbar/navbar'

@Component({
  templateUrl: './client-layout.html',
  standalone: true,
  styleUrls: ['../client.scss'],
  imports: [CommonModule, RouterOutlet, Navbar, NgFor, RouterLink, NgIf],
})
export class ClientLayout {
  // navigation routes
  navigations: {url: string; name: string; icon: string}[] = [
    {url: '#', name: 'Orders', icon: 'bi-basket'},
    {url: '#', name: 'Nearby farms', icon: 'bi-geo-alt'},
    {url: '#', name: 'Cart', icon: 'bi-cart'},
    {url: '#', name: 'Settings', icon: 'bi-gear'},
    {url: '#', name: 'Profile', icon: 'bi-person'},
    {url: '#', name: 'Notifications', icon: 'bi-bell'},
    {url: '/public/login', name: 'Logout', icon: 'bi-person-slash'},
  ]

  isMenuOpen: boolean = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
