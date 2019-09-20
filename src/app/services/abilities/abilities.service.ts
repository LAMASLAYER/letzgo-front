import { Injectable } from '@angular/core';
import {Tools} from '../../utils/tools';
import {Observable} from 'rxjs';
import {Ability} from '../../models/ability';
import {HttpClient} from '@angular/common/http';
import {CharAbilities} from '../../models/charAbilities';


@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getAbilities(): Observable<Array<Ability>> {
    return this.http.get<Array<Ability>>(Tools.SERVER + '/abilities')
      .pipe(res => {
        return res;
    });
  }
}
