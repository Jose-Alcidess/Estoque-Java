import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.listAll().subscribe(data => {
      this.products = data;
      this.cdr.detectChanges();
    });
  }

  deleteProduct(id: number): void {
    if (confirm('Tem a certeza de que deseja excluir este produto do sistema?')) {
      
      this.productService.delete(id).subscribe({
        next: () => {
          console.log('Produto excluído com sucesso!');
          this.loadProducts(); 
        },
        error: (err) => {
          console.error('Erro ao tentar excluir o produto:', err);
          alert('Não foi possível excluir o produto. Verifique a consola.');
        }
      });

    }  
  }
}