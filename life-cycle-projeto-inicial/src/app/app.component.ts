import {Component, OnInit} from '@angular/core';
import {Item} from "./interfaces/iItem";
import {ListaDeCompraService} from "./service/lista-de-compra.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';

  listaDeCompra: Array<Item> = [];

  itemApp!: Item;
  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.buscarListaDeCompra();
  }

  editarItem(item: Item):void{
    this.itemApp = item;
  }
  deletarItem(id: number):void{
    this.listaService.deletarItemDaLista(id);
  }

  limparLista(){
    this.listaService.deletarLista();
    this.buscarListaDeCompra();
  }

  buscarListaDeCompra(): void{
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }
}
