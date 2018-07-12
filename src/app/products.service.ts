import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductsService {
  products: any;
  allProds: any;
  url = './assets/mini.data.json';
  
  constructor(private http: HttpClient) { 

  }// const


  productsDetails(id) {
    if(id !== undefined) {
      for (let i = 0; i < this.allProds.length; i++) {
        if (this.allProds[i]._id == id) {
          return this.allProds[i];
        }
      }// for
    }// !undefined
    else {
      return true;
    }
    
  }// productDetailed 


  getProducts() {
    this.allProds = [];
    let url = this.url;
    this.http.get(url)
      .subscribe((response) => {
          this.products = response;
          let item = {},
              prop;
          for(prop in this.products) {
            item = this.products[prop];
            this.allProds.push(item);
          }
      });
    // console.log('allProds: ', this.allProds);
    return this.allProds;
      
  }// getProducts

  
  
}// ProductsService class
