import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DirectorformComponent } from './forms/directorform/directorform.component';
import { FormsModule } from '@angular/forms';
import { PeliculaformComponent } from './forms/peliculaform/peliculaform.component';
import { TabladirectoresComponent } from './components/tabladirectores/tabladirectores.component';



@NgModule({
  declarations: [
    HomeComponent,
    DirectorformComponent,
    PeliculaformComponent,
    TabladirectoresComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    DirectorformComponent
  ]
})
export class GestorModule { }
