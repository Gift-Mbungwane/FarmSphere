import {CommonModule} from '@angular/common'
import {Component, EventEmitter, Output} from '@angular/core'

@Component({
  selector: 'client-navbar',
  templateUrl: './navbar.html',
  standalone: true,
  imports: [CommonModule],
})
export class Navbar {
  @Output() toggle = new EventEmitter()

  toggleMenu() {
    this.toggle.emit()
  }
}
