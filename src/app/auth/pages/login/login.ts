import {Component} from '@angular/core'
import {RouterLink} from '@angular/router'
import {NavigateService} from 'src/app/shared/services/navigate.service'

@Component({
  selector: 'auth-login',
  templateUrl: './login.html',
  styleUrls: ['../auth.styles.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class LoginPage {
  constructor(public navigate: NavigateService) {}

  onLoginFn() {
    this.navigate.to('/client/home')
  }
}
