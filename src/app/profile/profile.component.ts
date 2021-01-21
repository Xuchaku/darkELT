import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {HttpService} from "./../http.service"
import {AuthService} from "./../auth.service"
import {Router} from "@angular/router"
export interface UserMutable{
	nick: string,
	faculty: string,
	email: string,
	points?: number,
  additionalInfo: string,
	subscribed?: boolean
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  host : string = "http://188.242.187.21/user/"
  controlBar = {
  	nick: false,
  	additionalInfo: false,
  	faculty: false,
  	email: false
  }
  controlChangedElem = {
  	nick: false,
  	additionalInfo: false,
  	faculty: false,
  	email: false
  }
  userMutation : UserMutable = {
  	nick: "Nickname",
  	faculty:"Falucty",
  	email: "Email",
    additionalInfo: "Lorem ipsum",
  	points: 340,
  	subscribed: true
  }

  constructor(private httpins: HttpService, public authService: AuthService, public router: Router) {
    // this.httpins.get(this.host)
    //   .subscribe((response)=>{
    //     let user : UserMutable = JSON.parse(response);
    //   })
  }

  ngOnInit(): void {
     if(this.authService.isAuth){
       this.userMutation.nick = this.authService.user.nick;
       this.userMutation.faculty = this.authService.user.faculty;
       this.userMutation.email = this.authService.user.email;
       this.userMutation.additionalInfo = this.authService.user.additionalInfo;
       this.userMutation.points = this.authService.user.points;
       this.userMutation.subscribed = this.authService.user.subscribed;
     }
     else{
       this.router.navigate(["/login"]);
     }
     /*
      
    */
  }
  updateData(){
    let body: UserMutable = {
      nick: this.userMutation.nick,
      faculty: this.userMutation.faculty,
      email: this.userMutation.email,
      additionalInfo: this.userMutation.additionalInfo
    }
    this.httpins.put(this.host + body.nick, JSON.stringify(body))
      .subscribe((resp : any)=>{
         
      }, err=>{
        console.log(err);
      })
  }

}
