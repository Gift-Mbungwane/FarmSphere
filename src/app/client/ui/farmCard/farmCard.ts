import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {NavigateService} from 'src/app/shared/services/navigate.service'

@Component({
  selector: 'client-farmCard',
  templateUrl: './farmCard.html',
  styleUrls: ['../client-ui.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class FarmCard {
  constructor(public navigate: NavigateService) {}
}
