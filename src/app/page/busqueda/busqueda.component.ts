import { Component } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  nombre = '';
  constructor( private pageService: PageService ) { }
  
  buscar ( ) {
    
     this.pageService.getPokemon( this.nombre );
  }

} 
