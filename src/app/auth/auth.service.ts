import {Injectable, inject} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)

  onLoginFn() {}

  onRegisterFn() {}
}
