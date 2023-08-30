import {ValidationError} from "../interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class Telefone implements ValidationError{
    validar(campo: string, error: ValidationErrors): string {
        if (error?.['telefoneFormatoValidador']) {
            return `O campo ${campo} deve seguir o seguinte formato (xx) xxxxx-xxxx`;
        }
        return '';
    }

}