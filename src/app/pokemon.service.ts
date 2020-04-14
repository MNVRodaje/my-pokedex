import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private pokemonList_URL: string = 'https://pokeapi.co/api/v2/pokemon';

  private imageUrl: string = 'https://pokeres.bastionbot.org/images/pokemon';

  private currentPokemon: any = null;

  constructor(

    private http: HttpClient
    
    ) { }

  setURL(value: string) {
    this.pokemonList_URL = value;
  }
  getPokemon (): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(this.pokemonList_URL);
  }
  getNext (next: string) {
    return this.pokemonList_URL = next;
  }
  getPrevious (previous: string) {
    if(this.pokemonList_URL = " "){
      
    }
    return this.pokemonList_URL = previous;
  }

  getPokemonDetails(pokemonDetail_URL) {
    return this.http.get(pokemonDetail_URL);
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
    console.log(this.imageUrl + "/" + id + ".png");
    return this.http.get(this.imageUrl + "/" + id + ".png", { responseType: 'blob' });
  }
}
