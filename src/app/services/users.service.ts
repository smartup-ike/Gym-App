import { Injectable } from '@angular/core';
// import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersRef = this.db.collection<User>('users')

  constructor( private db: AngularFirestore) { }

   getEmployeeRef(uid:string): Observable<User | undefined> {
    return this.usersRef.doc(uid).valueChanges();
  }

}
