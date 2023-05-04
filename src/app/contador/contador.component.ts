import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  nombre:string = 'Rafael Morales';

  persona:Persona = {
    nombre: 'Rafael Morales',
    edad: 34
  }

  numero: number = 1;

  incrementar() {
    this.numero++;
  }
  
  decrementar() {
    this.numero--;
  }
}
