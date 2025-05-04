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
exports.LibrosController = void 0;
const common_1 = require("@nestjs/common");
const libros_service_1 = require("./libros.service");
const create_libro_dto_1 = require("./dto/create-libro.dto");
const update_libro_dto_1 = require("./dto/update-libro.dto");
const swagger_1 = require("@nestjs/swagger");
const Paginacion_dto_1 = require("./dto/Paginacion-dto");
const libro_entity_1 = require("./entities/libro.entity");
let LibrosController = class LibrosController {
    librosService;
    constructor(librosService) {
        this.librosService = librosService;
    }
    create(createLibroDto) {
        return this.librosService.create(createLibroDto);
    }
    async findAll(paginacion) {
        return this.librosService.findAll(paginacion);
    }
    findOne(id) {
        return this.librosService.findOne(+id);
    }
    update(id, updateInterpreteDto) {
        return this.librosService.update(+id, updateInterpreteDto);
    }
    remove(id) {
        return this.librosService.remove(+id);
    }
};
exports.LibrosController = LibrosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar libro' }),
    (0, swagger_1.ApiCreatedResponse)({ type: libro_entity_1.LibroEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_libro_dto_1.CreateLibroDto]),
    __metadata("design:returntype", Promise)
], LibrosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar libros' }),
    (0, swagger_1.ApiOkResponse)({ type: libro_entity_1.LibroEntity, isArray: true }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Paginacion_dto_1.PaginacionDto]),
    __metadata("design:returntype", Promise)
], LibrosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar un libro por id' }),
    (0, swagger_1.ApiOkResponse)({ type: libro_entity_1.LibroEntity, isArray: true }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LibrosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar libro' }),
    (0, swagger_1.ApiOkResponse)({ type: update_libro_dto_1.UpdateLibroDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_libro_dto_1.UpdateLibroDto]),
    __metadata("design:returntype", Promise)
], LibrosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar registro libro por id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LibrosController.prototype, "remove", null);
exports.LibrosController = LibrosController = __decorate([
    (0, common_1.Controller)('libros'),
    __metadata("design:paramtypes", [libros_service_1.LibrosService])
], LibrosController);
//# sourceMappingURL=libros.controller.js.map