import {Component, OnInit} from '@angular/core';
import {PensamentoService} from "../../../../service/pensamento.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {validarMinusculo} from "../../../../utils/validation/validarMinusculo";
import {Required} from "../../../../utils/form-validation-mensagem/required";
import {Minlength} from "../../../../utils/form-validation-mensagem/minlength";
import {Lowercase} from "../../../../utils/form-validation-mensagem/lowercase";
import {ValidationStrategy} from "../../../../utils/form-validation-mensagem/validationStrategy";


@Component({
    selector: 'app-criar-pensamento',
    templateUrl: './criar-pensamento.component.html',
    styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

    formulario!: FormGroup;
    validadoresForm: ValidationStrategy = new ValidationStrategy([
        new Required(),
        new Minlength(),
        new Lowercase()
    ]);

    constructor(
        private service: PensamentoService,
        private route: Router,
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.formulario = this.formBuilder.group({
            conteudo: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern(/(.|\s)*\S(.|\s)*/),
                ]
            )],
            autoria: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                validarMinusculo
            ])],
            modelo: ['modelo1', [Validators.required]],
            favorito: [false]
        });
    }

    criarPensamento() {
        if (this.formulario.valid) {
            this.service.criar(this.formulario.value).subscribe(() => {
                this.route.navigate(['/listarPensamento']);
            });
        }
    }

    cancelar() {
        this.route.navigate(['/listarPensamento']);
    }

    habilitarBotao(): string {
        return this.formulario.valid ? 'botao' : 'botao__desabilitado';
    }

    mensagemError(campo: string): string {
        const errorCampo = <ValidationErrors>this.formulario.get(campo)?.errors;
        let msg = this.validadoresForm.verificarErros(campo, errorCampo);
        return msg != '' ? msg : '';
    }
}
