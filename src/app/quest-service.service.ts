import { Injectable} from '@angular/core';
//import { Quest } from './forum/forum.component'

@Injectable({
  providedIn: 'root'
})
export class QuestServiceService{
  host: string = "http://188.242.187.21/questions/1/10"
  questArr: Quest[] = [
    {id: 1, theme: "Theme", price: 300, question: "Please Help me, thenks for help", amountOfWatches: 250, amountOfComments: 12, createdAt: new Date(), answererId:null,askerId:null},
    {id: 1, theme: "Theme", price: 300, question: "Please Help me, thenks for help", amountOfWatches: 250, amountOfComments: 12, createdAt: new Date(), answererId:11,askerId:12},
    {id: 1, theme: "Theme", price: 300, question: "Please Help me, thenks for help", amountOfWatches: 250, amountOfComments: 12, createdAt: new Date(), answererId:11,askerId:12},
    {id: 1, theme: "Theme", price: 300, question: "Please Help me, thenks for help", amountOfWatches: 250, amountOfComments: 12, createdAt: new Date(), answererId:11,askerId:12},
    {id: 1, theme: "Theme", price: 300, question: "Please Help me, thenks for help", amountOfWatches: 250, amountOfComments: 12, createdAt: new Date(), answererId:11,askerId:12},
    {id: 1, theme: "Theme", price: 300, question: "Please Help me, thenks for help", amountOfWatches: 250, amountOfComments: 12, createdAt: new Date(), answererId:11,askerId:12},
    {id: 1, theme: "Theme", price: 300, question: "Please Help me, thenks for help", amountOfWatches: 250, amountOfComments: 12, createdAt: new Date(), answererId:11,askerId:12},
  ]
  constructor() { }
}
export interface Quest{
  id: number,
	theme: string,
	price: number,
	question: string,
	amountOfWatches: number,
	amountOfComments: number,
	createdAt: Date,
  answererId: number,
  askerId: number | string
}
