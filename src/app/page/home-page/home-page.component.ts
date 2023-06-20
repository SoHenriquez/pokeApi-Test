import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { Pokemon } from '../interface/pokemon.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pokemons   : any[] = [];
  pokemonData: any;
  page      !: number;
  pageSize   : number = 5;
  
  nombre     :any = '';
  constructor(private pageService: PageService) {
   
   }

   onBusquedaRealizada(nombre: string) {
    this.nombre = nombre;
  }


  ngOnInit(): void {
    this.pageService.getPokemons().subscribe(
      (data:any) => {
        this.pokemons = data.results;
      }
    )
    
  }
  buscar ( name: string ) {
    
    this.pageService.getPokemon( name ).subscribe((data: Pokemon) => {
      this.pokemonData = data;
    });
 }
 
}
