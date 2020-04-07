import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service'

export interface User{
	id: number,
	isAuth: boolean,
	name: string,
	avatarSrc?: string 
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : User = {id: 20334, isAuth: false, name: "Igor Chazer"}
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
