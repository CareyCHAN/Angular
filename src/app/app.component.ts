import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  color = 'primary';
  flag = false;
  title = 'Myofficialwebsite';
  routerlink = location.pathname;
  headerb: string;
  headerp: string;
  handletop: string;
  constructor(private router: Router) {}

  ngOnInit() {
    switch (this.routerlink) {
      case '/': {
        this.headerb = 'Welcome To Délicieux';
        this.headerp = 'Start exploring cuisine!';
        break;
      }
      case '/explore': {
        this.headerb = 'Explore your own cuisine!';
        this.headerp = 'You will know that food is so beautiful';
        break;
      }
      case '/share': {
        this.headerb = 'See who shared the new post again';
        this.headerp = 'You can also share your own post!';
        break;
      }
      case '/video': {
        this.headerb = 'Lets watch video';
        this.headerp = 'You will know a lot!';
        break;
      }
    }
  }
  switch1() {
    this.flag = !this.flag;
  }
}
