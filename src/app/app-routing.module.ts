import { NotFoundComponent } from './not-found/not-found.component';
import { VendaComponent } from './faturamento/venda/venda.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { HomeComponent } from './home/home.component';
import { CadProdutoComponent } from './estoque/cad-produto/cad-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './estoque/estoque.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'faturamento', component: FaturamentoComponent},
  { path: 'faturamento/venda', component: VendaComponent},
  { path: 'estoque', component: EstoqueComponent},
  { path: 'estoque/cad-produto', component: CadProdutoComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
