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
exports.LibroEntity = exports.AutorEntity = void 0;
const typeorm_1 = require("typeorm");
let AutorEntity = class AutorEntity {
    id;
    nombre;
    relLibro;
};
exports.AutorEntity = AutorEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AutorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AutorEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => LibroEntity, (libro1) => libro1.relAutor),
    __metadata("design:type", Array)
], AutorEntity.prototype, "relLibro", void 0);
exports.AutorEntity = AutorEntity = __decorate([
    (0, typeorm_1.Entity)('autor')
], AutorEntity);
let LibroEntity = class LibroEntity {
    numero;
    id;
    nombre;
    codigo;
    autor;
    autor_id;
    relAutor;
};
exports.LibroEntity = LibroEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LibroEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LibroEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LibroEntity.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LibroEntity.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LibroEntity.prototype, "autor_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => AutorEntity, (autor) => autor.relLibro),
    (0, typeorm_1.JoinColumn)({ name: 'autor_id' }),
    __metadata("design:type", AutorEntity)
], LibroEntity.prototype, "relAutor", void 0);
exports.LibroEntity = LibroEntity = __decorate([
    (0, typeorm_1.Entity)('Libro')
], LibroEntity);
//# sourceMappingURL=libro.entity.js.map