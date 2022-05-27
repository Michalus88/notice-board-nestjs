import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdModule } from './ad/ad.module';
import { Ad } from './ad/ad.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Ad],
      bigNumberStrings: false,
      logging: true,
      synchronize: true,
    }),
    AdModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
