import {ValidationError} from "../interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class Required implements ValidationError {
    validar(campo: string, error: ValidationErrors): string{
        if (error?.['required']) {
            return `O campo ${campo} é obrigatorio`;
        }
        return '';
    }


}
