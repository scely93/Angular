import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service'; // Importación del servicio de publicaciones
import { Post } from '../../models/post.model'; // Importación del modelo de publicación

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  publicaciones: Post[] = []; // Arreglo para almacenar las publicaciones

  constructor(private publicacionesService: PublicacionesService) { } // Inyección del servicio de publicaciones en el constructor

  ngOnInit(): void {
    // Método que se ejecuta al iniciar el componente
    this.publicacionesService.getPublicaciones().subscribe(data => {
      // Se llama al método getPublicaciones del servicio de publicaciones para obtener los datos
      this.publicaciones = data; // Se asignan los datos obtenidos al arreglo de publicaciones
      console.log(this.publicaciones); // Imprime los datos en la consola para propósitos de depuración
    });
  }
}
