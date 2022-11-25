import { Module } from '@nestjs/common';

import { SharedNestService } from '@test-nx/shared/nest';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SharedNestService],
})
export class AppModule {}
