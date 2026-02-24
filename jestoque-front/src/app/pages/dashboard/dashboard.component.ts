import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Adicione o ChangeDetectorRef aqui
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  totalItems: number = 0;
  totalValue: number = 0;
  lowStockProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef // 2. Injete ele aqui
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.productService.listAll().subscribe(data => {
      this.products = data;
      this.calculateMetrics();
      
      this.cdr.detectChanges(); // 3. A MÁGICA: Força o HTML a se atualizar na mesma hora!
    });
  }

  calculateMetrics(): void {
    this.totalItems = this.products.length;
    this.totalValue = this.products.reduce((acc, curr) => acc + (curr.salePrice * curr.currentStock), 0);
    this.lowStockProducts = this.products.filter(p => p.currentStock <= p.minStock);
  }
}