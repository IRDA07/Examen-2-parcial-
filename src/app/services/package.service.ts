import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private packages = [
    { id: 1, name: 'Playa Paraíso', price: 500, description: 'Un viaje a las playas más hermosas.' },
    { id: 2, name: 'Montaña Aventura', price: 700, description: 'Explora montañas y senderos increíbles.' },
    { id: 3, name: 'Ciudad Cultural', price: 400, description: 'Descubre la historia y cultura de la ciudad.' }
  ];

  getPackages() {
    return this.packages;
  }

  getPackageById(id: number) {
    return this.packages.find(pkg => pkg.id === id);
  }
}
