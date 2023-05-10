import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { FormPlantillaComponent } from './form-plantilla/form-plantilla.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { ChildrenComponent } from './children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    FormPlantillaComponent,
    FormReactivoComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //para formularios reactivos
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
