import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  host: string = "http://188.242.187.21/description"
  constructor(private http: HttpClient) { }
  description: string = ''
  authors : string = ''
  error: boolean = false
  ngOnInit(): void {
  	this.http.get<any>(this.host)

  		.subscribe(resp =>{
        console.log(document.cookie)
  			console.log(resp);
  			this.description = resp.description
  			this.authors = resp.authors.join(" ")

  		})
  }

}
