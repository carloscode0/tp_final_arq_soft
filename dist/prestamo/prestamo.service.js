"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestamoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prestamo_entity_1 = require("./entities/prestamo.entity");
let PrestamoService = class PrestamoService {
    repositoryPrestamo;
    constructor(repositoryPrestamo) {
        this.repositoryPrestamo = repositoryPrestamo;
    }
    async register(createPrestamoLibroDto) {
        const id = createPrestamoLibroDto.libro_id;
        const existe = await this.repositoryPrestamo.findOne({ where: { id } });
        if (!existe)
            throw new common_1.ConflictException(`El libro con el id: ${id} no existe.`);
        const newPrestamo = await this.repositoryPrestamo.save({
            fecha: createPrestamoLibroDto.fecha,
            lector: createPrestamoLibroDto.lector,
            libro_id: createPrestamoLibroDto.libro_id,
        });
        console.log('dtataAAA', newPrestamo);
        return newPrestamo;
    }
    async findAll({ busqueda, pagina, limite }) {
        const [libros, totalreg] = await this.repositoryPrestamo.findAndCount({
            skip: (pagina - 1) * limite,
            take: limite,
            where: busqueda ? [{ lector: (0, typeorm_2.Like)(`%${busqueda}%`) }] : undefined,
            order: { id: 'DESC' },
        });
        var totalpag = Math.ceil(totalreg / limite);
        let numero = (pagina - 1) * limite + 1;
        for (const item of libros) {
            item.numero = numero++;
        }
        return { totalreg, totalpag, libros };
    }
    async findOne(id) {
        const prestamo = await this.repositoryPrestamo.findOne({
            where: { id },
        });
        if (!prestamo)
            throw new common_1.ConflictException(`El préstamo con ${id} no existe.`);
        return prestamo;
    }
    async update(id, updateColegioDto) {
        const existe = await this.repositoryPrestamo.findOne({ where: { id } });
        if (!existe)
            throw new common_1.ConflictException(`El préstamo con ${id} no existe.`);
        const updatePrestamo = Object.assign(existe, updateColegioDto);
        return await this.repositoryPrestamo.save(updatePrestamo);
    }
    async remove(id) {
        const existe = await this.repositoryPrestamo.findOne({ where: { id } });
        if (!existe)
            throw new common_1.ConflictException(`El Colegio ${id} no existe.`);
        await this.repositoryPrestamo.delete(id);
        return { message: `Préstamo con ID ${id} eliminado correctamente.` };
    }
};
exports.PrestamoService = PrestamoService;
exports.PrestamoService = PrestamoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prestamo_entity_1.PrestamoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PrestamoService);
//# sourceMappingURL=prestamo.service.js.map