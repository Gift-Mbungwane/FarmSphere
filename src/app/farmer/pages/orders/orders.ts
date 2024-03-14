import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'

@Component({
  selector: 'farmer-orderPage',
  templateUrl: './orders.html',
  styleUrls: ['../farmer.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class OrdersPage {}
