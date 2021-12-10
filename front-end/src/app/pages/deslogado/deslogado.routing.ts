import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicialComponent } from "./inicial/inicial.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: 'inicial', component: InicialComponent
    },
    {
        path: 'login', component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DeslogadoRoutingModule {
}