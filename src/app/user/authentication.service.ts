import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthenticationService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Ronak',
      lastName: 'Pathare',
    };
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
