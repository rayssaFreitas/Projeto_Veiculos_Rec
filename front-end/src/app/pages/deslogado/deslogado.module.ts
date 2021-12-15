import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeslogadoRoutingModule } from './deslogado.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InicialComponent } from './inicial/inicial.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { InicialContatoComponent } from './inicial-contato/inicial-contato.component';
import { InicialVendaComponent } from './inicial-venda/inicial-venda.component';
import { LoginComponent } from './login/login.component';
import { NovaSenhaComponent } from './nova-senha/nova-senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    InicialComponent,
    InicialContatoComponent,
    InicialVendaComponent,
    LoginComponent,
    NovaSenhaComponent,
    CadastroComponent
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
