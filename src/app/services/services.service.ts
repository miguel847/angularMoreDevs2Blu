import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ServiceComponent } from '../components/service/service.component';

export interface ServiceRequest {
  id: number;
  description : string;
  manager : string;
  team : string;
}

export interface ServiceResponse {
  id : number;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  private apiUrl = `${environment.apiUrl}/Services`;

  constructor(private http : HttpClient) { }

  getServices() : Observable<ServiceComponent[]>{
    return this.http.get<ServiceComponent[]>(this.apiUrl);
  }
}
