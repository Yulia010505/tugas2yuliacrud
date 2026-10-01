import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DestinasiController } from './destinasi.controller';
import { DestinasiService } from './destinasi.service';

@Module({
  imports: [PrismaModule],
  controllers: [DestinasiController],
  providers: [DestinasiService],
  exports: [DestinasiService],
})
export class DestinasiModule {}
