import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'

@Component({
    selector: 'client-navbar',
  templateUrl: './navbar.html',
  standalone: true,
  imports: [CommonModule],
})
export class Navbar {}
