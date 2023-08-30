import {ValidationError} from "../interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class Maioridade implements ValidationError{
    validar(campo: string, error: ValidationErrors): string {
        if (error?.['maiorIdadeValidador']) {
            return `O usuário precisa ter pelo menos 18 anos`;
        }
        return '';
    }

}