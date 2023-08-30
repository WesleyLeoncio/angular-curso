import {ValidationErrors} from "@angular/forms";

export interface ValidationError {
  validar(campo:string, error:ValidationErrors):string;
}
