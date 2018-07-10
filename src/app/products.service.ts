import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ProductsService {
  products: any;
  allProds: any;
  url = './assets/data.json';
  
  

  constructor(private http: HttpClient) { 

  }


  productDetailed(id: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
      }
    }
  }


  getProducts() {
    this.allProds = [];
    let url = this.url;
    this.http.get(url)
      .subscribe((response) => {
          this.products = response;
          // console.log(typeof this.products);
          let item = {},
              prop;
          for(prop in this.products) {
            item = this.products[prop];
            // console.log(item);
            this.allProds.push(item);
          }
      
      });
      console.log('allProds: ', this.allProds);
      return this.allProds;
      
  }

  






  
}// ProductsService class
