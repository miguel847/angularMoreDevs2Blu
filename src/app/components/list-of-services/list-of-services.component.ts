import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceComponent } from '../service/service.component';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-services',
  standalone: true,
  imports: [ServiceComponent],
  templateUrl: './list-of-services.component.html',
  styleUrl: './list-of-services.component.css'
})
export class ListOfServicesComponent {
  services : ServiceComponent[] = [];
  servicesApi : any;

  constructor(private http: HttpClient, private serviceService : ServicesService, private router : Router){}
  ngOnInit() : void {
    this.getServices();
  }

  getServices() {
    this.serviceService.getServices().subscribe({
      next: (response) => {
        console.log(response)
        this.services = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  addService() : void {
    this.router.navigate(['/register-service']);
  }
  deleteService(id : number) : void {
    console.log(this.services.splice(id, 1));
  }
}
class service {
  constructor(i : number, d : string, m : string, t : string){
    this.id = i;
    this.description = d;
    this.manager = m;
    this.team = t;
  }
  id! : number;
  description! : string;
  manager! : string;
  team! : string;
}
