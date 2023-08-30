import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CepResponse} from "../models/response/cep-response";

@Injectable({
    providedIn: 'root'
})
export class ConsultarCepService {
    API_URL: string = 'https://viacep.com.br/ws/';

    constructor(private http: HttpClient) {
    }

    consultarCep(cep: string): Observable<CepResponse>{
        return this.http.get<CepResponse>(`${this.API_URL}${cep}/json`);
    }
}
