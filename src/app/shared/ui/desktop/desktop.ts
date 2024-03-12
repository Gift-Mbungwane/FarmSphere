import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'

@Component({
  selector: 'shared-desktop',
  templateUrl: './desktop.html',
  standalone: true,
  imports: [CommonModule],
})
export class Desktop {}
