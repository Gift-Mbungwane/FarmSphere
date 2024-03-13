import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import { Slider } from 'src/app/shared/ui/slider/slider'

@Component({
  templateUrl: './farmDetails.html',
  styleUrls: ['../client.scss'],
  standalone: true,
  imports: [CommonModule, Slider],
})
export class FarmDetailsPage {}
