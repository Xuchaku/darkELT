import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {AuthService} from "./../auth.service"
import {HttpService} from "./../http.service"
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError : boolean = false
  errormessage : string = ""
  user: any = {
  	username: "WELL7",
  	password: "DONE"
  }
  host: string = "http://188.242.187.21/auth/login"
  //https://jsonplaceholder.typicode.com/todos
  //"http://188.242.187.21/auth/login"
  //https://reqres.in/api/products/3
  constructor(private authService: AuthService, private httpins: HttpService, private router: Router) { }

  ngOnInit(): void {
  }
  pushInToServer(){
  	let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  	/*
  	this.http.post<any>("http://188.242.187.21/auth/login", JSON.stringify(this.user), {headers})
  		.subscribe(resp=>{
  			console.log(resp.token)
  			this.authService.sbj.next(resp.token)
  			//this.authService.token = resp.token
  		})
    }*/
    this.httpins.post(this.host, JSON.stringify(this.user), headers)
      .subscribe((resp)=>{
        let response : any =  resp;
        if(response.status == 200){
          console.log(response);
          document.cookie = "Authorization=" + response.body.token;
          this.authService.login();
          this.router.navigate(["/"]);
        }
        
      }, (err: any)=>{
        this.isError = true;
        this.errormessage = err.message + " " + err.status;
        console.log(err);
      })
  	//Тестовая секция
    /*
  	setTimeout(()=>{
  		this.authService.token = "NEW TOKEN";
  		console.log(this.authService.token);
  	},3000)
  	*/
  	
	}
}


