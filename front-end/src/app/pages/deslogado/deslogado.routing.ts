import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { InicialComponent } from "./inicial/inicial.component";
import { LoginComponent } from "./login/login.component";
import { NovaSenhaComponent } from "./nova-senha/nova-senha.component";

const routes: Routes = [
    {
        path: 'inicial', component: InicialComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'nova-senha', component: NovaSenhaComponent
    },
    {
        path: 'cadastro', component: CadastroComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DeslogadoRoutingModule {
}