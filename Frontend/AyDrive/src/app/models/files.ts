export interface MoverFile{
    nickname: string;
    new_folder: string,
    file_id: number;
}

export interface EliminarFile {
    nickname: string;
    folder: string;
    filename: string;
    root: number;
}

export interface new_Nombre {
    new_name: string;
    file_id: number;
}

export interface CrearfileRoot {
    nickname: string,
    archivo: string,
    extension: string,
    base64: string
}

export interface CrearFile{
    nickname: string,
    archivo: string,
    extension: string,
    base64: string,
    idcarpeta: number 
}
