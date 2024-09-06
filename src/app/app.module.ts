import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseModule } from './modules/base-module/base.module';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BaseModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
