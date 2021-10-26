import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import { EstoqueComponent } from './estoque.component';

@NgModule({
  declarations: [
    EstoqueComponent,
    CadProdutoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
})
export class EstoqueModule { }
