import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    EncabezadoComponent,
    SpinnerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    SpinnerComponent,
    EncabezadoComponent,
    CardComponent
  ]
})
export class ComponentesModule { }
