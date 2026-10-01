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
exports.WisataService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let WisataService = class WisataService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createWisataDto) {
        return this.prisma.destinasi.create({
            data: createWisataDto,
        });
    }
    async findAll() {
        return this.prisma.destinasi.findMany();
    }
    async findOne(id) {
        const item = await this.prisma.destinasi.findUnique({
            where: { id: Number(id) },
        });
        if (!item)
            throw new common_1.NotFoundException(`Destinasi dengan ID ${id} tidak ditemukan`);
        return item;
    }
    async update(id, updateWisataDto) {
        return this.prisma.destinasi.update({
            where: { id: Number(id) },
            data: updateWisataDto,
        });
    }
    async remove(id) {
        return this.prisma.destinasi.delete({
            where: { id: Number(id) },
        });
    }
};
exports.WisataService = WisataService;
exports.WisataService = WisataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WisataService);
//# sourceMappingURL=wisata.service.js.map