import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  constructor() {
    //inicializacion de la variable usuario
this.usuario = {}
  }

  ngOnInit(): void {}

  verificarUsuario() {
    if (this.usuario.email === "correo@correo.com" && this.usuario.password === "123456" ) {
alert("Login correcto");
    }
  }
}
