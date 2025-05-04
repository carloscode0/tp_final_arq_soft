import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { PaginacionDto } from './dto/Paginacion-dto';
import { AutorEntity } from './entities/autor.entity';
export declare class AutorController {
    private readonly autorService;
    constructor(autorService: AutorService);
    create(CreateAutorDto: CreateAutorDto): Promise<AutorEntity>;
    findAll(paginacion: PaginacionDto): Promise<{
        totalreg: number;
        totalpag: number;
        autores: AutorEntity[];
    }>;
    findOne(id: string): Promise<AutorEntity>;
    update(id: string, UpdateAutorDto: UpdateAutorDto): Promise<AutorEntity>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
