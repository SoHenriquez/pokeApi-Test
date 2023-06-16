import { Component, EventEmitter, Output } from '@angular/core';
import { PageService } from '../page.service';

export interface BusquedaData {
  nombre: string;
}


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements BusquedaData {

  @Output() buscar: EventEmitter<string> = new EventEmitter<string>();

  nombre = '';

  emitirBusqueda() {
    this.buscar.emit(this.nombre);
  }
  constructor( private pageService: PageService ) { }
  
  // buscar ( ) {
    
  //    this.pageService.getPokemon( this.nombre );
  // }

} 
