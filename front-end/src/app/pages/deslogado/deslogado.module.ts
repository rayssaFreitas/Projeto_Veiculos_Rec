import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeslogadoRoutingModule } from './deslogado.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InitialComponent } from './initial/initial.component';



@NgModule({
  declarations: [
    InitialComponent
  ],
  imports: [
    CommonModule,
    DeslogadoRoutingModule,
    FlexLayoutModule
  ]
})
export class DeslogadoModule { }
