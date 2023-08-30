import {ValidationError} from "./interfaces/validationError";
import {ValidationErrors} from "@angular/forms";

export class ValidationStrategy {

    private validadores: ValidationError[]

    constructor(validadores: ValidationError[]) {
        this.validadores = validadores;
    }

    public verificarErros(campo: string, error: ValidationErrors): string {
        for (const valor of this.validadores) {
            let msg = valor.validar(campo, error);
            if (msg != '') {
                return msg;
            }
        }
        return '';
    }
}
