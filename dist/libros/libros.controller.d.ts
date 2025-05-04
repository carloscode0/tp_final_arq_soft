import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { PaginacionDto } from './dto/Paginacion-dto';
import { LibroEntity } from './entities/libro.entity';
export declare class LibrosController {
    private readonly librosService;
    constructor(librosService: LibrosService);
    create(createLibroDto: CreateLibroDto): Promise<LibroEntity>;
    findAll(paginacion: PaginacionDto): Promise<{
        totalreg: number;
        totalpag: number;
        libros: LibroEntity[];
    }>;
    findOne(id: string): Promise<LibroEntity>;
    update(id: string, updateInterpreteDto: UpdateLibroDto): Promise<LibroEntity>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
