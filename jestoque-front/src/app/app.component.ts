import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  
  // Objeto preparado para a nova estrutura
  newProduct: Product = this.resetForm();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.listAll().subscribe(data => this.products = data);
  }

  addProduct(): void {
    this.productService.save(this.newProduct).subscribe({
      next: () => {
        this.loadProducts();
        this.newProduct = this.resetForm();
      },
      error: (err) => console.error('Erro ao salvar produto:', err)
    });
  }

  deleteProduct(id: number): void {
    if (confirm('Deseja realmente excluir este item?')) {
      this.productService.delete(id).subscribe(() => this.loadProducts());
    }
  }

  private resetForm(): Product {
    return {
    sku: '',
    name: '',
    salePrice: 0,
    currentStock: 0,
    minStock: 0,
    description: '', // Se você quiser manter a descrição, inicialize-a aqui
    ean: ''
  };
  }
}