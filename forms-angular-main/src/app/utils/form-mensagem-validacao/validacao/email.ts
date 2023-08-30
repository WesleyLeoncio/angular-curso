import {ValidationError} from "../interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class Email implements ValidationError{
    validar(campo: string, error: ValidationErrors): string {
        if (error?.['email']) {
            return `O campo ${campo} deve seguir o padrão exemplo@dominio.com`;
        }
        return '';
    }

}