import { Module } from '@nestjs/common';
import { DestinasiModule } from './destinasi/destinasi.module';
import { WisataModule } from './wisata/wisata.module';

@Module({
  imports: [DestinasiModule, WisataModule],
})
export class AppModule {}
