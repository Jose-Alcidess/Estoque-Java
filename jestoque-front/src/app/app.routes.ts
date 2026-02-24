import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'estoque', pathMatch: 'full' }, 
  { path: 'estoque', component: ProductListComponent },
  { path: 'novo-produto', component: ProductFormComponent },
  { path: 'dashboard', component: DashboardComponent }
];
