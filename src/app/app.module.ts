import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnboardingComponent } from './page/unboarding/unboarding.component';
import { HistoryComponent } from './page/history/history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionvalideComponent } from './page/inscriptionvalide/inscriptionvalide.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BarreblancheComponent } from './shared/barreblanche/barreblanche.component';
import { FlecheretourComponent } from './shared/flecheretour/flecheretour.component';
import { BlockforhistoryComponent } from './shared/blockforhistory/blockforhistory.component';
import { ProductidentificationComponent } from './page/productidentification/productidentification.component';
// tslint:disable-next-line: max-line-length
import { BarreblancheforproductidentificationComponent } from './shared/barreblancheforproductidentification/barreblancheforproductidentification.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    UnboardingComponent,
    HistoryComponent,
    InscriptionvalideComponent,
    BarreblancheComponent,
    FlecheretourComponent,
    BlockforhistoryComponent,
    ProductidentificationComponent,
    BarreblancheforproductidentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
