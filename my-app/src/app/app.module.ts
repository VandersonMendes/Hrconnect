import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './service/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from './service/theme.service';
import { AdvanceLoginComponent } from './component/login/advance-login/advance-login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdvanceLoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginComponent,
    BrowserAnimationsModule,

  ],
  providers: [
  ThemeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
