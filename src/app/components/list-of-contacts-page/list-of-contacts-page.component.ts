import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-of-contacts-page',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './list-of-contacts-page.component.html',
  styleUrl: './list-of-contacts-page.component.css'
})
export class ListOfContactsPageComponent {

  dados : any
  constructor(private http: HttpClient){}
  ngOnInit() : void {
    this.obterPrevisoes();
  }

  obterPrevisoes() : void {
    let url = "http://localhost:5106/WeatherForecast";
    this.http.get(url).subscribe({
      next: (response) => {
        this.dados = response;
        console.log(this.dados);
      },
      error: (error) => {
        alert("deu pau");
      }
    })
  }

  addContact() : void {
    let c1 = new contact("placeholder", "placeholder", "placeholder");
    this.contacts.push(c1);
  }
  deleteContact(id : number) : void {
    console.log(this.contacts.splice(id, 1));
  }

  contacts : contact[] = [new contact("Bill Gates", "criador do windows", "Desconhecido"), new contact("Julian Galop", "Criador do x-com", "EUA"), new contact("Marcos", "O mais importante de todos", "Reino das Bolinhas")];
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
