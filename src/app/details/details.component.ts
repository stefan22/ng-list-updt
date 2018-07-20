import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  bookObj: any = {
    id: 0,
    title: '',
    isbn: '',
    pageCount: '',
    thumbnailUrl: '',
    publishedDate: '',
    shortDescription: '',
    longDescription: '',
    status: '',
    authors: '',
    categories: '',
    image: ''
  };

  constructor(
    private routes: ActivatedRoute,
    private productsService: ProductsService
  ) {} // constructor

  ngOnInit() {
    this.routes.params.subscribe(parameters => {
      const id = parameters['id'];
      if (id !== undefined) {
        this.bookObj = this.productsService.productsDetails(id);
        console.log(this.bookObj);
      }
    });
  }

  onAddToCart() {
    alert('please don\'t do that again');
  }
}
