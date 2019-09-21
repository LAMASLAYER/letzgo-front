import { Component, OnInit } from '@angular/core';
import {Character} from '../../models/character';
import {CharactersService} from '../../services/characters/characters.service';
import {Tools} from '../../utils/tools';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private charactersService: CharactersService;
  private _characters: Array<Character>;

  constructor(charactersService: CharactersService) {
    this.charactersService = charactersService;
  }

  ngOnInit() {
    Tools.PLAYER = 1;
    this.charactersService.getCharactersByPlayerId()
      .subscribe(
      (res: Array<Character>) => {
        this.characters = res;
      }
    );
  }

  get characters(): Array<Character> {
    return this._characters;
  }

  set characters(value: Array<Character>) {
    this._characters = value;
  }

}
