import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {HttpService} from "./../http.service"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //https://jsonplaceholder.typicode.com/todos
  //"http://188.242.187.21/description"
  host: string = "http://188.242.187.21/description"
  constructor(private httpins: HttpService) { }
  description: string = ''
  authors : string = ''
  error: boolean = false
  ngOnInit(): void {
    this.httpins.get(this.host)
      .subscribe((resp : any)=>{
        console.log(resp);
        this.description = resp.description
        this.authors = resp.authors.join(" ")
      })
    /*
  	this.http.get<any>(this.host)

  		.subscribe(resp =>{
        console.log(document.cookie)
  			console.log(resp);
  			this.description = resp.description
  			this.authors = resp.authors.join(" ")

  		})*/
  }

}
