import { CommonModule } from '@angular/common';
import {Component} from '@angular/core'
import { FilterFarms } from '../../ui/filterFarms/filterFarms';
import { FarmCard } from '../../ui/farmCard/farmCard';

@Component({
  templateUrl: './home.html',
  styleUrls: ['../client.scss'],
  standalone: true,
  imports: [CommonModule, FilterFarms, FarmCard]
})
export class HomePage {}
