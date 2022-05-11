import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription, map, of, switchMap } from 'rxjs';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription?: Subscription;
  user?: User;
  currentUid?: string;

  constructor(
    private authSer: AuthService,
    private userSer: UsersService,
    private router: Router,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    this.subscription = this.afAuth.user.pipe(switchMap(user => {
      console.log(user);
      if (!user?.uid) return of({} as User);
      const $user = this.userSer.getEmployeeRef(user.uid);
      return $user;
    }
    )).subscribe(user => {
      console.log(user);
      if (!user?.uid) {
        this.router.navigate(['login']);
      }
      this.currentUid = user?.uid;
      console.log('Auth: Your uid:', this.currentUid );
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  async signOut() {
    await this.authSer.logout();
  }

}
