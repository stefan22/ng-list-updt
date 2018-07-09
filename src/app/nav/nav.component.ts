import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  url: boolean = false;
  tar: string;
  color: string = '#9d9d9d';

  ngOnInit() {
  }

  

  onClickNavItem(e, nav) {
    // removes active on click
    this.tar = e.target.textContent.trim();
    if (this.tar !== 'Home') {
      this.url = false;
    } else {
      this.url = true;
    }

  }

  onClickBrand(e) {
    // toggles color
    var tar = e.target.textContent.trim();
    if (tar == 'Ng6') {
      if (this.color == '#9d9d9d') {
        this.color = 'red';
      } else {
        this.color = '#9d9d9d';
      }
    }
  }
} // NavComponent class
