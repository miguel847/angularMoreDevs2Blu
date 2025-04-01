import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Output()
  onDeleteButtonEvent = new EventEmitter<number>();
  @Input()
  id : number = -1;
  @Input() 
  name : string = "placeholder";
  @Input() 
  description : string = "placeholder";
  @Input()
  adress : string = "placeholder";

  onDeleteButtonPressed(){
    this.onDeleteButtonEvent.emit(this.id);
  }
}
