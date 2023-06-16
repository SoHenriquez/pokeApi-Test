import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @Output() buscar: EventEmitter<string> = new EventEmitter<string>();

  nombre = '';

  emitirBusqueda() {
    this.buscar.emit(this.nombre);
  }
  constructor() { }
  


} 
