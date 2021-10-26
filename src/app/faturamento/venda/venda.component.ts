import { CadProdutoService } from './../../estoque/cad-produto/cad-produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  produtos: any[] = [];

  constructor(private cadProdutoService: CadProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  private getProdutos(): void {
    this.produtos = this.cadProdutoService.getProdutos();
  }


}
