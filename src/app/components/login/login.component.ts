import { Component } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email : string = '';
  senha : string = '';

  constructor(private router: Router){

  }

  login(form : NgForm) {
    if (form.invalid){
      alert("Preencha todos os campos")
      return;
    }

    if(this.email == 'Samuel' && this.senha == '123'){
      return;
    }
    else {
      alert("Email ou senha incorreto");
    }
  }
}
