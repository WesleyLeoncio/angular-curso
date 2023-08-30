import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
    selector: '[cepFormatoValidador]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CepFormatoDirective,
        multi: true
    }]
})
export class CepFormatoDirective implements Validator {

    constructor() {
    }

    validate(control: AbstractControl): ValidationErrors | null {
        const regex:RegExp = new RegExp("^(\\d{5})(-?\\d{3})$");
        const cep = control.value;
        const cepValido: boolean = regex.test(cep);
        return cepValido ? null : {'cepFormatoValidador': true};
    }

}
