import { Injectable } from '@nestjs/common';
import { AdSanitize } from 'types';
import { Ad } from './ad.entity';
import { CreateAdDto } from './dto/create-ad.dto';

@Injectable()
export class AdService {
  async create(createAdDto: CreateAdDto) {
    const { name, description, price, lat, lon, allegroUrl, olxUrl } =
      createAdDto;
    const ad = new Ad();
    ad.lat = lat;
    ad.lon = lon;
    ad.name = name;
    ad.price = price;
    ad.description = description;
    ad.allegroUrl = allegroUrl;
    ad.olxUrl = olxUrl;
    await ad.save();

    return ad;
  }

  async getOne(id: string) {
    return await Ad.findOne({
      where: {
        id,
      },
    });
  }

  async getAll(): Promise<AdSanitize[]> {
    return (await Ad.findOne({
      select: ['id', 'lat', 'lon'],
    })) as unknown as AdSanitize[];
  }
}
