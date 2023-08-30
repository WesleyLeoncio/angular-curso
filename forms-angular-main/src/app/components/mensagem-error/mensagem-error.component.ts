import {Component, Input, OnInit} from '@angular/core';
import {NgForm, ValidationErrors} from "@angular/forms";
import {ValidationStrategy} from "../../utils/validationStrategy";
import {Required} from "../../utils/form-mensagem-validacao/validacao/required";
import {Minlength} from "../../utils/form-mensagem-validacao/validacao/minlength";
import {Email} from "../../utils/form-mensagem-validacao/validacao/email";
import {Telefone} from "../../utils/form-mensagem-validacao/validacao/telefone";
import {Maioridade} from "../../utils/form-mensagem-validacao/validacao/maioridade";
import {Maxlength} from "../../utils/form-mensagem-validacao/validacao/maxlength";
import {Cepformato} from "../../utils/form-mensagem-validacao/validacao/cepformato";
import {Cepvalido} from "../../utils/form-mensagem-validacao/validacao/cepvalido";

@Component({
    selector: 'app-mensagem-error',
    templateUrl: './mensagem-error.component.html',
    styleUrls: ['./mensagem-error.component.css']
})
export class MensagemErrorComponent implements OnInit {

    @Input()
    campo: string = '';

    @Input()
    formulario!: NgForm;

    validadoresForm: ValidationStrategy = new ValidationStrategy([
        new Required(),
        new Minlength(),
        new Maxlength(),
        new Email(),
        new Telefone(),
        new Maioridade(),
        new Cepformato(),
        new Cepvalido()
    ]);

    constructor() {
    }

    ngOnInit(): void {

    }

    mensagemError(): string {
        const errorCampo:ValidationErrors = <ValidationErrors>this.formulario.controls[this.campo]?.errors;
        let msg: string = this.validadoresForm.verificarErros(this.campo, errorCampo);
        return msg != '' ? msg : '';
    }


    verificarCampo():boolean{
        const errorCampo = this.formulario.controls[this.campo];
        return !!(errorCampo?.invalid && errorCampo?.touched);
    }
}
