import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Repository } from 'typeorm';
import { PrestamoEntity } from './entities/prestamo.entity';
import { PaginacionDto } from './dto/Paginacion-dto';
export declare class PrestamoService {
    private repositoryPrestamo;
    constructor(repositoryPrestamo: Repository<PrestamoEntity>);
    register(createPrestamoLibroDto: CreatePrestamoDto): Promise<PrestamoEntity>;
    findAll({ busqueda, pagina, limite }: PaginacionDto): Promise<{
        totalreg: number;
        totalpag: number;
        libros: PrestamoEntity[];
    }>;
    findOne(id: number): Promise<PrestamoEntity>;
    update(id: number, updateColegioDto: UpdatePrestamoDto): Promise<PrestamoEntity>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
