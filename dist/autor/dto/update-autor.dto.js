"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_autor_dto_1 = require("./create-autor.dto");
class UpdateAutorDto extends (0, swagger_1.PartialType)(create_autor_dto_1.CreateAutorDto) {
}
exports.UpdateAutorDto = UpdateAutorDto;
//# sourceMappingURL=update-autor.dto.js.map