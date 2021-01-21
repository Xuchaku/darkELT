import {HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders ,HttpEvent, HttpErrorResponse} from "@angular/common/http"
import {AuthService} from "./auth.service"
import {Observable} from "rxjs"
import { Injectable } from '@angular/core';
import {tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements  HttpInterceptor{
	constructor(private authService :AuthService){}
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		let cookie : boolean = document.cookie.includes("Authorization");
		if(cookie){

			// let arrToken : string[] = document.cookie.split(";");
			// let token : string = "";
			// for(let i = 0 ;i< arrToken.length;i++){
			// 	if(arrToken[i].includes("Authorization")){
			// 		token = arrToken[i].substring(14);
			// 	}
			// }
			// console.log(token);
			// let headers = new HttpHeaders({ 'Authorization': token});
			// let reqclone = req.clone();
			// return next.handle(reqclone)
			// 	.pipe(

			// 		)
		}
		else{
			return next.handle(req)
		}
		
		// this.authService.sbj.subscribe((token)=>{
			
		// })
		
		// return next.do(reqclone)
		// 	.pipe(tap(e=>{
		// 		console.log(e);
		// 	}))
		/*
		return next.handle(req).pipe(

			tap((x)=>{
				let headers = new HttpHeaders({ 'Authorization': this.authService.token});
				const reqclone = req.clone({headers});
				console.log(this.authService.token);
				return next.handle(reqclone);
			})
		)*/

	}
}