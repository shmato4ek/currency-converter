import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base/base.component';
import { ConverterComponent } from './converter/converter.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent,
    BaseComponent,
    ConverterComponent
  ],
  imports: [
    BaseRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers:[
    provideAnimations(),
  ]
})
export class BaseModule { }
