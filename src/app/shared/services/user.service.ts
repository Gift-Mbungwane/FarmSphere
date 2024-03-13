import {Injectable, inject, signal} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient)

  //userSignal = signal<{email: string} | undefined | null>(undefined);

  onSetFn() {}

  onRegisterFn() {}
}
