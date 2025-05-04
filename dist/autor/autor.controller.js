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
exports.AutorController = void 0;
const common_1 = require("@nestjs/common");
const autor_service_1 = require("./autor.service");
const create_autor_dto_1 = require("./dto/create-autor.dto");
const update_autor_dto_1 = require("./dto/update-autor.dto");
const swagger_1 = require("@nestjs/swagger");
const Paginacion_dto_1 = require("./dto/Paginacion-dto");
const autor_entity_1 = require("./entities/autor.entity");
let AutorController = class AutorController {
    autorService;
    constructor(autorService) {
        this.autorService = autorService;
    }
    create(CreateAutorDto) {
        return this.autorService.create(CreateAutorDto);
    }
    async findAll(paginacion) {
        return this.autorService.findAll(paginacion);
    }
    findOne(id) {
        return this.autorService.findOne(+id);
    }
    update(id, UpdateAutorDto) {
        return this.autorService.update(+id, UpdateAutorDto);
    }
    remove(id) {
        return this.autorService.remove(+id);
    }
};
exports.AutorController = AutorController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar autores' }),
    (0, swagger_1.ApiCreatedResponse)({ type: autor_entity_1.AutorEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_autor_dto_1.CreateAutorDto]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar autores' }),
    (0, swagger_1.ApiOkResponse)({ type: autor_entity_1.AutorEntity, isArray: true }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Paginacion_dto_1.PaginacionDto]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar autor por id' }),
    (0, swagger_1.ApiOkResponse)({ type: autor_entity_1.AutorEntity, isArray: true }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar autor' }),
    (0, swagger_1.ApiOkResponse)({ type: update_autor_dto_1.UpdateAutorDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_autor_dto_1.UpdateAutorDto]),
    __metadata("design:returntype", Promise)
], AutorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar autor' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutorController.prototype, "remove", null);
exports.AutorController = AutorController = __decorate([
    (0, common_1.Controller)('autor'),
    __metadata("design:paramtypes", [autor_service_1.AutorService])
], AutorController);
//# sourceMappingURL=autor.controller.js.map