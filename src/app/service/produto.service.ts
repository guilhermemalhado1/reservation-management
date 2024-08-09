import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private dbPath = '/produtos';

  produtoRef: AngularFirestoreCollection<Produto>;

  constructor(private db: AngularFirestore) {
    this.produtoRef = db.collection(this.dbPath);
   }

   getAll(): AngularFirestoreCollection<Produto> {
    return this.produtoRef;
  }

  create(tutorial: Produto): any {
    console.log('create');
    return this.produtoRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.produtoRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.produtoRef.doc(id).delete();
  }

}
