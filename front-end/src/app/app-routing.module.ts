import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: '', pathMatch: 'full',
        redirectTo: '/home'
      // },
      // {
      //   path: '',
      //   // loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingModule)
      //    loadChildren: './pages/onboarding/onboarding.module#OnboardingModule',
      // },
      // // { path: 'login', component: LoginComponent },
      // {
      //   path: 'home', component: HomeComponent,
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'negociacao',
      //   loadChildren: () => import('./pages/negociacao/negociacao.module').then(m => m.NegociacaoModule)
      }
    ]
  }
];

export const routing = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
