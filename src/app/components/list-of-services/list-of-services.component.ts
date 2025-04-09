import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceComponent } from '../service/service.component';

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

  constructor(private http: HttpClient){}
  ngOnInit() : void {
    this.getServices();
  }

  getServices() {
    let url = "http://localhost:5106/api/Services";
    this.http.get(url).subscribe({
      next: (response) => {
        this.servicesApi = response;
        for (let s of this.servicesApi){
          this.services.push(new service(s.id, s.description, s.manager, s.team));
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  addService() : void {
    let s1 = new service(-1,"placeholder", "placeholder", "placeholder");
    this.services.push(s1);
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
