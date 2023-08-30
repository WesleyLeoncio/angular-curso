import {ValidationError} from "../interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class Cepvalido implements ValidationError{
    validar(campo: string, error: ValidationErrors): string {
        if (error?.['validadorCep']) {
            return `Esse cep não existe`;
        }
        return '';
    }

}