import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active: string = 'navBar';

  // function to toggle navBar
  public showNav = () => {
    this.active = 'navBar activeNavbar'
  }
  // function to remove navBar
  public removeNav = () => {
    this.active = 'navBar'
  }
  
  constructor() { }

  ngOnInit(): void {
  }
 
}
