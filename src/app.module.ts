import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdModule } from './ad/ad.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
