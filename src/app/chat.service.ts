import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
export class Message{
  constructor(public author:string,public content:string){}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation=new Subject<Message[]>();
  messageMap:any=
  {
    "hi":"hello!!",
    "hello":"hi",
    "good morning":"good morning!!",
    "good afternoon":"good afternoon!!",
    "good evening":"good evening!!",
    "good nignt":"good night!!",
    "what is angular":"Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications",
    "what is angular?":"Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications",
    
    "what is typescript":"TypeScript is a strongly typed programming language that builds on JavaScript",
    "what is typescript?":"TypeScript is a strongly typed programming language that builds on JavaScript",
    "latest version of angular":"version 16",
    "latest version of nodejs":"version 19",
    "what is ng":"Node Generate",
    
    "what is node js?":"As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",
   "what is node js":"As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",
"default":  "CAN'T UNDERSTAND , PLEASE TRY AGAIN!!!",
"":"PLEASE TYPE SOMETHING",
  }
  getBotAnswer(msg:any){
    const userMessage=new Message('user',msg);
    this.conversation.next([userMessage]);
    const botMessage=new Message('bot',this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    },1000);

  }
  getBotMessage(question:string)
  {
    let answer=this.messageMap[question];
    return answer || this.messageMap['default'] || this.messageMap[''];
    
  }
}
