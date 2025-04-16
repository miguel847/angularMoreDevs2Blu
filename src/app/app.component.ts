import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { UpperBarComponent } from "./components/upper-bar/upper-bar.component";
import { ListOfContactsPageComponent } from "./components/list-of-contacts-page/list-of-contacts-page.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UpperBarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router : Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        if(event.url === '/login' || event.url === '/'){
          this.showNavBar = false;
        }
        else {
          this.showNavBar = true;
        }
      }
    })
  }

  showNavBar = true;
}
