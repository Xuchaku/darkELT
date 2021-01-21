import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {HttpService} from '../http.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-socket-test',
  templateUrl: './socket-test.component.html',
  styleUrls: ['./socket-test.component.css']
})
export class SocketTestComponent implements OnInit {
  socket : WebSocket
  host : string = ""
  dataset: object = {
    name: "Alex",
    id: Math.floor(Math.random() * 100)
  }
  constructor(public authService: AuthService, private httpins: HttpService) { }

  ngOnInit(): void {
    //let headers = new HttpHeaders({ Authorization: this.httpins.token, 'Content-Type': 'application/json'});
    console.log("SOCKET INIT");
    this.socket = new WebSocket(this.host);
    this.socket.onopen = () => {
      console.log("SOCKET OPEN")
      console.log("SENDINDG DATA")
      this.socket.send(JSON.stringify(this.dataset))
    }

    this.socket.onmessage = (event: MessageEvent) => {
      console.log("DATA OUT:", event.data)
    }
  }

}
