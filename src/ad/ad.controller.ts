import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdService } from './ad.service';
import { CreateAdDto } from './dto/create-ad.dto';

@Controller('api/ad')
export class AdController {
  constructor(private adService: AdService) {}

  @Get()
  getAll() {
    return this.adService.getAll();
  }

  @Post()
  create(@Body() createAdDto: CreateAdDto) {
    return this.adService.create(createAdDto);
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return this.adService.getOne(id);
  }
}
