import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { AutorEntity } from './entities/autor.entity';
import { Repository } from 'typeorm';
import { PaginacionDto } from './dto/Paginacion-dto';
export declare class AutorService {
    private repositoryAutor;
    constructor(repositoryAutor: Repository<AutorEntity>);
    create(CreateAutorDto: CreateAutorDto): Promise<AutorEntity>;
    findAll({ busqueda, pagina, limite }: PaginacionDto): Promise<{
        totalreg: number;
        totalpag: number;
        autores: AutorEntity[];
    }>;
    findOne(id: number): Promise<AutorEntity>;
    update(id: number, UpdateAutorDto: UpdateAutorDto): Promise<AutorEntity>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
