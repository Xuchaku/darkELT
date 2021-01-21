import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service'
import {HttpService} from "./../http.service"
import {Quest ,QuestServiceService} from "./../quest-service.service"
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  host: string = "http://188.242.187.21/questions/1/10"
  constructor(public serviceStateQuest: QuestServiceService, public authService: AuthService, private httpins: HttpService) {  }

  ngOnInit(): void {
  	 /*console.log("INIT");
  	 this.httpins.get(this.host)
      .subscribe((resp : any)=>{
      	for(let i =0;i < resp.length;i++)
      		this.serviceStateQuest.questArr.push(resp[i])

      })*/
  	 /*for(let i  = 0; i < 10; i++){
       this.serviceStateQuest.questArr.push()
     }*/

  }
  addQuest(){

  }

}
