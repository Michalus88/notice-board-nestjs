import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdModule } from './ad/ad.module';
import { Ad } from './ad/ad.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'mysql',
      // host: 'localhost',
      // username: 'michalmk_michalmk',
      // password: 'ACd78iAuQv',
      // database: 'michalmk_ads-map',
      // entities: ['dist/**/**.entity{.ts,.js}'],
      // synchronize: true,
      type: 'mysql',
      host: 'localhost',
      username: 'michalmk_michalmk',
      password: 'ACd78iAuQv',
      database: 'michalmk_ads-map',
      entities: [Ad],
      bigNumberStrings: false,
      logging: true,
      synchronize: false,
    }),
    AdModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
