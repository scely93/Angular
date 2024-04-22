import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Importación del módulo de enrutamiento y las rutas
import { InicioComponent } from './paginas/inicio/inicio.component'; // Componente para la página de inicio
import { NosotrosComponent } from './paginas/nosotros/nosotros.component'; // Componente para la página de nosotros
import { ContactenosComponent } from './paginas/contactenos/contactenos.component'; // Componente para la página de contacto
import { PublicacionesComponent } from './paginas/publicaciones/publicaciones.component'; // Componente para la página de publicaciones

const routes: Routes = [ // Definición de las rutas
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto redirige a la página de inicio
  { path: 'inicio', component: InicioComponent }, // Ruta para la página de inicio, se carga el componente InicioComponent
  { path: 'nosotros', component: NosotrosComponent }, // Ruta para la página de nosotros, se carga el componente NosotrosComponent
  { path: 'contactenos', component: ContactenosComponent }, // Ruta para la página de contacto, se carga el componente ContactenosComponent
  { path: 'publicaciones', component: PublicacionesComponent }, // Ruta para la página de publicaciones, se carga el componente PublicacionesComponent
  { path: '**', redirectTo: '/inicio' } // Si la ruta no coincide con ninguna de las anteriores, redirige a la página de inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuración del módulo de enrutamiento con las rutas definidas
  exports: [RouterModule] // Exportación del módulo de enrutamiento para su uso en otros módulos de la aplicación
})
export class AppRoutingModule { } // Definición del módulo de enrutamiento de la aplicación
