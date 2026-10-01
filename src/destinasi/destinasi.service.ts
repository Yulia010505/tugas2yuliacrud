import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinasDto } from './dto/create-destinasi.dto';
import { UpdateDestinasDto } from './dto/update-destinasi.dto';

@Injectable()
export class DestinasiService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.destinasi.findMany();
  }

  async findOne(id: number) {
    const data = await this.prisma.destinasi.findUnique({
      where: { id },
    });

    if (!data) {
      throw new NotFoundException(`Destinasi dengan id ${id} tidak ditemukan`);
    }

    return data;
  }

  create(dto: CreateDestinasDto) {
    return this.prisma.destinasi.create({
      data: dto,
    });
  }

  async update(id: number, dto: UpdateDestinasDto) {
    const existing = await this.prisma.destinasi.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException(`Destinasi dengan id ${id} tidak ditemukan`);
    }

    return this.prisma.destinasi.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    const existing = await this.prisma.destinasi.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException(`Destinasi dengan id ${id} tidak ditemukan`);
    }

    return this.prisma.destinasi.delete({
      where: { id },
    });
  }
}
