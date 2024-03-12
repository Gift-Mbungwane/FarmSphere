import {Component} from '@angular/core'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'auth-login',
  templateUrl: './login.html',
  styleUrls: ['../auth.styles.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class LoginPage {}
