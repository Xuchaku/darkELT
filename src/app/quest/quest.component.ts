import { Component, OnInit, Input } from '@angular/core';
import { Quest } from './../quest-service.service'
import {AuthService} from './../auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {
  @Input() quest: Quest
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  incObserv(){
  	if(!this.authService.isAuth)
  		this.router.navigate(["/login"]);
  	else
  		this.router.navigate(["/thread"]);
  }

}
