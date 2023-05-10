import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})

export class ChildrenComponent {
  /*
  Input recibe de componente padre, es decir, está recibiendo title de app.component.html
  */
  @Input() title?: string;

  /*
  Output y Evento que transmitirá al componente padre, es decir, de children.component a app.component
  */
  @Output() titleChange = new EventEmitter<string>();


  cambiarTitulo(){
    this.titleChange.emit(this.title);
  }
}
