import { Component } from '@angular/core'; // Importa el decorador Component desde '@angular/core'

@Component({
  selector: 'app-root', // Selector del componente, utilizado para incluirlo en la plantilla HTML
  templateUrl: './app.component.html', // Plantilla HTML asociada al componente
  styleUrl: './app.component.css' // Archivo CSS asociado al componente (debería ser styleUrls en lugar de styleUrl)
})
export class AppComponent { // Definición de la clase del componente
  title = 'TallerAngular'; // Propiedad 'title' que se utiliza en la plantilla HTML
}
