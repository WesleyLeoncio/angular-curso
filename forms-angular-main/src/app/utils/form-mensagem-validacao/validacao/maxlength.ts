import {ValidationError} from "../interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class Maxlength implements ValidationError{
    validar(campo: string, error: ValidationErrors): string {
        if(error?.['maxlength']){
            const tamanho: bigint = error?.['minlength'].requiredLength;
            return `O campo ${campo} precisa ter no máximo ${tamanho} caracteres`;
        }
        return '';
    }

}