import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { DecimalPipe } from './pipes/decimal.pipe';



@NgModule({
  declarations: [
    HomePageComponent,
    BusquedaComponent,
    FilterPipe,
    DecimalPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [HomePageComponent]
})
export class PageModule { }
