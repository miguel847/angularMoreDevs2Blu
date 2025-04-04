import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  @Input()
  id! : number;

  @Input()
  description! : string;

  @Input()
  manager! : string;

  @Input()
  team! : string;
}
