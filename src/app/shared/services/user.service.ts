import {Injectable, signal} from '@angular/core'
import {UserInterface} from '../types/user.interface'
import {NavigateService} from './navigate.service'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSignal = signal<UserInterface | null>(null)

  constructor(private navigate: NavigateService) {}

  // set user data in the state
  setUserSignal(user: UserInterface) {
    this.userSignal.set(user)
  }

  // get user data from the state
  getUserSignal(): UserInterface | null {
    return this.userSignal() ? this.userSignal() : null
  }

  // save user data to localstorage
  saveUserToStorageFn() {
    localStorage.setItem('user', JSON.stringify(this.userSignal()))
  }

  // get user data from storage if exists, then set it to state
  getUserFromStorageFn() {
    if (localStorage.getItem('user')) {
      const user: UserInterface = JSON.parse(
        localStorage.getItem('user') || ''
      ) as UserInterface

      this.setUserSignal(user)
    }
  }

  // logout
  logoutFn() {
    localStorage.clear()
    this.userSignal.set(null)
    this.navigate.to('/public/login')
  }
}
