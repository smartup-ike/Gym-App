import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of, switchMap, Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  user?: User;
  subscription?: Subscription;
  currentUid?: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(1),
    );


  constructor(
    private breakpointObserver: BreakpointObserver,
    private authSer: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private userSer: UsersService,
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
      this.user = user;
      console.log('Auth: Your uid', this.user?.uid);
    })
  }

  logOut() {
    this.authSer.logout();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
