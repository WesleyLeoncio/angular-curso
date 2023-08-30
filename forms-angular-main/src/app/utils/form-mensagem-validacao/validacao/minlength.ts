import {ValidationError} from "../interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class Minlength implements ValidationError{
    validar(campo: string, error: ValidationErrors): string{
        if(error?.['minlength']){
            const tamanho: bigint = error?.['minlength'].requiredLength;
            return `O campo ${campo} precisa ter no mínimo ${tamanho} caracteres`;
        }
        return '';
    }
}
