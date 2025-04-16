import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface LoginRequest {
  email: string;
  senha: string;
}
export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;

  userName = '';

  constructor(private http: HttpClient) {}

  login(dados : LoginRequest) : Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.apiUrl, dados).pipe(
      tap((response) => {
        this.userName = dados.email;
        localStorage.setItem('token', response.token);
      })
    )
  }

  logout() {
    this.userName = '';
    localStorage.removeItem('token');
  }

}
