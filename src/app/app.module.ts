import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es'; //
import { registerLocaleData } from '@angular/common'; //
registerLocaleData(localeEs); //
import {CapitalisedPipe} from './pipes/capitalised.pipe';
import { SafetyDomPipe } from './pipes/safety-dom.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalisedPipe,
    SafetyDomPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
