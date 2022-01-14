import { DirectorserviceService } from './../../services/directorservice.service';
import { Component, OnInit } from '@angular/core';
import { Director } from '../../models/director';

@Component({
  selector: 'app-tabladirectores',
  templateUrl: './tabladirectores.component.html',
  styleUrls: ['./tabladirectores.component.css']
})
export class TabladirectoresComponent implements OnInit {

  public directores:Array<Director>;
  constructor(private directorServicio:DirectorserviceService) { 
    this.directores= new Array;
   this.recibirDirector();
  }

  ngOnInit(): void {
  }
  recibirDirector(){
    this.directorServicio.envioDirector.subscribe(director=> {
      this.directores.push(director);
      console.log("Director recibid",director)
    });
   
  }

}
