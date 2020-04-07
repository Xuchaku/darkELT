import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean = false
  constructor() { }
  login(){
  	this.isAuth = !this.isAuth
  }
  logout(){
  	this.isAuth = !this.isAuth
  }
}
