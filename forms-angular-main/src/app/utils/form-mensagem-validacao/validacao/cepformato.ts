import {ValidationError} from "../interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class Cepformato implements ValidationError{
    validar(campo: string, error: ValidationErrors): string {
        if (error?.['cepFormatoValidador']) {
            return `O campo ${campo} deve seguir o 00000-000`;
        }
        return '';
    }
}