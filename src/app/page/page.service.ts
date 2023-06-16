import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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
  getPokemon (query: string): Observable<any> {
    return this.http.get(`${this.url}/${query}`).pipe(
      map((response: any) => {
        return {
          name: response.name,
          height: response.height,
          weight: response.weight,
          sprites: response.sprites
        };
      })
    );
  }
}
