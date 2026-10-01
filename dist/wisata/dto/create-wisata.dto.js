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
exports.CreateWisataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateWisataDto {
}
exports.CreateWisataDto = CreateWisataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pantai Kuta', description: 'Nama destinasi wisata' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWisataDto.prototype, "nama", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pantai yang terkenal di Bali', description: 'Deskripsi destinasi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWisataDto.prototype, "deskripsi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bali', description: 'Lokasi destinasi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWisataDto.prototype, "lokasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bahari', description: 'Kategori wisata' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWisataDto.prototype, "kategori", void 0);
//# sourceMappingURL=create-wisata.dto.js.map