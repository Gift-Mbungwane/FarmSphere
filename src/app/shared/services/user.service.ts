import {Injectable, inject} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient)

  onLoginFn() {}

  onRegisterFn() {}
}
