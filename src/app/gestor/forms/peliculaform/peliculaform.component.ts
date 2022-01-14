import { Pelicula } from './../../models/pelicula';
import { Component, OnInit } from '@angular/core';
import { DirectorserviceService } from '../../services/directorservice.service';
import { Director } from '../../models/director';

@Component({
  selector: 'app-peliculaform',
  templateUrl: './peliculaform.component.html',
  styleUrls: ['./peliculaform.component.css'],
})
export class PeliculaformComponent implements OnInit {
  public pelicula: Pelicula;
  public directores:Array<Director>;
  constructor(private directorService: DirectorserviceService) {
    //Inicializamos la pelicula
    this.pelicula = {
      nombre: '',
      descripcion: '',
      genero: '',
      anio: 0,
    };
    this.directores = new Array;
    this.recibirDirector();
  }

  ngOnInit(): void {}

  recibirDirector() {
    this.directorService.envioDirector.subscribe((director) =>{
      this.directores.push(director) }
    );
  }

  registrarPelicula() {
    console.log(this.pelicula);
  }
}
