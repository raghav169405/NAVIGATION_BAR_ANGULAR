 import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  menuItem: any []=[
    {item : 'Home', description:"homepage"},
    {item : 'News', description:'newsfeed'},
    {item : 'AboutUs', description:'Contact details'}
  ];

}

