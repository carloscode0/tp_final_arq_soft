import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { LibroEntity } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { PaginacionDto } from './dto/Paginacion-dto';
export declare class LibrosService {
    private repositoryLibro;
    constructor(repositoryLibro: Repository<LibroEntity>);
    create(CreateLibroDto: CreateLibroDto): Promise<LibroEntity>;
    findAll({ busqueda, pagina, limite }: PaginacionDto): Promise<{
        totalreg: number;
        totalpag: number;
        libros: LibroEntity[];
    }>;
    findOne(id: number): Promise<LibroEntity>;
    update(id: number, UpdateCarreraDto: UpdateLibroDto): Promise<LibroEntity>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
