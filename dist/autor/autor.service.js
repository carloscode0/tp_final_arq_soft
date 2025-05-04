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
exports.AutorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const autor_entity_1 = require("./entities/autor.entity");
const typeorm_2 = require("typeorm");
let AutorService = class AutorService {
    repositoryAutor;
    constructor(repositoryAutor) {
        this.repositoryAutor = repositoryAutor;
    }
    async create(CreateAutorDto) {
        if (await this.repositoryAutor.findOneBy({ nombre: CreateAutorDto.nombre }))
            throw new common_1.ConflictException(`El nombre '${CreateAutorDto.nombre}' ya existe.`);
        const newAutor = await this.repositoryAutor.save({
            nombre: CreateAutorDto.nombre,
        });
        return newAutor;
    }
    async findAll({ busqueda, pagina, limite }) {
        const [autores, totalreg] = await this.repositoryAutor.findAndCount({
            skip: (pagina - 1) * limite,
            take: limite,
            where: busqueda ? [{ nombre: (0, typeorm_2.Like)(`%${busqueda}%`) }] : undefined,
            order: { id: 'DESC' },
        });
        var totalpag = Math.ceil(totalreg / limite);
        let numero = (pagina - 1) * limite + 1;
        for (const item of autores) {
            item.numero = numero++;
        }
        return { totalreg, totalpag, autores };
    }
    async findOne(id) {
        const libro = await this.repositoryAutor.findOne({
            where: { id },
        });
        if (!libro)
            throw new common_1.ConflictException(`El autor con el: ${id} no existe.`);
        return libro;
    }
    async update(id, UpdateAutorDto) {
        const existe = await this.repositoryAutor.findOne({ where: { id } });
        if (!existe)
            throw new common_1.ConflictException(`El libro ${id} no existe.`);
        if (UpdateAutorDto.nombre == existe.nombre)
            throw new common_1.ConflictException(`El nombre '${existe.nombre}' ya existe.`);
        const update = Object.assign(existe, UpdateAutorDto);
        return await this.repositoryAutor.save(update);
    }
    async remove(id) {
        const existe = await this.repositoryAutor.findOne({ where: { id } });
        if (!existe)
            throw new common_1.NotFoundException(`El préstamo con ID ${id} no existe.`);
        await this.repositoryAutor.delete(id);
        return { message: `Préstamo con ID ${id} eliminado correctamente.` };
    }
};
exports.AutorService = AutorService;
exports.AutorService = AutorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(autor_entity_1.AutorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AutorService);
//# sourceMappingURL=autor.service.js.map