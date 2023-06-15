import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    HomePageComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [HomePageComponent]
})
export class PageModule { }
