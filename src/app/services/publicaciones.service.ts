import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importación del módulo HttpClient para hacer solicitudes HTTP
import { Observable } from 'rxjs'; // Importación de Observable de la biblioteca RxJS
import { Post } from '../models/post.model'; // Importación del modelo Post

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // URL de la API de donde obtendremos las publicaciones

  constructor(private http: HttpClient) { } // Inyección del servicio HttpClient en el constructor

  // Método para obtener las publicaciones desde la API
  getPublicaciones(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl); // Se realiza una solicitud GET a la URL de la API y se espera una matriz de objetos Post
  }
}
