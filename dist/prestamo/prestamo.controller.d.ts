import { PrestamoService } from './prestamo.service';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { PrestamoEntity } from './entities/prestamo.entity';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { PaginacionDto } from './dto/Paginacion-dto';
export declare class PrestamoController {
    private readonly prestamoService;
    constructor(prestamoService: PrestamoService);
    createPrestamo(CreatePrestamoDto: CreatePrestamoDto): Promise<PrestamoEntity>;
    findAll(paginacion: PaginacionDto): Promise<{
        totalreg: number;
        totalpag: number;
        libros: PrestamoEntity[];
    }>;
    findOne(id: string): Promise<PrestamoEntity>;
    update(id: string, UpdatePrestamoDto: UpdatePrestamoDto): Promise<PrestamoEntity>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
