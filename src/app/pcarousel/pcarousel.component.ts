import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pcarousel',
  templateUrl: './pcarousel.component.html',
  styleUrls: ['./pcarousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PcarouselComponent implements OnInit {
  products: any[];
  isError: boolean = false;
  errorMessage: string = "";

  constructor(private productService: ProductService){}


  ngOnInit() {
    this.getProductDetails();
  }

  //to retrieve product details from the service
  private getProductDetails(){
    this.productService.getProducts()
    .subscribe(response => {
      if(response && response.products){
        this.products = response.products;
      }
      //when server is not available getting error in the response object
      else if(response && response.status === 404){
        this.isError = true;
        this.errorMessage = response.error + " Please try after sometime.";
      }
      else{
        this.isError = true;
        this.errorMessage = "Unexpexted error occurred. Please try after sometime.";
      }
    });    
  }
}
