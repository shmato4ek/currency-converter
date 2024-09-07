import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base/base.component';
import { ConverterComponent } from './converter/converter.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

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
  ],
  providers:[
  ]
})
export class BaseModule { }
