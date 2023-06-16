import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon } from './interface/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private limit: string = '1281';

  constructor(private http: HttpClient) { }

  getPokemons ( ): Observable<any>{
    const params = new HttpParams()
      .set('limit', this.limit);
    return this.http.get(`${this.url}/`,{ params });
  }
  getPokemon (query: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/${query}`).pipe(
      map((response: Pokemon) => {
        return {
          ...response,
          id: response.id,
          name: response.name,
          height: response.height,
          weight: response.weight,
          sprites: response.sprites,
          abilities: response.abilities,
          moves: response.moves  
        };
      })
    );
  }
}
