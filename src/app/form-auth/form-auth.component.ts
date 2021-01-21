import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {HttpService} from "./../http.service"
import {Router} from '@angular/router'
@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.css']
})
export class FormAuthComponent implements OnInit {
  authUser = {nick: "WELL", password: "DONE", faculty: "YES", email: "SOBAKA"}
  host : string = "http://188.242.187.21/auth/register"
  isError : boolean = false
  errormessage : string = ""
  constructor(private httpins: HttpService, private router: Router) { }

  ngOnInit(): void {
  }
  pushInToServer(){
  	let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  	//https://jsonplaceholder.typicode.com/todos
  	//http://188.242.187.21/register
    //https://reqres.in/api/products/3
    
   	this.httpins.post(this.host, JSON.stringify(this.authUser), headers)
    	.subscribe((resp : any)=>{
        if(resp.status == 201){
          console.log(resp);
          console.log(document.cookie);
          this.router.navigate(["/login"]);
        }
    		
        
    	}, (err: any)=>{
        this.isError = true;
        this.errormessage = err.message + " " + err.status;
        console.log(err);
      })
  }

}
