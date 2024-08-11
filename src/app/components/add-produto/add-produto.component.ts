import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.scss'],
  standalone: true,
})
export class AddProdutoComponent  implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    console.log('AddProdutoComponent');
    /*const produto: Produto = new Produto();
    produto.id = 'Produto 1';
    produto.title = 'Teste';
    produto.description = 'Teste';

    this.produtoService.create(produto);*/
    this.produtoService.getAll().valueChanges().subscribe((data) => {
      console.log(data);
    });
  }

}
