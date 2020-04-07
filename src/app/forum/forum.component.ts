import { Component, OnInit } from '@angular/core';
import {QuestServiceService} from "./../quest-service.service"

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  constructor(public questArr: QuestServiceService) {  }

  ngOnInit(): void {
  }
  addQuest(){

  }

}
