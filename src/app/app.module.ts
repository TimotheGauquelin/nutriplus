import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnboardingComponent } from './page/unboarding/unboarding.component';
import { HistoryComponent } from './page/history/history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { InscriptionvalideComponent } from './page/inscriptionvalide/inscriptionvalide.component';

@NgModule({
  declarations: [
    AppComponent,
    UnboardingComponent,
    HistoryComponent,
    InscriptionvalideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
