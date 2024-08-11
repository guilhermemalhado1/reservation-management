import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AddProdutoComponent } from '../components/add-produto/add-produto.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [AddProdutoComponent,IonicModule],
})
export class HomePage {
  constructor() {}
}
