import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWisataDto } from './dto/create-wisata.dto';
import { UpdateWisataDto } from './dto/update-wisata.dto';

@Injectable()
export class WisataService {
  constructor(private prisma: PrismaService) {}

  async create(createWisataDto: CreateWisataDto) {
    return this.prisma.destinasi.create({
      data: createWisataDto,
    });
  }

  async findAll() {
    return this.prisma.destinasi.findMany();
  }

  async findOne(id: number) {
    const item = await this.prisma.destinasi.findUnique({
      where: { id: Number(id) },
    });
    if (!item) throw new NotFoundException(`Destinasi dengan ID ${id} tidak ditemukan`);
    return item;
  }

  async update(id: number, updateWisataDto: UpdateWisataDto) {
    return this.prisma.destinasi.update({
      where: { id: Number(id) },
      data: updateWisataDto,
    });
  }

  async remove(id: number) {
    return this.prisma.destinasi.delete({
      where: { id: Number(id) },
    });
  }
}