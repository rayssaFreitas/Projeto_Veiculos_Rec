import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeslogadoRoutingModule } from './deslogado.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InicialComponent } from './inicial/inicial.component';



@NgModule({
  declarations: [
    InicialComponent
  ],
  imports: [
    CommonModule,
    DeslogadoRoutingModule,
    FlexLayoutModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DeslogadoModule { }
