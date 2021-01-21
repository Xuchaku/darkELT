import { Injectable } from '@angular/core';
import {Subject} from "rxjs"
import {User} from "./user/user.component"
import {UserMutable} from "./profile/profile.component"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean = false
  user : UserMutable = {
    nick: "Nickname",
    faculty:"Falucty",
    email: "Email",
    additionalInfo: "Lorem ipsum",
    points: 340,
    subscribed: true
  }
  token: string = ""
  constructor() { }
  login(){
  	this.isAuth = !this.isAuth
  }
  logout(){
  	this.isAuth = !this.isAuth
  }
}
