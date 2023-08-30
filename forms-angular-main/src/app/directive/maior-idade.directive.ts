import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[maiorIdadeValidador]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const anoNascimento: number =  new Date(control.value).getFullYear();
    const anoAtual: number = new Date().getFullYear();

    const idade: number = anoAtual - anoNascimento;

    return idade >= 18 ? null : {'maiorIdadeValidador': true};
  }

}
