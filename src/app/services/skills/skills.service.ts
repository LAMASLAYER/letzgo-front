import { Injectable } from '@angular/core';
import {Skills} from '../../models/skills';
import {HttpClient} from '@angular/common/http';
import {Tools} from '../../utils/tools';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
}
