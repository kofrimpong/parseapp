import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: any[];

  constructor() {

  }
  login(email: string, password: string) {
    // const query = new Parse.Query(Parse.User);
    // query.equalTo("email", email);  // find all the women
    // let user = await query.first();
    // if(user){

    // }
    return Parse.User.logIn(email, password).then(user => {
      if (user) {
        return true;
      }
      return false;
    });
  }
  logout() {
    return Parse.User.logOut().then(() => {
      let user = Parse.User.current()
      if (user) {
        return false;
      }
      return true;
    });
  }
  isLoggedIn() {
    return Parse.User.current() != null
  }
}
