import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

interface InventoryItem extends Product {
  countedStock: number;
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html'
})
export class InventarioComponent implements OnInit {
  inventoryItems: InventoryItem[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.listAll().subscribe(data => {
      this.inventoryItems = data.map(p => ({
        ...p,
        countedStock: p.currentStock
      }));
    });
  }
  get totalDiference(): number {
    return this.inventoryItems.reduce((acc, item) => acc + (item.countedStock - item.currentStock), 0);
  }
}