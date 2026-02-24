import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router'; // Adicionamos ActivatedRoute
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  newProduct: Product = { sku: '', name: '', salePrice: 0, currentStock: 0, minStock: 0 };
  
  // Variáveis de controle
  isEditing: boolean = false;
  productId!: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.isEditing = true;
      this.productId = +idParam; 
      this.loadProductForEdit(this.productId);
    }
  }

  loadProductForEdit(id: number): void {
    this.productService.findById(id).subscribe({
      next: (data) => {
        this.newProduct = data; 
      },
      error: (err) => console.error('Erro ao buscar o produto:', err)
    });
  }

  saveProduct(): void {
    if (this.isEditing) {
      this.productService.update(this.productId, this.newProduct).subscribe({
        next: () => this.router.navigate(['/estoque']),
        error: (err) => console.error('Erro ao atualizar produto:', err)
      });
    } else {
      this.productService.save(this.newProduct).subscribe({
        next: () => this.router.navigate(['/estoque']),
        error: (err) => console.error('Erro ao salvar produto:', err)
      });
    }
  }
}