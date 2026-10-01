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
exports.DestinasiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DestinasiService = class DestinasiService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.destinasi.findMany();
    }
    async findOne(id) {
        const data = await this.prisma.destinasi.findUnique({
            where: { id },
        });
        if (!data) {
            throw new common_1.NotFoundException(`Destinasi dengan id ${id} tidak ditemukan`);
        }
        return data;
    }
    create(dto) {
        return this.prisma.destinasi.create({
            data: dto,
        });
    }
    async update(id, dto) {
        const existing = await this.prisma.destinasi.findUnique({
            where: { id },
        });
        if (!existing) {
            throw new common_1.NotFoundException(`Destinasi dengan id ${id} tidak ditemukan`);
        }
        return this.prisma.destinasi.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        const existing = await this.prisma.destinasi.findUnique({
            where: { id },
        });
        if (!existing) {
            throw new common_1.NotFoundException(`Destinasi dengan id ${id} tidak ditemukan`);
        }
        return this.prisma.destinasi.delete({
            where: { id },
        });
    }
};
exports.DestinasiService = DestinasiService;
exports.DestinasiService = DestinasiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DestinasiService);
//# sourceMappingURL=destinasi.service.js.map