import { CadProdutoService } from './cad-produto.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrls: ['./cad-produto.component.css']
})
export class CadProdutoComponent implements OnInit {

  title = 'Cadastro de Produto';
  produtos: any[] = [];

  constructor(private cadProdutoService: CadProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  private getProdutos(): void {
    this.produtos = this.cadProdutoService.getProdutos();
  }

}
