import { NumberValueAccessor } from "@angular/forms";
import { Subscription } from "rxjs";

export interface Usuario {
    nombre: string;
    apellido: string;
    correoElectronico: string;
    password: string;
    celular?:number;
    fechanac?:string;
    foto:string;
    extension:string;
    dpi?:number;
    direccion?:string;
    roles:string[];
    esNormal:boolean;

}

export interface FileUploadModel{
    data?:File;
    state:string;
    inProgress:boolean;
    progress:number;
    canRetry:boolean;
    canCancel:boolean;
    sub?:Subscription;
}


export interface BaseResponse {
    text: string;
    id_usuario: string
}
export interface Update {
    correo: string;
    fecha_nacimiento: Date;
    password: string;
}
