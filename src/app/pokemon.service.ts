import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private _URL: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(

    private http: HttpClient
    
    ) { }

  setURL(value: string) {
    this._URL = value;
  }
  getPokemon (): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(this._URL);
  }
  getNext (next: string) {
    return this._URL = next;
  }
  getPrevious (previous: string) {
    if(this._URL = " "){
      
    }
    return this._URL = previous;
  }
  
}
