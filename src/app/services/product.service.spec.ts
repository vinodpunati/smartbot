import {TestBed, fakeAsync} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import { ProductService } from './product.service';
import { HttpModule, Http,BaseRequestOptions,Response,ResponseOptions,  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

describe('ProductService: getProducts', () => {

  let productService: ProductService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ProductService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http, 
          useFactory: (backend, options) => new Http(backend, options), 
          deps: [MockBackend, BaseRequestOptions] 
        }
      ]
    });

    backend = TestBed.get(MockBackend); 

    productService = TestBed.get(ProductService); 
  });

  it('should return products', fakeAsync(() => {
    let response = {      
      "products": [
        {
            "productId": "0e56dd23-29a0-4d0e-882a-6f7d851d7ec4",
            "productName": "Knightsbridge Reclaimed Wood 58 Inch TV Stand",
            "shortDescription": "<ul style=\"font-size: 13px; line-height: 20.7999992370605px;\">\n\t<li>HFSC approved Pine framework</li>\n\t<li>Natural reclaimed teak planks</li>\n\t<li>Made from solid wood boards, no veneers or particle boards used</li>\n</ul>\n",
            "longDescription": "<p>The Knightsbridge 58&nbsp;Inch TV&nbsp;Stand is a solid wood media center with rustic appeal. Designed to accommodate most wide screen TVs, this console has a solid wood center shelf for open access to electronic components. Four generous storage drawers keep movie collections and gaming accessories in one convenient place. The unfinished salvaged teak planks have all the original marks and imperfections, giving this TV console its unique weathered appearance that will only improve with daily use and age.</p>\n",
            "price": "$1,199.00",
            "productImage": "https://walmartlabs-test.appspot.com/images/image8.jpeg",
            "reviewRating": 0,
            "reviewCount": 0,
            "inStock": true
        }]
    };

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    // Perform a request and make sure we get the response we expect
   
    productService.getProducts().subscribe((response)=>{ 
      expect(response.products.length).toBe(1);
      expect(response.products[0].productName).toEqual("Knightsbridge Reclaimed Wood 58 Inch TV Stand");
      expect(response.products[0].productImage).toEqual("https://walmartlabs-test.appspot.com/images/image8.jpeg");
      expect(response.products[0].price).toEqual("$1,199.00");
    });    

  }));
});