import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token = '';
  constructor(private http: HttpClient) { }
  post(url: string, body: any, header: any = new HttpHeaders({})): Observable<HttpEvent<any>> {
      const headers = new HttpHeaders({ Authorization: this.token, 'Content-Type': 'application/json'});
  		  return this.http.post<any>(url, body, {headers, observe: 'response'});
  }
  get(url: string, header: any = new HttpHeaders({})): Observable<HttpEvent<any>> {
  		const arrToken: string[] = document.cookie.split(';');
			 for (let i = 0 ; i < arrToken.length; i++) {
				if (arrToken[i].includes('Authorization')) {
					this.token = arrToken[i].substring(14);
				}
			}
		  const headers = new HttpHeaders({ Authorization: this.token});
  		return this.http.get<any>(url, {headers});
  }
  put(url: string, body: any, header: any = new HttpHeaders({})): Observable<HttpEvent<any>> {
  		const headers = new HttpHeaders({ Authorization: this.token, 'Content-Type': 'application/json'});
  		return this.http.put<any>(url, body, {headers});
  }
}
