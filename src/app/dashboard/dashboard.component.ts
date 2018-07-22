import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  
  isHomePage = "jumbo hm";
  bookTitle: string = "Internet of Things";
  upp: boolean = false;
  constructor() {}

  ngOnInit() {}
}
