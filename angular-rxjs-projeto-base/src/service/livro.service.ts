import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {LivrosResultado} from "../app/models/livro/interfaces/livros-resultado";

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly URLAPI = "https://www.googleapis.com/books/v1/volumes";

  constructor(private  http: HttpClient) { }

  buscar(valorDigitado: string): Observable<LivrosResultado> {
    const params = new HttpParams().append('q', valorDigitado)
    return this.http.get<LivrosResultado>(this.URLAPI, {params})
  }
}
