import {NgIf} from '@angular/common'
import {Component, Input} from '@angular/core'
import {CartService} from 'src/app/client/services/cart.service'
import {ProductInterface} from 'src/app/shared/types/product.interface'

@Component({
  selector: 'share-product',
  templateUrl: './product.html',
  standalone: true,
  imports: [NgIf],
})
export class Product {
  @Input() product!: ProductInterface
  @Input() showCardButton: boolean = true

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCartSignal(this.product)
  }
}
