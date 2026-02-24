import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Importamos o Router
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  newProduct: Product = { sku: '', name: '', salePrice: 0, currentStock: 0, minStock: 0 };

  constructor(
    private productService: ProductService,
    private router: Router 
  ) {}

  addProduct(): void {
    this.productService.save(this.newProduct).subscribe({
      next: () => {
        this.router.navigate(['/estoque']);
      },
      error: (err) => console.error('Erro ao salvar produto:', err)
    });
  }
}