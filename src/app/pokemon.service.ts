import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private _URL: string = 'https://pokeapi.co/api/v2/pokemon';

  private imageUrl: string = 'https://pokeres.bastionbot.org/images/pokemon';

  private currentPokemon: any = null;

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

  getPokemonDetails(detailUrl) {
    return this.http.get(detailUrl);
  }

  setSelectedPokemon(pokemonVar: any) {
    this.currentPokemon = pokemonVar;
    console.log("service");
    console.log(this.currentPokemon);
  }

  getSelectedPokemon(): Observable<IPokemon>{
    return this.currentPokemon;
  }

  getImage(id: string): Observable<Blob> {

    console.log("eto na: ");
    console.log(this.imageUrl + "/" + id + ".png");
    return this.http.get(this.imageUrl + "/" + id + ".png", { responseType: 'blob' });
  }
}
