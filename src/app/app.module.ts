import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseModule } from './modules/base-module/base.module';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BaseModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
