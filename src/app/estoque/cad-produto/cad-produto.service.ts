import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadProdutoService {

  constructor() { }

  public getProdutos(){
    return [
      {
        id: 1,
        titulo: 'Camiseta Mercedes',
        descricao: 'Uma camiseta da equipe mercedes',
        valor: 150,
        foto: 'assets/camiseta.jpg'
      },
      {
        id: 2,
        titulo: 'Tenis Mercedes',
        descricao: 'Tenis Puma Original',
        valor: 95,
        foto: 'assets/tenis.jpg'
      },
      {
        id: 3,
        titulo: 'Capacete Ayrton Senna',
        descricao: 'Replica Capacete Airton Senna GP Brasil 1991',
        valor: 2550,
        foto: 'assets/capacete.jpg'
      },
      {
        id: 4,
        titulo: 'Volante Ferrari',
        descricao: 'Volante F1 Ferrari 2021',
        valor: 6780,
        foto: 'assets/volante.jpg'
      },
    ];
  }

}
