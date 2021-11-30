import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InitialComponent } from "./initial/initial.component";

const routes: Routes = [
    {
        path: 'inicio', component: InitialComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DeslogadoRoutingModule {
}