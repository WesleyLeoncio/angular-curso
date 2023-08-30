import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[telefoneFormatoValidador]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: TelefoneFormatoDirective,
    multi: true
  }]
})
export class TelefoneFormatoDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const regex = new RegExp("^\\([1-9]{2}\\) [9]{0,1}[6-9]{1}[0-9]{4}\\-[0-9]{4}$");
    const telefone = control.value;
    const telefoneValido: boolean = regex.test(telefone);
    return telefoneValido ? null : {'telefoneFormatoValidador': true};
  }

}
