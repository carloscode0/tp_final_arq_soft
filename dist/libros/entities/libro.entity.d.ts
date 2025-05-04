export declare class AutorEntity {
    id: number;
    nombre: string;
    relLibro: LibroEntity[];
}
export declare class LibroEntity {
    numero: number;
    id: number;
    nombre: string;
    codigo: string;
    autor: string;
    autor_id: number;
    relAutor: AutorEntity;
}
