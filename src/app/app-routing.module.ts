
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionvalideComponent } from './page/inscriptionvalide/inscriptionvalide.component';
import { UnboardingComponent } from './page/unboarding/unboarding.component';
import { HistoryComponent } from './page/history/history.component';
import { ProductidentificationComponent } from './page/productidentification/productidentification.component';

const routes: Routes = [
  {path: 'unboarding', component: UnboardingComponent},
  {path: 'validationOfRegistration', component: InscriptionvalideComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'productidentification', component: ProductidentificationComponent},
  {path: 'productidentification/:code', component: ProductidentificationComponent},
  {path: '**', component: UnboardingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


