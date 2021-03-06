import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../../models/character';
import {Tools} from '../../utils/tools';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
}
