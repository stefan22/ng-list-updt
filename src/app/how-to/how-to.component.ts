import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css']
})
export class HowToComponent implements OnInit {
  howto: string;
  
  constructor() { }

  ngOnInit() {
    this.howto = 'how-to page';
  }

}
