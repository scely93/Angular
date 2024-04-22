import { TestBed } from '@angular/core/testing'; // Importación del módulo de pruebas de Angular
import { PublicacionesService } from './publicaciones.service'; // Importación del servicio a probar

describe('PublicacionesService', () => {
  let service: PublicacionesService; // Declaración de una variable para el servicio

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuración del entorno de pruebas
    service = TestBed.inject(PublicacionesService); // Inicialización del servicio utilizando TestBed
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Prueba para verificar que el servicio se haya creado correctamente
  });
});
