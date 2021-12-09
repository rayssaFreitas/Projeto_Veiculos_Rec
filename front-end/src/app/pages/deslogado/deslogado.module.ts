import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeslogadoRoutingModule } from './deslogado.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InicialComponent } from './inicial/inicial.component';
import { VendaComponent } from './venda/venda.component';
import { ContatoComponent } from './contato/contato.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    InicialComponent,
    VendaComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    DeslogadoRoutingModule,
    FlexLayoutModule,
    //AngularMaterial
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DeslogadoModule { }
