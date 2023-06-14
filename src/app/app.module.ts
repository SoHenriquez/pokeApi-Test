import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageModule } from './page/page.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
