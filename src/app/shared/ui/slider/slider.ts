import {Component} from '@angular/core'
import {Product} from './product/product'
import { NgFor } from '@angular/common'

@Component({
  selector: 'share-slider',
  templateUrl: './slider.html',
  standalone: true,
  imports: [Product, NgFor],
})
export class Slider {}
