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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginacionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PaginacionDto {
    limite;
    pagina;
    busqueda;
}
exports.PaginacionDto = PaginacionDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({
        description: 'Cantidad de elementos por página (Cantidad minima 1)',
        example: 10,
        required: false,
        minimum: 1,
    }),
    __metadata("design:type", Number)
], PaginacionDto.prototype, "limite", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)({
        description: 'Número de la página actual a consultar (Cantidad minima 1)',
        example: 1,
        required: false,
        minimum: 1,
    }),
    __metadata("design:type", Number)
], PaginacionDto.prototype, "pagina", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'Texto para filtrar resultados mediante coincidencia(el campo pagina debe estar en 1 para recibir resultado)',
        example: '',
        required: false,
    }),
    __metadata("design:type", String)
], PaginacionDto.prototype, "busqueda", void 0);
//# sourceMappingURL=Paginacion-dto.js.map