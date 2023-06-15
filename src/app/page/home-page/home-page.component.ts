import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

declare const bootstrap: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  pokemons: any[] = [];
  pokemonData: any;
  page   !: number;
  pageSize: number = 10;
  
  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.getPokemons().subscribe(
      (data:any) => {
        this.pokemons = data.results;
        console.log(this.pokemons);
      }
    )
    
  }
  openModal( name: string ) {
    this.buscar(name);
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      centered: true, 
    });
    modal.show();
  }
  buscar ( name: string ) {
    
    this.pageService.getPokemon( name ).subscribe((data: any) => {
      this.pokemonData = data;
    });
 }

}
