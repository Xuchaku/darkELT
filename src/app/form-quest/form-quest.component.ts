import { Component, OnInit } from '@angular/core';
import {AuthService} from "./../auth.service"
import {HttpService} from "./../http.service"
import {Router} from '@angular/router'
interface Quest{
	theme: string,
	question: string,
	price: number,
	createdAt: Date
}
@Component({
  selector: 'app-form-quest',
  templateUrl: './form-quest.component.html',
  styleUrls: ['./form-quest.component.css']
})
export class FormQuestComponent implements OnInit {
  host : string = "http://188.242.187.21/questions"
  quest: Quest = {
  	theme: "",
  	question: "",
  	price: 0,
  	createdAt: null
  }
  constructor(private authService: AuthService, private httpins: HttpService, private router: Router) { }

  ngOnInit(): void {
  }
  pushInServer(){
  	this.quest.createdAt = new Date();
  	this.httpins.post(this.host, JSON.stringify(this.quest))
  		.subscribe((resp)=>{
  			console.log(resp)
  		})
  }

}
