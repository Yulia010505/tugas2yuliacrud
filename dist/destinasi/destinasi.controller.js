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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinasiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_destinasi_dto_1 = require("./dto/create-destinasi.dto");
const update_destinasi_dto_1 = require("./dto/update-destinasi.dto");
const destinasi_service_1 = require("./destinasi.service");
let DestinasiController = class DestinasiController {
    constructor(destinasiService) {
        this.destinasiService = destinasiService;
    }
    findAll() {
        return this.destinasiService.findAll();
    }
    findOne(id) {
        return this.destinasiService.findOne(id);
    }
    create(createDestinasDto) {
        return this.destinasiService.create(createDestinasDto);
    }
    update(id, updateDestinasDto) {
        return this.destinasiService.update(id, updateDestinasDto);
    }
    remove(id) {
        return this.destinasiService.remove(id);
    }
};
exports.DestinasiController = DestinasiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Menampilkan semua destinasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Berhasil menampilkan semua data destinasi' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menampilkan satu destinasi berdasarkan id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Berhasil menampilkan destinasi' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat destinasi baru' }),
    (0, swagger_1.ApiBody)({ type: create_destinasi_dto_1.CreateDestinasDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Destinasi berhasil dibuat' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_destinasi_dto_1.CreateDestinasDto]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mengubah destinasi berdasarkan id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ type: update_destinasi_dto_1.UpdateDestinasDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Destinasi berhasil diubah' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_destinasi_dto_1.UpdateDestinasDto]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus destinasi berdasarkan id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Destinasi berhasil dihapus' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DestinasiController.prototype, "remove", null);
exports.DestinasiController = DestinasiController = __decorate([
    (0, swagger_1.ApiTags)('Destinasi'),
    (0, common_1.Controller)('destinasi'),
    __metadata("design:paramtypes", [destinasi_service_1.DestinasiService])
], DestinasiController);
//# sourceMappingURL=destinasi.controller.js.map