import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 1. Necessário para o [(ngModel)]
import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  
  newProduct: Product = { name: '', description: '', price: 0, quantity: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.listAll().subscribe(data => this.products = data);
  }
  addProduct() {
    this.productService.save(this.newProduct).subscribe({
      next: () => {
        this.loadProducts();
        this.newProduct = { name: '', description: '', price: 0, quantity: 0 };
      },
      error: (err) => console.error('Erro ao salvar:', err)
    });
  }
  deleteProduct(id: number) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.productService.delete(id).subscribe({
        next: () => this.loadProducts(),
        error: (err) => console.error('Erro ao excluir:', err)
      });
    }
  }

}