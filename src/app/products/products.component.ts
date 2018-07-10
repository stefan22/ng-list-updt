import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any;
  ishidden: boolean = true;
  
  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
      this.allProducts = this.productsService.getProducts();
      console.log('allProducts: ', this.allProducts);
  }

  // show(id) {
  //   this.router.navigate(['details', id, 'Fred', {
  //     foo: 'foo2',
  //     me: 'Greg'
  //   }])
  // }

}
