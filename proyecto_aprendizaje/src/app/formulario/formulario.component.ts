import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  @ViewChild('name') inputName;
  openAlert: boolean = false;

  mostrar_en_consola(name:string){
    console.log(name);
    this.openAlert = true;
  }

  limpiaNombre(){
    this.inputName.nativeElement.value = ' ';
  }

  quitaAlerta(){
    this.openAlert = false;
    this.inputName.nativeElement.value = ' ';
  }
}
