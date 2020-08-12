import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminFornecedorComponent } from './admin-fornecedor/admin-fornecedor.component';
import { AdminProdutoComponent } from './admin-produto/admin-produto.component';
import { AdminContaComponent } from './admin-conta/admin-conta.component';
import { AdminMarcaComponent } from './admin-marca/admin-marca.component';
import { AdminVendasComponent } from './admin-vendas/admin-vendas.component';
import { AdminSliderComponent } from './admin-slider/admin-slider.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carrinho/:mode', component: CarrinhoComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
  { path: 'home_admin', component: HomeAdminComponent },
  { path: 'admin_fornecedor', component: AdminFornecedorComponent },
  { path: 'admin_produto', component: AdminProdutoComponent },
  { path: 'admin_conta', component: AdminContaComponent },
  { path: 'admin_marca', component: AdminMarcaComponent },
  { path: 'admin_vendas', component: AdminVendasComponent },
  { path: 'admin_sliders', component: AdminSliderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
