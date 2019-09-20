import {Ability} from './ability';
import {Classes} from './classes';
import {Feats} from './feats';
import {Gear} from './gear';
import {Skills} from './skills';
import {Spells} from './spells';
import {Wealth} from './wealth';
import {RaceTraits} from './raceTraits';

export class Character {
  charId: number;
  abilities: Array<Ability>;
  age: number;
  alignment: string;
  campaignCredentials: number;
  campaignId: number;
  classes: Array<Classes>;
  deity: string;
  feats: Array<Feats>;
  gear: Array<Gear>;
  gender: string;
  height: number;
  heightUnit: string;
  level: number;
  name: string;
  playerName: string;
  race: string;
  raceTraits: Array<RaceTraits>;
  skills: Array<Skills>;
  spelles: Array<Spells>;
  wealth: Array<Wealth>;
  weight: number;
  weightUnit: string;
}
