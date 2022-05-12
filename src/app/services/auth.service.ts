import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth,
    private router: Router,) { }

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
    this.router.navigate(['main'])
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['login']);
  }

}
