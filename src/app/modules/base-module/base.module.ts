import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base/base.component';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BaseComponent,
    ConverterComponent
  ],
  imports: [
    BaseRoutingModule,
  ]
})
export class BaseModule { }
