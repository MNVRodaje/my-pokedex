import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-pokedex';

  constructor(private pokemonService: PokemonService) { 

  }

  ngOnInit() {
  }

  public pokemon: any = null;

  getPokemon(): void {
    this.pokemonService.getPokemon().subscribe(pokemon => this.pokemon = pokemon);
    
    console.log(this.pokemon);
  }

}

