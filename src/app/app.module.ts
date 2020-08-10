import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPayPalModule } from 'ngx-paypal';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminFornecedorComponent } from './admin-fornecedor/admin-fornecedor.component';
import { AdminProdutoComponent } from './admin-produto/admin-produto.component';
import { AdminContaComponent } from './admin-conta/admin-conta.component';
import { AdminMarcaComponent } from './admin-marca/admin-marca.component';
import { AdminVendasComponent } from './admin-vendas/admin-vendas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProdutoComponent,
    CarrinhoComponent,
    CheckoutComponent,
    ConfirmacaoComponent,
    HomeAdminComponent,
    AdminFornecedorComponent,
    AdminProdutoComponent,
    AdminContaComponent,
    AdminMarcaComponent,
    AdminVendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
