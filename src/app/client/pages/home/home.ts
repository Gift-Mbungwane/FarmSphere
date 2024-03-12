import { CommonModule } from '@angular/common';
import {Component} from '@angular/core'

@Component({
  templateUrl: './home.html',
  styleUrls: ['../client.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomePage {}
