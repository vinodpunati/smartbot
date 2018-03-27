import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = "SmartBot - Virtual Product Assistant";
  messages: any;
  constructor(){

  }
  ngOnInit(){
    this.getBotMessage();
  }

  getBotMessage(){
    setTimeout(()=>{    
      this.messages = [{
        "text": "Hello! Welcome to product help center. Please enter product name",
        "self" : false,
        "displayCarousel": false
      }];
 },3000);
    
  }
 
  userMessage = "";

  reply(){
    console.log(this.userMessage);
    this.messages.push({
      "text" : this.userMessage,
      "self": true,
      "displayCarousel": false
    })
    this.userMessage = "";
    
    this.messages.push({
      "text" : "Here are the products you are looking for:",
      "self": false,
      "displayCarousel": true
    })      
    
  }

}
