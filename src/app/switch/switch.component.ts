import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})

export class SwitchComponent {
  // el "?" significa que no se inicializa la variable.
  dia?:string;
}
