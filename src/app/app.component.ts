import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UpperBarComponent } from "./components/upper-bar/upper-bar.component";
import { ListOfContactsPageComponent } from "./components/list-of-contacts-page/list-of-contacts-page.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UpperBarComponent, ListOfContactsPageComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
