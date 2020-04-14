import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon: any = null;

  public pokemonDetails: any = null;

  constructor(private pokemonService: PokemonService) { 

  }

  ngOnInit() {
    this.getSelectedPokemon();
    this.getPokemonDetails();
  }

  getSelectedPokemon() {
   this.pokemon = this.pokemonService.getSelectedPokemon();
  }

  getPokemonDetails() {
    if(this.pokemon != null) {
      this.pokemonService.getPokemonDetails(this.pokemon.url)
      .subscribe(details => {
        this.pokemonDetails = details
        this.getImageFromService();
      });
    }
  }

  imageToShow: any;
  isImageLoading: any;

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
    }, false);

    if (image) {
        reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    if(this.pokemonDetails != null) {
      this.pokemonService.getImage(this.pokemonDetails.id).subscribe(data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
    }
  }
}
