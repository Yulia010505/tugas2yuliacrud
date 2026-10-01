import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateDestinasDto } from './dto/create-destinasi.dto';
import { UpdateDestinasDto } from './dto/update-destinasi.dto';
import { DestinasiService } from './destinasi.service';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {
  constructor(private readonly destinasiService: DestinasiService) {}

  @Get()
  @ApiOperation({ summary: 'Menampilkan semua destinasi' })
  @ApiResponse({ status: 200, description: 'Berhasil menampilkan semua data destinasi' })
  findAll() {
    return this.destinasiService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan satu destinasi berdasarkan id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Berhasil menampilkan destinasi' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Membuat destinasi baru' })
  @ApiBody({ type: CreateDestinasDto })
  @ApiResponse({ status: 201, description: 'Destinasi berhasil dibuat' })
  create(@Body() createDestinasDto: CreateDestinasDto) {
    return this.destinasiService.create(createDestinasDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mengubah destinasi berdasarkan id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateDestinasDto })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil diubah' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDestinasDto: UpdateDestinasDto,
  ) {
    return this.destinasiService.update(id, updateDestinasDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus destinasi berdasarkan id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.remove(id);
  }
}
