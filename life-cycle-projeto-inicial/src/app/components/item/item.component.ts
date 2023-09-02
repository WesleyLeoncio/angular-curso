import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Item} from "../../interfaces/iItem";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash

  @Input()
  item!: Item;

  @Output()
  emitindoItemParaEditar = new EventEmitter();

  @Output()
  emitindoItemParaDeletar = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  editarItem(): void {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem(): void {
    this.emitindoItemParaDeletar.emit(this.item.id);
  }


  verificarCompra(): void {
    this.item!.comprado = !this.item!.comprado;
  }

  lineThrough(): string {
    return this.item.comprado ? 'line-through' : '';
  }

}
