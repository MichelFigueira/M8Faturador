import { VendaComponent } from './venda/venda.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaturamentoComponent } from './faturamento.component';

@NgModule({
  declarations: [
    VendaComponent,
    FaturamentoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FaturamentoModule { }
