import {Component, OnInit} from '@angular/core';
import {PensamentoService} from "../../../../service/pensamento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ValidationStrategy} from "../../../../utils/form-validation-mensagem/validationStrategy";
import {Required} from "../../../../utils/form-validation-mensagem/required";
import {Minlength} from "../../../../utils/form-validation-mensagem/minlength";
import {Lowercase} from "../../../../utils/form-validation-mensagem/lowercase";
import {validarMinusculo} from "../../../../utils/validation/validarMinusculo";

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit{

  formulario!: FormGroup;
  validadoresForm: ValidationStrategy = new ValidationStrategy([
    new Required(),
    new Minlength(),
    new Lowercase()
  ]);

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3),
            validarMinusculo
        ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito]
      })
    })
  }

  editarPensamento() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao():string{
    return this.formulario.valid ? 'botao' : 'botao__desabilitado';
  }

  mensagemError(campo: string): string {
    const errorCampo = <ValidationErrors>this.formulario.get(campo)?.errors;
    let msg = this.validadoresForm.verificarErros(campo, errorCampo);
    return msg != '' ? msg : '';
  }
}
