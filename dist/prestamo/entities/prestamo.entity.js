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
exports.PrestamoEntity = exports.Prestamo = void 0;
const typeorm_1 = require("typeorm");
class Prestamo {
}
exports.Prestamo = Prestamo;
let PrestamoEntity = class PrestamoEntity {
    id;
    fecha;
    lector;
    libro_id;
    numero;
};
exports.PrestamoEntity = PrestamoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PrestamoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], PrestamoEntity.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrestamoEntity.prototype, "lector", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PrestamoEntity.prototype, "libro_id", void 0);
exports.PrestamoEntity = PrestamoEntity = __decorate([
    (0, typeorm_1.Entity)('prestamo')
], PrestamoEntity);
//# sourceMappingURL=prestamo.entity.js.map