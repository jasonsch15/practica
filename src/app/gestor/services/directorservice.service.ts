import { Director } from './../models/director';
import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectorserviceService {

@Output() envioDirector:EventEmitter<Director> = new EventEmitter();
  constructor() { }



}
