
export interface Usuario {
    nombre: string;
    apellido: string;
    correoElectronico: string;
    password: string;
    celular:number;
    fechanac:Date;
    foto:string;
    extension:string;
    dpi:number;
    direccion:string;
    roles:[];
    esNormal:boolean;

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
