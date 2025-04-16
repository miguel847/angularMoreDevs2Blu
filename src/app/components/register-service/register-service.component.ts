import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceRequest, ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-register-service',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-service.component.html',
  styleUrl: './register-service.component.css'
})
export class RegisterServiceComponent {
  serviceRequest : ServiceRequest = {
    id: 0,
    description: '',
    manager: '',
    team: '',
  }

  constructor(private router : Router, private servicesService : ServicesService){}

  back(){
    this.router.navigate(['/servicos'])
  }
  save(form : any){
    this.router.navigate(['/servicos']);
  }
}
