import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {map, Observable} from "rxjs";
import {ConsultarCepService} from "../service/consultar-cep.service";

@Directive({
  selector: '[validadorCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidadorCepDirective,
    multi: true
  }]
})
export class ValidadorCepDirective implements AsyncValidator {

  constructor(private consultaCepService: ConsultarCepService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.consultaCepService.consultarCep(cep).pipe(map(
        (resultado: any) => resultado.erro ? {'validadorCep': true} : null
    ));
  }

}
