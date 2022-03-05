export interface Carpeta{
    nombre: string;
    fecha_creacion: Date;
    usuario:string;
    id: number;
    total_archivos:number;
}

export interface Archivo{
    archivo: string;
    id_carpeta:number;
    extension:string;
    fecha_subida: Date;
    id: number;
    link:string; 
}