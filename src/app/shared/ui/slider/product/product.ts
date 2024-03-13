import { NgIf } from '@angular/common'
import {Component, Input} from '@angular/core'
import { ProductInterface } from 'src/app/shared/types/product.interface'

@Component({
  selector: 'share-product',
  templateUrl: './product.html',
  standalone: true,
  imports: [NgIf],
})
export class Product {
  @Input() product!: ProductInterface
}
