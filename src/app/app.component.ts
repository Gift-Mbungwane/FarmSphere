import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {Desktop} from './shared/ui/desktop/desktop'
import {CommonModule, NgIf} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, Desktop, CommonModule, NgIf],
})
export class AppComponent {
  isMobile: boolean = window.innerWidth < 700 ? true : false
}
