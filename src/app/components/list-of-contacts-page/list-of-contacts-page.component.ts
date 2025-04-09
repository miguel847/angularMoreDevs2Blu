import { Component } from '@angular/core';
import { ContactComponent} from "../contact/contact.component";
import { ServiceComponent } from '../service/service.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-of-contacts-page',
  standalone: true,
  imports: [ContactComponent, ServiceComponent],
  templateUrl: './list-of-contacts-page.component.html',
  styleUrl: './list-of-contacts-page.component.css'
})


export class ListOfContactsPageComponent {

  dados : any;
  contatosApi : any;
  servicesApi : any;

  constructor(private http: HttpClient){}
  ngOnInit() : void {
    this.obterContatos();
    // this.getServices();
  }

  obterContatos() {
    let url = "http://localhost:5106/api/Contatos";
    this.http.get(url).subscribe({
      next: (response) => {
        console.log(response);
        this.contatosApi = response;
        for (let c of this.contatosApi){
          this.contacts.push(new contact(c.nome, c.descricao, c.endereco));
        }
        console.log(this.contacts);
      },
      error: (error) => {
        alert("Ocorre um erro na api => api/Contatos");
        console.log(error);
      },
    });
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

  addContact() : void {
    let c1 = new contact("placeholder", "placeholder", "placeholder");
    this.contacts.push(c1);
  }
  deleteContact(id : number) : void {
    console.log(this.contacts.splice(id, 1));
  }

  contacts : contact[] = [];
  services : service[] = [];
}
class contact {
  constructor(n : string, d : string, a : string){
    this.name = n;
    this.description = d;
    this.adress = a;
  }
  name : string = "Seu George";
  description : string = "Um cara legal";
  adress! : string;
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