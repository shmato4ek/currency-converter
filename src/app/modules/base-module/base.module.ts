import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base/base.component';
import { ConverterComponent } from './converter/converter.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ValidationHelper } from '../../helpers/validation-helper';

@NgModule({
  declarations: [
    HeaderComponent,
    BaseComponent,
    ConverterComponent
  ],
  imports: [
    BaseRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers:[
    ValidationHelper
  ]
})
export class BaseModule { }
