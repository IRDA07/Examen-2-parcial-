import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css'],
  standalone: false,
})
export class PackageListComponent implements OnInit {
  packages: any[] = [];

  constructor(private packageService: PackageService) {}

  ngOnInit() {
    this.packages = this.packageService.getPackages();
  }
}
