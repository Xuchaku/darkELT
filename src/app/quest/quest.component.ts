import { Component, OnInit, Input } from '@angular/core';
import { Quest } from './../quest-service.service'

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {
  @Input() quest: Quest
  constructor() { }

  ngOnInit(): void {
  }
  incObserv(){

  }

}
