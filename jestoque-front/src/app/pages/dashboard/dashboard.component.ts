import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts'; // 1. Importação nova do Gráfico!
import { ChartConfiguration, ChartData, ChartType, Chart, registerables } from 'chart.js'; // 2. Tipos do Chart.js
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, BaseChartDirective], // 3. Adicione o BaseChartDirective aqui!
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  totalItems: number = 0;
  totalValue: number = 0;
  lowStockProducts: Product[] = [];

  // === CONFIGURAÇÕES DO GRÁFICO DE PIZZA (DOUGHNUT) ===
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [], // Nomes dos produtos
    datasets: [
      {
        data: [], // Quantidade em estoque
        backgroundColor: [
          '#6366f1', // Indigo 500
          '#10b981', // Emerald 500
          '#f43f5e', // Rose 500
          '#f59e0b', // Amber 500
          '#0ea5e9', // Sky 500
          '#8b5cf6'  // Violet 500
        ],
        hoverOffset: 4
      }
    ]
  };
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'right' }
    }
  };

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.productService.listAll().subscribe(data => {
      this.products = data;
      this.calculateMetrics();
      this.buildChart(); 
      this.cdr.detectChanges();
    });
  }

  calculateMetrics(): void {
    this.totalItems = this.products.length;
    this.totalValue = this.products.reduce((acc, curr) => acc + (curr.salePrice * curr.currentStock), 0);
    this.lowStockProducts = this.products.filter(p => p.currentStock <= p.minStock);
  }
//gráfico 
  buildChart(): void {
    const topProducts = [...this.products]
      .sort((a, b) => b.currentStock - a.currentStock)
      .slice(0, 5);

    this.doughnutChartData = {
      labels: topProducts.map(p => p.name),
      datasets: [
        {
          data: topProducts.map(p => p.currentStock),
          backgroundColor: [
            '#6366f1', 
            '#10b981', 
            '#f43f5e', 
            '#f59e0b', 
            '#0ea5e9', 
            '#8b5cf6' 
          ],
          hoverOffset: 4
        }
      ]
    };
  }
}