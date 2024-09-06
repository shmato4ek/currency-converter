import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseModule } from './modules/base-module/base.module';
import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BaseModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
