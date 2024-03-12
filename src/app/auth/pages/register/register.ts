import {Component} from '@angular/core'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'auth-register',
  templateUrl: './register.html',
  styleUrls: ['../auth.styles.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class RegisterPage {}
