import {AbstractControl} from "@angular/forms";

export function validarMinusculo(control: AbstractControl) {
    const campo = control.value as string;
    if (campo !== campo?.toLowerCase()) {
        return {minusculo: true};
    } else
        return null;
}
