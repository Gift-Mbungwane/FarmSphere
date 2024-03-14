import {CommonModule, NgFor} from '@angular/common'
import {Component} from '@angular/core'
import { CartItem } from '../../ui/cartItem/cartItem'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'client-cartPage',
  templateUrl: './cart.html',
  styleUrls: ['../client.scss'],
  standalone: true,
  imports: [CommonModule, CartItem, NgFor],
})
export class CartPage {

  constructor(public  cartService: CartService) {}
}
