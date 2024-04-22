import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule
import { AppComponent } from './app.component'; // Importa el componente AppComponent
import { InicioComponent } from './paginas/inicio/inicio.component'; // Importa el componente InicioComponent
import { NosotrosComponent } from './paginas/nosotros/nosotros.component'; // Importa el componente NosotrosComponent
import { ContactenosComponent } from './paginas/contactenos/contactenos.component'; // Importa el componente ContactenosComponent
import { PublicacionesComponent } from './paginas/publicaciones/publicaciones.component'; // Importa el componente PublicacionesComponent

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ContactenosComponent,
    PublicacionesComponent
  ],
  imports: [
    BrowserModule, // Importa BrowserModule para la aplicación web
    AppRoutingModule, // Importa el AppRoutingModule para la gestión de las rutas
    HttpClientModule // Importa HttpClientModule para hacer solicitudes HTTP
    

  ],
  providers: [], // Proveedores de servicios
  bootstrap: [AppComponent] // Componente raíz de la aplicación
})
export class AppModule { } // Definición del módulo principal de la aplicación
