import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any = [];

  constructor(private pokemonService: PokemonService) 
  { 

  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemon()
      .subscribe(pokemons => this.pokemons = pokemons);
      
      console.log(this.pokemons);
  }

  onNext():void{
    this.pokemonService.getNext(this.pokemons.next);
    this.ngOnInit();
  }
  onPrevious():void{
    this.pokemonService.getPrevious(this.pokemons.previous);
    this.ngOnInit();
  }

  setCurrentPokemon(pokemon) {
    this.pokemonService.setSelectedPokemon(pokemon);
  }
}
