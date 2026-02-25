import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '', redirectTo: 'estoque', pathMatch: 'full' }, 
  { path: 'estoque', component: ProductListComponent },
  { path: 'novo-produto', component: ProductFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editar-produto/:id', component: ProductFormComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'configuracao', component: ConfiguracaoComponent },
  { path: 'contato', component: ContatoComponent }
];
