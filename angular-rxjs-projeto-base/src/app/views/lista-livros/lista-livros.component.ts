import {Component} from '@angular/core';
import {LivroService} from "../../../service/livro.service";
import {LivroVolumeInfo} from "../../models/livro/class/livro-volume-info";
import {Item} from "../../models/livro/interfaces/item";
import {FormControl} from "@angular/forms";
import {catchError, debounceTime, filter, map, Observable, switchMap, throwError} from "rxjs";
import {LivrosResultado} from "../../models/livro/interfaces/livros-resultado";

const PAUSE = 1000;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent{

  campoBusca:FormControl<string> = new FormControl();
  mensagemErro:string = '';
  livrosResultado: LivrosResultado;


  livrosEncontrados$: Observable<LivroVolumeInfo[]> = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSE),
    filter((valorDigitado) => valorDigitado.length >= 3),
    switchMap((valorDigitado: string) => this.service.buscar(valorDigitado)),
    map(resultado => {
      this.livrosResultado = resultado;
      return resultado.items ?? [];
    }),
    map((itens: Item[]) =>this.livrosResultadoParaLivros(itens)),
    catchError(erro => {
      console.log(erro);
      return throwError(() => new Error(this.mensagemErro = "Ops, ocorreu um erro. Recarregue a aplicação ;("))
    })
  )

  constructor(private service: LivroService) {
  }

    livrosResultadoParaLivros(itens: Item[]): LivroVolumeInfo[] {
       return itens.map(item => new LivroVolumeInfo(item));
    }

}



