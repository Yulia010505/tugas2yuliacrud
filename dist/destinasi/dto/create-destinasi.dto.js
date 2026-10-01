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
exports.CreateDestinasDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateDestinasDto {
}
exports.CreateDestinasDto = CreateDestinasDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nama destinasi',
        example: 'Pantai Kuta',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDestinasDto.prototype, "nama", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Deskripsi destinasi',
        example: 'Pantai yang terkenal di Bali',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateDestinasDto.prototype, "deskripsi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lokasi destinasi',
        example: 'Bali',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDestinasDto.prototype, "lokasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Kategori destinasi',
        example: 'Wisata Alam',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDestinasDto.prototype, "kategori", void 0);
//# sourceMappingURL=create-destinasi.dto.js.map