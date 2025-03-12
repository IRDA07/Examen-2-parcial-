import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css'],
  standalone: false,
})
export class PackageDetailComponent implements OnInit {
  selectedPackage: any; 
  customerName: string = ''; 
  reserved = false;

  constructor(private route: ActivatedRoute, private packageService: PackageService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.selectedPackage = this.packageService.getPackageById(id);
    } else {
      console.error('ID de paquete no válido');
    }
  }

  reservePackage() {
    this.reserved = true;
    setTimeout(() => {
      this.reserved = false;
    }, 3000);
  }
}
