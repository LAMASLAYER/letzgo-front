import { Component, OnInit } from '@angular/core';
import {AbilitiesService} from '../../services/abilities/abilities.service';
import {Ability} from '../../models/ability';
import {CharAbilities} from '../../models/charAbilities';
import {Tools} from '../../utils/tools';
import {Router, RouterModule} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private abilitiesService: AbilitiesService;
  private _abilities: Array<Ability>;
  private _charAbilities: Array<CharAbilities>;

  constructor(abilitiesService: AbilitiesService, private _location: Location) {
    this.abilitiesService = abilitiesService;
  }

  ngOnInit() {
    Tools.CHARACTER = 1;
    this.abilitiesService.getAbilities().subscribe(
      (res: Array<Ability>) => {
        this.abilities = res;
      }
    );
  }


  get abilities(): Array<Ability> {
    return this._abilities;
  }

  set abilities(value: Array<Ability>) {
    this._abilities = value;
  }

  get charAbilities(): Array<CharAbilities> {
    return this._charAbilities;
  }

  set charAbilities(value: Array<CharAbilities>) {
    this._charAbilities = value;
  }

  public back() {
    this._location.back();
  }
}
