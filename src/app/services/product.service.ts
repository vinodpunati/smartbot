import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

  //private apiKey: string = "9a9ba8a6-ba9a-4083-9582-9ea5f8c4a0f8";
  private apiKey: string = "c7a363d8-874d-49a7-8744-a2f228e4e705";
  private url: string = "https://walmartlabs-test.appspot.com/_ah/api/walmart/v1/walmartproducts/"+ this.apiKey+"/1/10";
  constructor(private http: Http) { }

  getProducts(){
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
    
  }

  private handleError(error: Response){
    console.log(error);
    if(error.status === 400){
      return Observable.throw(console.log("Bad Input Error"));
    }
    if(error.status === 404){
      return Observable.throw(console.log("Page not found"));
    }
    return Observable.throw(error);
  }
}
