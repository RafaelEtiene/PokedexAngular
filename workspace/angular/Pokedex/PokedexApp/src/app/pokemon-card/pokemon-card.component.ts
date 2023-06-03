import { Component, Input } from '@angular/core';
import { Pokemon, getPokemonImage, getPokemonNumber } from 'src/model/IPokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  pokemon: Pokemon;
  getPokemonImage = getPokemonImage;
  getPokemonNumber = getPokemonNumber;
}
