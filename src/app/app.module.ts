import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPlayComponent } from './app-play/app-play.component';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';
import { HighScoreTableComponent } from './high-score-table/high-score-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPlayComponent,
    AppWelcomeComponent,
    HighScoreTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
