import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: any[], nombre: string) {
    if (!pokemons || !nombre) {
      return pokemons;
    }
    return pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(nombre.toLowerCase());
    });
  }

}
