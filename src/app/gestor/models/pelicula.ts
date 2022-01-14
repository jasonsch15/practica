import { Director } from './director';

export interface Pelicula {
    nombre: string;
    descripcion: string;
    genero: string;
    anio: number;
    director?:Director;
}
