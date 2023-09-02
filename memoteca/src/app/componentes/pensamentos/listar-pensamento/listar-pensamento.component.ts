import {Component, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento";
import {PensamentoService} from "../../../../service/pensamento.service";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favorito: boolean = false;
  listPensamentoFavorito: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(
    private service: PensamentoService,
  ) {
  }

  ngOnInit(): void {
    this.buscarPensamento();
  }

  buscarPensamento(): void{
    this.service.listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) this.haMaisPensamentos = false;
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.buscarPensamento();
  }

  listarFavoritos() {
    this.titulo = 'Meus Favoritos';
    this.favorito = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe(listaPensamentoFavoritos => {
        this.listaPensamentos = listaPensamentoFavoritos;
        this.listPensamentoFavorito = listaPensamentoFavoritos;
      });
  }

  meuMural(): void {
    this.favorito = false;
    this.paginaAtual = 1;
    this.buscarPensamento();
  }

}
