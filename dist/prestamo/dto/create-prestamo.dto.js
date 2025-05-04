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
exports.CreatePrestamoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePrestamoDto {
    fecha;
    lector;
    libro_id;
}
exports.CreatePrestamoDto = CreatePrestamoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha del préstamo',
        example: '2025-04-23',
        type: String,
    }),
    (0, class_validator_1.IsString)({ message: 'La fecha debe ser una cadena de texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha no puede estar vacía' }),
    __metadata("design:type", String)
], CreatePrestamoDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del lector',
        example: 'Juan Pérez',
        type: String,
    }),
    (0, class_validator_1.IsString)({ message: 'El lector debe ser una cadena de texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El lector no puede estar vacío' }),
    __metadata("design:type", String)
], CreatePrestamoDto.prototype, "lector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del libro prestado',
        example: 3,
        type: Number,
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El ID del libro debe ser un número' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID del libro no puede estar vacío' }),
    __metadata("design:type", Number)
], CreatePrestamoDto.prototype, "libro_id", void 0);
//# sourceMappingURL=create-prestamo.dto.js.map