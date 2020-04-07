import { Injectable } from '@angular/core';
//import { Quest } from './forum/forum.component'

@Injectable({
  providedIn: 'root'
})
export class QuestServiceService {
  questArr: Quest[] = [
  	{theme: "Тое", price: 35, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", commentCount: 12, observCount: 248, active:false, date: new Date().toString(), askerId: 2344},
  	{theme: "Тое", price: 35, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit", commentCount: 12, observCount: 248, active:true, date: new Date().toString(), askerId: 1374}
  ]
  constructor() { }
}
export interface Quest{
	theme: string,
	price: number,
	description: string,
	commentCount: number,
	observCount: number,
	active: boolean, 
    date: string,
    askerId: number | string
}
