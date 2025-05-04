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
exports.PrestamoController = void 0;
const common_1 = require("@nestjs/common");
const prestamo_service_1 = require("./prestamo.service");
const update_prestamo_dto_1 = require("./dto/update-prestamo.dto");
const swagger_1 = require("@nestjs/swagger");
const prestamo_entity_1 = require("./entities/prestamo.entity");
const create_prestamo_dto_1 = require("./dto/create-prestamo.dto");
const Paginacion_dto_1 = require("./dto/Paginacion-dto");
let PrestamoController = class PrestamoController {
    prestamoService;
    constructor(prestamoService) {
        this.prestamoService = prestamoService;
    }
    createPrestamo(CreatePrestamoDto) {
        return this.prestamoService.register(CreatePrestamoDto);
    }
    async findAll(paginacion) {
        return this.prestamoService.findAll(paginacion);
    }
    findOne(id) {
        return this.prestamoService.findOne(+id);
    }
    update(id, UpdatePrestamoDto) {
        return this.prestamoService.update(+id, UpdatePrestamoDto);
    }
    remove(id) {
        return this.prestamoService.remove(+id);
    }
};
exports.PrestamoController = PrestamoController;
__decorate([
    (0, common_1.Post)('prestamo'),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar préstamo' }),
    (0, swagger_1.ApiCreatedResponse)({ type: prestamo_entity_1.PrestamoEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prestamo_dto_1.CreatePrestamoDto]),
    __metadata("design:returntype", Promise)
], PrestamoController.prototype, "createPrestamo", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar libros' }),
    (0, swagger_1.ApiOkResponse)({ type: prestamo_entity_1.PrestamoEntity, isArray: true }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Paginacion_dto_1.PaginacionDto]),
    __metadata("design:returntype", Promise)
], PrestamoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar prestamo por id' }),
    (0, swagger_1.ApiOkResponse)({ type: prestamo_entity_1.PrestamoEntity, isArray: true }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrestamoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar registro por id' }),
    (0, swagger_1.ApiOkResponse)({ type: update_prestamo_dto_1.UpdatePrestamoDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prestamo_dto_1.UpdatePrestamoDto]),
    __metadata("design:returntype", Promise)
], PrestamoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar registro préstamo por id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrestamoController.prototype, "remove", null);
exports.PrestamoController = PrestamoController = __decorate([
    (0, common_1.Controller)('prestamo'),
    __metadata("design:paramtypes", [prestamo_service_1.PrestamoService])
], PrestamoController);
//# sourceMappingURL=prestamo.controller.js.map