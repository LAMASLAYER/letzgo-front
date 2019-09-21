import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tools {
  static SERVER = 'http://localhost:10000';
  static CHARACTER: number;
  static PLAYER: number;
}
