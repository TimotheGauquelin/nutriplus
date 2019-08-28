import { Injectable } from '@angular/core';
import { User } from './../model/usersmodel';

@Injectable({providedIn: 'root'})
export class UsersService {
  private currentUsers: User;

  addUser(user: User) {
    this.currentUsers = user;
  }
  getCurrentUser(): User {
    return this.currentUsers;
  }
}
