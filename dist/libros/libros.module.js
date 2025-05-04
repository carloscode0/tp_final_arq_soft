"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrosModule = void 0;
const common_1 = require("@nestjs/common");
const libros_service_1 = require("./libros.service");
const libros_controller_1 = require("./libros.controller");
const libro_entity_1 = require("./entities/libro.entity");
const typeorm_1 = require("@nestjs/typeorm");
let LibrosModule = class LibrosModule {
};
exports.LibrosModule = LibrosModule;
exports.LibrosModule = LibrosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([libro_entity_1.LibroEntity, libro_entity_1.AutorEntity])],
        controllers: [libros_controller_1.LibrosController],
        providers: [libros_service_1.LibrosService],
    })
], LibrosModule);
//# sourceMappingURL=libros.module.js.map