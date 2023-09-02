import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ListaDeCompraService} from "../../service/lista-de-compra.service";
import {Item} from "../../interfaces/iItem";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input()
  itemInput!: Item;

  valorItem!: string;

  btnName: string = 'Salvar Item';

  vaiEditar: boolean = false;

  constructor(private listaService: ListaDeCompraService) {
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemInput'].firstChange) {
      this.vaiEditar = true;
      this.btnName = 'Editar Item';
      this.valorItem = this.itemInput?.nome;
    }
  }

  acaoBotao(): void {
    this.vaiEditar ? this.editarItem() : this.adicionarItem();
  }

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  editarItem() {
    this.listaService.editarItemDaLista(this.itemInput, this.valorItem);
    this.resetarValores();
  }

  limparCampo() {
    this.valorItem = '';
  }

  resetarValores():void{
    this.btnName = 'Salvar Item';
    this.vaiEditar = false;
    this.limparCampo();
  }


}
