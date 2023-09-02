import {Item} from 'src/app/interfaces/iItem';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  private criarItem(nomeDoItem: string) {
    const id = this.criarID();
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item);
    this.atualizarLocalStorage();
  }


  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
    this.atualizarLocalStorage();
  }

  deletarItemDaLista(id: number): void {
    const index = this.listaDeCompra.findIndex(item => item.id === id);
    this.listaDeCompra.splice(index, 1);
    this.atualizarLocalStorage();
  }

  deletarLista(): void{
    this.listaDeCompra = [];
    this.atualizarLocalStorage();
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }


  criarID(): number {
    const ordenada: Item[] = this.ordernarArry();
    if (ordenada.length > 0){
      return ordenada[0].id + 1;
    }
    return 1;
  }

  ordernarArry(): Item[]{
    const listaId: Item[] = [...this.listaDeCompra];
    return listaId.sort(function (a, b): any{
      if(a.id > b.id){
        return -1
      }else{
        return true
      }
    });
  }

}
