import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateDestinasDto {
  @ApiPropertyOptional({
    description: 'Nama destinasi',
    example: 'Gunung Bromo',
  })
  @IsString()
  @IsOptional()
  nama?: string;

  @ApiPropertyOptional({
    description: 'Deskripsi destinasi',
    example: 'Gunung terkenal di Jawa Timur',
  })
  @IsString()
  @IsOptional()
  deskripsi?: string;

  @ApiPropertyOptional({
    description: 'Lokasi destinasi',
    example: 'Jawa Timur',
  })
  @IsString()
  @IsOptional()
  lokasi?: string;

  @ApiPropertyOptional({
    description: 'Kategori destinasi',
    example: 'Wisata Alam',
  })
  @IsString()
  @IsOptional()
  kategori?: string;
}
