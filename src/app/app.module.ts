import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent, SettingsDialog } from './app.component';
import { BigHatComponent } from './big-hat/big-hat.component';

@NgModule({
  declarations: [
    AppComponent,
    BigHatComponent,
    SettingsDialog
  ],
  entryComponents: [
    AppComponent,
    SettingsDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
