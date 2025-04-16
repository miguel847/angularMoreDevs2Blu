import { Component } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService, LoginRequest} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email : string = '';
  senha : string = '';

  constructor(private router: Router, private authService : AuthService){

  }

  login(form : NgForm) {
    if (form.invalid){
      alert("Preencha todos os campos")
      return;
    }
    this.authService.login({email: this.email, senha: this.senha}).subscribe({
      next: (response) => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        alert('Email ou senha incorretos');
      }
    });
  }
}
