"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLibroDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_libro_dto_1 = require("./create-libro.dto");
class UpdateLibroDto extends (0, swagger_1.PartialType)(create_libro_dto_1.CreateLibroDto) {
}
exports.UpdateLibroDto = UpdateLibroDto;
//# sourceMappingURL=update-libro.dto.js.map