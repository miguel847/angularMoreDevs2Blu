import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upper-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './upper-bar.component.html',
  styleUrl: './upper-bar.component.css'
})
export class UpperBarComponent {
  nomeProjeto = environment.nomeProjeto;
  route = new Router();
  logout() {
    this.route.navigate(['/login']);
  }
}
