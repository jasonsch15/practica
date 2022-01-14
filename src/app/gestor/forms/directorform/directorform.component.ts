import { DirectorserviceService } from './../../services/directorservice.service';
import { Component, OnInit } from '@angular/core';
import { Director } from '../../models/director';

@Component({
  selector: 'app-directorform',
  templateUrl: './directorform.component.html',
  styleUrls: ['./directorform.component.css']
})
export class DirectorformComponent implements OnInit {

  director:Director;
  generosFavoritos:Array<string>;
  constructor(private directorService:DirectorserviceService) {
    this.director = {
      cedula:0,
      nombre: "",
      apellido: "",
      generoFavorito: "",
      fechaNacimiento: new Date()
    }

    this.generosFavoritos= ["Accion", "Comedia", "Drama", "Terror", "Suspenso", "Ciencia Ficcion"];

   }


  ngOnInit(): void {
  }

  registrarDirector(){
console.log(this.director);

this.directorService.envioDirector.emit(this.director);
this.director ={
  cedula:0,
  nombre: "",
  apellido: "",
  generoFavorito: "",
  fechaNacimiento: new Date()
}

  }

}
