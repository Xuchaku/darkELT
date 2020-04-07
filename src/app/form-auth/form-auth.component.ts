import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.css']
})
export class FormAuthComponent implements OnInit {
  authUser = {nick: "WELL", password: "DONE", faculty: "YES", email: "SOBAKA"}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  pushInToServer(){
  	let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  	//https://jsonplaceholder.typicode.com/todos
  	//http://188.242.187.21/register
 	this.http.post<any>("http://188.242.187.21/register", JSON.stringify(this.authUser), {
 		headers
 	})
  	.subscribe((resp)=>{
  		console.log(resp);
  		console.log(document.cookie)
  	})
  }

}
