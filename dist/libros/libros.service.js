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
exports.LibrosService = void 0;
const common_1 = require("@nestjs/common");
const libro_entity_1 = require("./entities/libro.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let LibrosService = class LibrosService {
    repositoryLibro;
    constructor(repositoryLibro) {
        this.repositoryLibro = repositoryLibro;
    }
    async create(CreateLibroDto) {
        if (await this.repositoryLibro.findOneBy({ nombre: CreateLibroDto.nombre }))
            throw new common_1.ConflictException(`El nombre '${CreateLibroDto.nombre}' ya existe.`);
        if (await this.repositoryLibro.findOneBy({ codigo: CreateLibroDto.codigo }))
            throw new common_1.ConflictException(`El codigo '${CreateLibroDto.codigo}' ya existe.`);
        const newLibro = await this.repositoryLibro.save({
            nombre: CreateLibroDto.nombre,
            codigo: CreateLibroDto.codigo,
            autor: CreateLibroDto.autor,
        });
        return newLibro;
    }
    async findAll({ busqueda, pagina, limite }) {
        const [libros, totalreg] = await this.repositoryLibro.findAndCount({
            relations: ["relAutor"],
            skip: (pagina - 1) * limite,
            take: limite,
            where: busqueda ? [{ nombre: (0, typeorm_2.Like)(`%${busqueda}%`) }] : undefined,
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
        const libro = await this.repositoryLibro.findOne({
            where: { id },
        });
        if (!libro)
            throw new common_1.ConflictException(`El libro con ${id} no existe.`);
        return libro;
    }
    async update(id, UpdateCarreraDto) {
        const existe = await this.repositoryLibro.findOne({ where: { id } });
        if (!existe)
            throw new common_1.ConflictException(`El libro ${id} no existe.`);
        if (UpdateCarreraDto.nombre == existe.nombre)
            throw new common_1.ConflictException(`El nombre '${existe.nombre}' ya existe.`);
        if (UpdateCarreraDto.codigo == existe.codigo)
            throw new common_1.ConflictException(`El codigo '${existe.codigo}' ya existe.`);
        const updateCarrera = Object.assign(existe, UpdateCarreraDto);
        return await this.repositoryLibro.save(updateCarrera);
    }
    async remove(id) {
        const existe = await this.repositoryLibro.findOne({ where: { id } });
        if (!existe)
            throw new common_1.ConflictException(`El libro con ID: ${id} no existe.`);
        await this.repositoryLibro.delete(id);
        return { message: `El libro con ID: ${id}, fue eliminado correctamente.` };
    }
};
exports.LibrosService = LibrosService;
exports.LibrosService = LibrosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(libro_entity_1.LibroEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LibrosService);
//# sourceMappingURL=libros.service.js.map