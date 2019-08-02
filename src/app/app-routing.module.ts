import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionvalideComponent } from './page/inscriptionvalide/inscriptionvalide.component';
import { UnboardingComponent } from './page/unboarding/unboarding.component';

const routes: Routes = [
  {path: 'unboarding', component: UnboardingComponent},
  {path: 'validationOfRegistration', component: InscriptionvalideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


