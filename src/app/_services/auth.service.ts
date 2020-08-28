import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   userData: Observable<firebase.User>;
  constructor(private angularFireAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    this.userData = angularFireAuth.authState;
   }

  // tslint:disable-next-line: typedef
  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.angularFireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

   // tslint:disable-next-line: typedef
   SignOut() {
     this.angularFireAuth.signOut();
     this.router.navigate(['/login']);
   }
}
