import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ConsultarCepService} from "../service/consultar-cep.service";
import {CepResponse} from "../models/response/cep-response";


@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    constructor(
        private router: Router,
        private consultaCepService: ConsultarCepService
    ) {
    }

    ngOnInit(): void {
    }

    cadastrar(form: NgForm) {
        if (form.valid) {
            this.router.navigate(['./sucesso'])
        } else {
            alert('Formulario Invalido!')
        }
    }

    consultarCep(ev: any, form: NgForm) {
        const cep = ev.target.value;
        if (this.validarCep(cep)) {
            this.consultaCepService.consultarCep(cep).subscribe(resultado => {
                this.populandoEndereco(resultado, form);
            });
        }
    }

    populandoEndereco(dados: CepResponse, f: NgForm) {
        f.form.patchValue({
            endereco: dados.logradouro,
            complemento: dados.complemento,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf,
        })
    }

    validarCep(cep: string):boolean{
        const regex: RegExp = new RegExp("^(\\d{5})(-?\\d{3})$");
        return  cep != '' && regex.test(cep);
    }
}
