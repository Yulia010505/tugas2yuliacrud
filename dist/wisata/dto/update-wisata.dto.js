"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWisataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_wisata_dto_1 = require("./create-wisata.dto");
class UpdateWisataDto extends (0, swagger_1.PartialType)(create_wisata_dto_1.CreateWisataDto) {
}
exports.UpdateWisataDto = UpdateWisataDto;
//# sourceMappingURL=update-wisata.dto.js.map