import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWisataDto {
  @ApiProperty({ example: 'Pantai Kuta', description: 'Nama destinasi wisata' })
  @IsString()
  @IsNotEmpty()
  nama!: string;

  @ApiProperty({ example: 'Pantai yang terkenal di Bali', description: 'Deskripsi destinasi' })
  @IsString()
  @IsNotEmpty()
  deskripsi!: string;

  @ApiProperty({ example: 'Bali', description: 'Lokasi destinasi' })
  @IsString()
  @IsNotEmpty()
  lokasi!: string;

  @ApiProperty({ example: 'Bahari', description: 'Kategori wisata' })
  @IsString()
  @IsNotEmpty()
  kategori!: string;
}