import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDestinasDto {
  @ApiProperty({
    description: 'Nama destinasi',
    example: 'Pantai Kuta',
  })
  @IsString()
  @IsNotEmpty()
  nama!: string;

  @ApiProperty({
    description: 'Deskripsi destinasi',
    example: 'Pantai yang terkenal di Bali',
  })
  @IsString()
  @IsNotEmpty()
  deskripsi!: string;

  @ApiPropertyOptional({
    description: 'Lokasi destinasi',
    example: 'Bali',
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