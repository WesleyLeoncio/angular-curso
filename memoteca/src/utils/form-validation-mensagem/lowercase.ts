import {ValidationError} from "./interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class Lowercase implements ValidationError{
    validar(campo: string, error: ValidationErrors): string{
        if (error?.['minusculo']) {
            return `O campo ${campo} precisa ter somente caracteres minusculos`;
        }
        return '';
    }

}
