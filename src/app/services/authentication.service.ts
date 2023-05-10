import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: User[];
  userLogged: User | undefined;

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  signUp(newUser: User) {
    this.userLogged = newUser;
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('userLogged', JSON.stringify(newUser));
  }

  login(email: string, password: string): User | undefined {
    const user = this.users.find(user => user.email === email && user.password === password);
    localStorage.setItem('userLogged', JSON.stringify(user));
    return user;
  }

  getUserLogged(): User | undefined {
    return JSON.parse(localStorage.getItem('userLogged') || '');
  }
}
