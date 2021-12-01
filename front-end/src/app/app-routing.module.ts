import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { AuthGuard } from './core/middleware/AuthGuard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'deslogado',
    loadChildren: () => import('./pages/deslogado/deslogado.module').then(m => m.DeslogadoModule)
  }
];

export const routing = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
