import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  setUserLogin(){
    this.isUserLoggedIn = true;
  }

  getUserLogin(){
    return this.isUserLoggedIn;
  }

}
