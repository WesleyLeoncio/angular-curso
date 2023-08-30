import {Component, Input, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento";
import {PensamentoService} from "../../../../service/pensamento.service";

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements  OnInit{
  @Input()
  pensamento : Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  @Input()
  listPensamentoFavorito: Pensamento[] = [];

  constructor(
    private service: PensamentoService,
  ) {}
  ngOnInit(): void {

  }

  larguraPensamento():string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito():string{
    if (this.pensamento.favorito){
      return 'ativo';
    }
    return 'inativo';
  }

  modificarFavorito(){
    this.service.mudarFavorito(this.pensamento).subscribe(()=>{
      this.listPensamentoFavorito.splice(this.listPensamentoFavorito.indexOf(this.pensamento),1);
    });
  }

}
