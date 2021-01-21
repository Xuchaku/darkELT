import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service'
import {HttpService} from './../http.service'
import {UserMutable} from "./../profile/profile.component"
export interface User{
	id: number,
	name: string,
	avatarSrc?: string 
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 //user : User = {id: 20334, isAuth: false, name: "Igor Chazer"}
  host : string = "http://188.242.187.21/user"
  constructor(public authService: AuthService, private httpins: HttpService) { }

  ngOnInit(): void {
    
    if(this.authService.isAuth){
    this.httpins.get(this.host)
      .subscribe((resp : any)=>{
        this.authService.user.nick = resp.nick;
        this.authService.user.faculty = resp.faculty;
        this.authService.user.email = resp.email;
        this.authService.user.additionalInfo = resp.additionalInfo;
        this.authService.user.subscribed = resp.subscribed;
        this.authService.user.points = resp.points;
        console.log(this.authService.user);
      }, (err)=>{
        console.log(err);
      })
    }
  }

}
