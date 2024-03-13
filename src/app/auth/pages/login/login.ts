import {Component} from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import {RouterLink} from '@angular/router'
import {NavigateService} from 'src/app/shared/services/navigate.service'
import { AuthService } from '../../auth.service'
import { UserService } from 'src/app/shared/services/user.service'

@Component({
  selector: 'auth-login',
  templateUrl: './login.html',
  styleUrls: ['../auth.styles.scss'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
})
export class LoginPage {

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private navigate: NavigateService
  ) {}

  onSubmit() {
    this.authService.onLoginFn(this.form.getRawValue()).subscribe(
      (res) => {
        const {id, username, role, phoneNumber, userImageURL, token} = res
        localStorage.setItem('token', token)
        this.userService.setUserSignal({
          id,
          username,
          role,
          phoneNumber,
          userImageURL,
        })
        this.userService.saveUserToStorageFn()

        if (res.role === 'CONSUMER') {
          this.navigate.to('/client/home')
        } 

        if (res.role === 'FARMER') {
          this.navigate.to('/client/home')
        } 
      },
      (error) => {
      }
    )
  }
}
